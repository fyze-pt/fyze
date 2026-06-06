"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  X,
  Upload,
  FileText,
  Loader2,
  Check,
} from "lucide-react";
import { submitToGoogleSheets } from "@/lib/googleSheets";
import { trackEvent } from "@/lib/analytics";
import { useLocale } from "@/components/LocaleProvider";

type Ctx = {
  open: (origin?: string) => void;
  close: () => void;
};

const SiteFormModalCtx = createContext<Ctx | null>(null);

export function useSiteFormModal(): Ctx {
  const ctx = useContext(SiteFormModalCtx);
  if (!ctx)
    throw new Error("useSiteFormModal must be used inside <SiteFormModalProvider>");
  return ctx;
}

export function SiteFormModalProvider({
  children,
  variant,
}: {
  children: ReactNode;
  variant?: string;
}) {
  const { ui } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState<string | undefined>(undefined);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const open = useCallback(
    (o?: string) => {
      setOrigin(o);
      setIsOpen(true);
      trackEvent("cta_click", {
        location: "site_form_open",
        origin: o,
        variant,
      });
      trackEvent("form_start", { form: "site_form", origin: o, variant });
    },
    [variant],
  );

  const close = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setCurrentStep(1);
      setSubmitStatus("idle");
    }, 300);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setSelectedFiles(Array.from(e.target.files));
  };

  const removeFile = (i: number) =>
    setSelectedFiles(selectedFiles.filter((_, idx) => idx !== i));

  const nextStep = () => setCurrentStep((p) => Math.min(p + 1, 3));
  const prevStep = () => setCurrentStep((p) => Math.max(p - 1, 1));

  const handleFinalSubmit = async () => {
    setSubmitStatus("loading");
    const form = formRef.current!;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") data[key] = value;
    });

    try {
      await submitToGoogleSheets("Pedido de Site", {
        ...data,
        origin: origin ?? "",
        variant: variant ?? "",
      });
      trackEvent("form_submit", { form: "site_form", origin, variant });
      setSubmitStatus("success");
      setTimeout(() => {
        close();
        setSelectedFiles([]);
      }, 2000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  };

  return (
    <SiteFormModalCtx.Provider value={{ open, close }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl p-5 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh] flex flex-col"
            >
              <button
                onClick={close}
                aria-label={ui.siteForm.close}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-2 text-white pr-10">
                  {ui.siteForm.title}{" "}
                  <span className="text-fyze">{ui.siteForm.titleHighlight}</span>
                </h3>
                <p className="text-zinc-400 font-medium">
                  {ui.siteForm.stepLabel.replace("{n}", String(currentStep))}
                </p>
                <div className="w-full bg-zinc-950 h-2 rounded-full mt-4 overflow-hidden">
                  <motion.div
                    className="h-full bg-fyze"
                    initial={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                    animate={{ width: `${(currentStep / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <form
                ref={formRef}
                className="flex-1 flex flex-col"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (currentStep === 3) handleFinalSubmit();
                  else nextStep();
                }}
              >
                <div className="flex-1 relative">
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2">
                          {ui.siteForm.step1Title}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Field name="nome" label={ui.siteForm.fields.nome.label} placeholder={ui.siteForm.fields.nome.ph} required />
                          <Field name="email" label={ui.siteForm.fields.email.label} type="email" placeholder={ui.siteForm.fields.email.ph} required />
                          <Field name="whatsapp" label={ui.siteForm.fields.whatsapp.label} type="tel" placeholder={ui.siteForm.fields.whatsapp.ph} required />
                          <Field name="tipo_negocio" label={ui.siteForm.fields.tipoNegocio.label} placeholder={ui.siteForm.fields.tipoNegocio.ph} required />
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2">
                          {ui.siteForm.step2Title}
                        </h4>
                        <RadioGroup
                          name="objetivo"
                          label={ui.siteForm.objetivo.label}
                          options={ui.siteForm.objetivo.options}
                        />
                        <RadioGroup
                          name="presenca_google"
                          label={ui.siteForm.presencaGoogle.label}
                          options={ui.siteForm.presencaGoogle.options}
                        />
                        <RadioGroup
                          name="clientes_novos"
                          label={ui.siteForm.clientesNovos.label}
                          options={ui.siteForm.clientesNovos.options}
                        />
                        <RadioGroup
                          name="prazo"
                          label={ui.siteForm.prazo.label}
                          options={ui.siteForm.prazo.options}
                        />
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2">
                          {ui.siteForm.step3Title}
                        </h4>
                        <Field
                          name="sites_referencia"
                          label={ui.siteForm.sitesRef.label}
                          placeholder={ui.siteForm.sitesRef.ph}
                        />
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                            {ui.siteForm.logoUpload.label}
                          </label>
                          <div className="relative w-full bg-zinc-950 border border-white/10 border-dashed rounded-xl px-4 py-8 flex flex-col items-center justify-center text-center hover:border-fyze transition-colors cursor-pointer group">
                            <Upload className="w-8 h-8 text-zinc-500 mb-3 group-hover:text-fyze transition-colors" />
                            <span className="text-sm text-zinc-400 font-medium">
                              {ui.siteForm.logoUpload.dropText}
                            </span>
                            <span className="text-xs text-zinc-500 mt-1">
                              {ui.siteForm.logoUpload.fileTypes}
                            </span>
                            <input
                              type="file"
                              multiple
                              onChange={handleFileChange}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                          </div>
                          {selectedFiles.length > 0 && (
                            <div className="mt-4 space-y-2">
                              {selectedFiles.map((file, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between bg-zinc-950 border border-white/5 rounded-lg px-4 py-2"
                                >
                                  <div className="flex items-center gap-3 overflow-hidden">
                                    <FileText className="w-4 h-4 text-fyze shrink-0" />
                                    <span className="text-sm text-zinc-300 truncate">
                                      {file.name}
                                    </span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => removeFile(index)}
                                    className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mt-8 pt-4 border-t border-white/10">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center justify-center gap-2 bg-zinc-950 text-white border border-white/10 font-bold uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-zinc-800 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      {ui.siteForm.voltar}
                    </button>
                  ) : (
                    <div className="hidden sm:block" />
                  )}

                  <button
                    type="submit"
                    disabled={
                      submitStatus === "loading" || submitStatus === "success"
                    }
                    className="flex w-full sm:flex-1 sm:max-w-[240px] items-center justify-center gap-2 bg-fyze text-zinc-950 font-black uppercase tracking-[0.14em] sm:tracking-widest px-6 py-4 rounded-xl hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {currentStep === 3 ? (
                      submitStatus === "loading" ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : submitStatus === "success" ? (
                        <>
                          <Check className="w-5 h-5" /> {ui.siteForm.enviado}
                        </>
                      ) : submitStatus === "error" ? (
                        ui.siteForm.erro
                      ) : (
                        ui.siteForm.enviarPedido
                      )
                    ) : (
                      <>
                        {ui.siteForm.seguinte} <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SiteFormModalCtx.Provider>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fyze transition-colors"
      />
    </div>
  );
}

function RadioGroup({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-bold text-zinc-300">{label}</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-zinc-950 cursor-pointer hover:border-fyze/50 transition-colors has-[:checked]:border-fyze has-[:checked]:bg-fyze/5"
          >
            <input
              type="radio"
              name={name}
              value={option}
              className="w-4 h-4 accent-fyze"
              required
            />
            <span className="text-zinc-300 text-sm">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
