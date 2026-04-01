import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, X, Upload, FileText, Loader2, Check } from "lucide-react";
import { submitToGoogleSheets } from "../lib/googleSheets";

export function RiskFreeOffer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (indexToRemove: number) => {
    setSelectedFiles(selectedFiles.filter((_, index) => index !== indexToRemove));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setCurrentStep(1);
      setSubmitStatus("idle");
    }, 300);
  };

  const handleFinalSubmit = async () => {
    setSubmitStatus("loading");

    const form = formRef.current!;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") data[key] = value;
    });

    try {
      await submitToGoogleSheets("Pedido de Site", data);
      setSubmitStatus("success");
      setTimeout(() => {
        closeModal();
        setSelectedFiles([]);
      }, 2000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  };

  return (
    <>
      <section className="py-20 sm:py-24 bg-zinc-950 relative border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-zinc-900 border border-fyze/30 p-6 sm:p-10 md:p-16 shadow-[0_0_50px_rgba(0,240,255,0.05)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-fyze/20 via-transparent to-transparent opacity-50" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div className="max-w-2xl">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.92] sm:leading-[0.9] mb-5 sm:mb-8 text-white">
                  Criamos o seu site <br />
                  <span className="text-fyze">sem compromisso.</span>
                </h2>
                <p className="text-base sm:text-xl text-zinc-300 font-medium leading-relaxed mb-8 sm:mb-10">
                  Confiamos tanto no nosso trabalho que assumimos o risco. Desenhamos e desenvolvemos o seu site. Se gostar do resultado, avançamos. Se não gostar, não paga absolutamente nada.
                </p>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex w-full sm:w-auto group items-center justify-center gap-3 bg-fyze text-zinc-950 px-8 sm:px-10 py-4 sm:py-6 rounded-2xl text-base sm:text-lg font-black uppercase tracking-[0.16em] sm:tracking-widest transition-all hover:bg-white hover:scale-105 hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]"
                >
                  Quero o meu site
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl flex flex-col">
                <div className="h-10 bg-zinc-900 border-b border-white/10 flex items-center px-4 gap-2 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="relative flex-1 w-full overflow-hidden">
                  <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="absolute top-0 left-0 w-full"
                  >
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Website Placeholder 1" className="w-full h-auto object-cover border-b border-white/10" referrerPolicy="no-referrer" />
                    <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800" alt="Website Placeholder 2" className="w-full h-auto object-cover border-b border-white/10" referrerPolicy="no-referrer" />
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Website Placeholder 3" className="w-full h-auto object-cover border-b border-white/10" referrerPolicy="no-referrer" />
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Website Placeholder 1" className="w-full h-auto object-cover border-b border-white/10" referrerPolicy="no-referrer" />
                    <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800" alt="Website Placeholder 2" className="w-full h-auto object-cover border-b border-white/10" referrerPolicy="no-referrer" />
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Website Placeholder 3" className="w-full h-auto object-cover border-b border-white/10" referrerPolicy="no-referrer" />
                  </motion.div>

                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-zinc-950 to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl p-5 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh] flex flex-col"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-2 text-white pr-10">
                  Conte-nos sobre o seu <span className="text-fyze">projeto</span>
                </h3>
                <p className="text-zinc-400 font-medium">
                  Passo {currentStep} de 3
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
                  if (currentStep === 3) {
                    handleFinalSubmit();
                  } else {
                    nextStep();
                  }
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
                        <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2">Informações de Contacto</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Nome</label>
                            <input type="text" name="nome" required className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fyze transition-colors" placeholder="O seu nome" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email</label>
                            <input type="email" name="email" required className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fyze transition-colors" placeholder="O seu email" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">WhatsApp</label>
                            <input type="tel" name="whatsapp" required className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fyze transition-colors" placeholder="O seu número" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Tipo de Negócio</label>
                            <input type="text" name="tipo_negocio" required className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fyze transition-colors" placeholder="Ex: Restaurante, Clínica..." />
                          </div>
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
                        <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2">Sobre o Projeto</h4>

                        <div className="space-y-3">
                          <label className="text-sm font-bold text-zinc-300">Qual seu principal objetivo com um website?</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {["Gerar mais clientes", "Melhorar imagem e aumentar autoridade", "Vender online", "Outro"].map((option) => (
                              <label key={option} className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-zinc-950 cursor-pointer hover:border-fyze/50 transition-colors has-[:checked]:border-fyze has-[:checked]:bg-fyze/5">
                                <input type="radio" name="objetivo" value={option} className="w-4 h-4 accent-fyze" required />
                                <span className="text-zinc-300 text-sm">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-sm font-bold text-zinc-300">Já tem presença no Google? (Google Meu Negócio)</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {["Sim", "Não"].map((option) => (
                              <label key={option} className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-zinc-950 cursor-pointer hover:border-fyze/50 transition-colors has-[:checked]:border-fyze has-[:checked]:bg-fyze/5">
                                <input type="radio" name="presenca_google" value={option} className="w-4 h-4 accent-fyze" required />
                                <span className="text-zinc-300 text-sm">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-sm font-bold text-zinc-300">Quantos clientes novos gostaria de gerar por mês através do website?</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {["0 - 10", "10 - 50", "50 - 100", "100 +"].map((option) => (
                              <label key={option} className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-zinc-950 cursor-pointer hover:border-fyze/50 transition-colors has-[:checked]:border-fyze has-[:checked]:bg-fyze/5">
                                <input type="radio" name="clientes_novos" value={option} className="w-4 h-4 accent-fyze" required />
                                <span className="text-zinc-300 text-sm">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-sm font-bold text-zinc-300">Quando pretende ter o website pronto?</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {["O quanto antes", "1 - 3 meses", "Só estou a avaliar"].map((option) => (
                              <label key={option} className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-zinc-950 cursor-pointer hover:border-fyze/50 transition-colors has-[:checked]:border-fyze has-[:checked]:bg-fyze/5">
                                <input type="radio" name="prazo" value={option} className="w-4 h-4 accent-fyze" required />
                                <span className="text-zinc-300 text-sm">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
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
                        <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2">Referências</h4>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Sites de Referência (Opcional)</label>
                          <input type="text" name="sites_referencia" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fyze transition-colors" placeholder="Links de sites que gosta" />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Logomarca ou Identidade Visual (Opcional)</label>
                          <div className="relative w-full bg-zinc-950 border border-white/10 border-dashed rounded-xl px-4 py-8 flex flex-col items-center justify-center text-center hover:border-fyze transition-colors cursor-pointer group">
                            <Upload className="w-8 h-8 text-zinc-500 mb-3 group-hover:text-fyze transition-colors" />
                            <span className="text-sm text-zinc-400 font-medium">Clique para fazer upload ou arraste os ficheiros</span>
                            <span className="text-xs text-zinc-500 mt-1">PNG, JPG, PDF ou SVG (Máx. 10MB)</span>
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
                                <div key={index} className="flex items-center justify-between bg-zinc-950 border border-white/5 rounded-lg px-4 py-2">
                                  <div className="flex items-center gap-3 overflow-hidden">
                                    <FileText className="w-4 h-4 text-fyze shrink-0" />
                                    <span className="text-sm text-zinc-300 truncate">{file.name}</span>
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
                      Voltar
                    </button>
                  ) : (
                    <div className="hidden sm:block" />
                  )}

                  <button
                    type="submit"
                    disabled={submitStatus === "loading" || submitStatus === "success"}
                    className="flex w-full sm:flex-1 sm:max-w-[240px] items-center justify-center gap-2 bg-fyze text-zinc-950 font-black uppercase tracking-[0.14em] sm:tracking-widest px-6 py-4 rounded-xl hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {currentStep === 3 ? (
                      submitStatus === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> :
                      submitStatus === "success" ? <><Check className="w-5 h-5" /> Enviado!</> :
                      submitStatus === "error" ? "Erro. Tente novamente." :
                      "Enviar Pedido"
                    ) : (
                      <>Seguinte <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
