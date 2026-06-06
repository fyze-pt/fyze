import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getLocale } from "@/lib/locale.server";
import { getUICopy } from "@/data/ui-copy";

export async function generateMetadata(): Promise<Metadata> {
  const ui = getUICopy(await getLocale());
  return {
    title: ui.meta.privacidade.title,
    description: ui.meta.privacidade.description,
    robots: { index: true, follow: true },
  };
}

const LAST_UPDATED = "29 de abril de 2026";
const LAST_UPDATED_EN = "April 29, 2026";

function PrivacyBodyPt() {
  return (
    <>
      <header className="mb-12">
        <Link
          href="/"
          className="text-sm text-zinc-400 hover:text-fyze font-bold uppercase tracking-widest mb-8 inline-block"
        >
          ← Voltar ao início
        </Link>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-4">
          Política de <span className="text-fyze">Privacidade</span>
        </h1>
        <p className="text-zinc-500 text-sm">
          Última atualização: {LAST_UPDATED}
        </p>
      </header>

      <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed space-y-10 [&_h2]:text-white [&_h2]:font-black [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h3]:text-white [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_p]:text-zinc-300 [&_p]:font-medium [&_li]:text-zinc-300 [&_a]:text-fyze [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-white">
        <section>
          <p>
            A Fyze Agency (“Fyze”, “nós”) compromete-se a proteger a
            privacidade dos visitantes deste website e dos seus dados
            pessoais, em conformidade com o Regulamento Geral de Proteção
            de Dados (UE) 2016/679 (“RGPD”) e a Lei n.º 58/2019, de 8 de
            agosto.
          </p>
          <p>
            Esta política descreve quais os dados que recolhemos, com que
            finalidade, qual a nossa base legal, durante quanto tempo os
            conservamos e quais os direitos que lhe assistem.
          </p>
        </section>

        <section>
          <h2>1. Responsável pelo tratamento</h2>
          <p>
            <strong>Fyze Agency</strong>
            <br />
            Lisboa &amp; Algarve, Portugal
            <br />
            Email: <a href="mailto:hello@fyze.pt">hello@fyze.pt</a>
            <br />
            Telefone:{" "}
            <a href="tel:+351915709951">+351 915 709 951</a>
          </p>
          <p>
            Para qualquer questão relacionada com a proteção dos seus dados
            pessoais, pode contactar-nos diretamente pelo email indicado
            acima.
          </p>
        </section>

        <section>
          <h2>2. Dados que recolhemos</h2>
          <p>Recolhemos os seguintes tipos de dados pessoais:</p>

          <h3>2.1. Dados fornecidos voluntariamente</h3>
          <p>
            Quando submete um dos nossos formulários (pedido de site,
            contacto), recolhemos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nome</li>
            <li>Email</li>
            <li>Número de telefone / WhatsApp</li>
            <li>
              Tipo de negócio e informações sobre o seu projeto que decida
              partilhar
            </li>
            <li>
              Eventuais ficheiros que carregue (logomarca, identidade
              visual)
            </li>
          </ul>

          <h3>2.2. Dados recolhidos automaticamente</h3>
          <p>Quando navega no nosso website, podemos recolher:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Endereço IP (anonimizado quando possível)</li>
            <li>Tipo de navegador e dispositivo, sistema operativo</li>
            <li>Páginas visitadas, duração da visita, origem do tráfego</li>
            <li>
              Identificadores de sessão e cookies (ver secção 6)
            </li>
            <li>
              Variante da página apresentada (no contexto de testes A/B
              para otimização do site)
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Finalidades e base legal</h2>
          <p>
            Tratamos os seus dados pessoais para as seguintes finalidades,
            com a respetiva base legal:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Resposta a contactos e pedidos</strong>: execução de
              diligências pré-contratuais a pedido do titular [art. 6.º,
              n.º 1, al. b) do RGPD].
            </li>
            <li>
              <strong>Prestação dos nossos serviços</strong>: execução de
              contrato [art. 6.º, n.º 1, al. b) do RGPD].
            </li>
            <li>
              <strong>Análise de tráfego e melhoria do website</strong>{" "}
              (Google Analytics, Microsoft Clarity, Meta Pixel):
              consentimento [art. 6.º, n.º 1, al. a) do RGPD].
            </li>
            <li>
              <strong>Marketing direto a clientes existentes</strong>{" "}
              (eventuais comunicações sobre serviços relacionados):
              interesse legítimo [art. 6.º, n.º 1, al. f) do RGPD], sempre
              respeitando o seu direito de oposição.
            </li>
            <li>
              <strong>Cumprimento de obrigações legais</strong> (faturação,
              contabilidade): obrigação jurídica [art. 6.º, n.º 1, al. c)
              do RGPD].
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Partilha de dados com terceiros</h2>
          <p>
            Não vendemos os seus dados pessoais. Podemos, no entanto,
            partilhá-los com subcontratantes que nos prestam serviços
            essenciais ao funcionamento do website e do nosso negócio:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Vercel Inc.</strong>: alojamento do website
            </li>
            <li>
              <strong>Google LLC</strong>: Google Analytics, Google
              Workspace, Google Apps Script (armazenamento de submissões de
              formulários)
            </li>
            <li>
              <strong>Meta Platforms Ireland Ltd.</strong>: Meta Pixel
              para análise de campanhas
            </li>
            <li>
              <strong>Microsoft Ireland Operations Ltd.</strong>:
              Microsoft Clarity para análise de comportamento
            </li>
            <li>
              Autoridades públicas, quando legalmente exigido
            </li>
          </ul>
          <p>
            Alguns destes prestadores podem transferir dados para fora do
            Espaço Económico Europeu. Quando tal ocorre, asseguramos que
            existem garantias adequadas, nomeadamente Cláusulas
            Contratuais-Tipo aprovadas pela Comissão Europeia.
          </p>
        </section>

        <section>
          <h2>5. Conservação dos dados</h2>
          <p>
            Conservamos os seus dados apenas pelo tempo necessário para
            cumprir as finalidades para que foram recolhidos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Submissões de formulário não convertidas em
              cliente:</strong> 24 meses
            </li>
            <li>
              <strong>Dados de clientes:</strong> durante a relação
              contratual e por mais 10 anos após o seu termo (obrigações
              fiscais e contabilísticas)
            </li>
            <li>
              <strong>Dados de navegação e analytics:</strong> 14 meses
              (Google Analytics) ou 12 meses (Meta Pixel)
            </li>
            <li>
              <strong>Cookies:</strong> ver secção 6
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Cookies e tecnologias semelhantes</h2>
          <p>
            Utilizamos cookies e tecnologias semelhantes para garantir o
            funcionamento do website e analisar o seu desempenho. Pode
            gerir as suas preferências através do banner de consentimento
            que aparece na primeira visita.
          </p>

          <h3>6.1. Cookies essenciais (sempre ativos)</h3>
          <p>
            Necessários para o funcionamento do website. Não podem ser
            desativados.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code>fyze_variant</code>: identifica a variante da página
              apresentada para fins de otimização (A/B testing). Validade:
              12 meses.
            </li>
            <li>
              <code>fyze_consent</code> (localStorage): guarda a sua
              escolha quanto a cookies. Validade: até ser removido.
            </li>
          </ul>

          <h3>6.2. Cookies de análise (mediante consentimento)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Analytics 4</strong> (<code>_ga</code>,{" "}
              <code>_ga_*</code>): análise de tráfego e comportamento
            </li>
            <li>
              <strong>Microsoft Clarity</strong> (<code>_clck</code>,{" "}
              <code>_clsk</code>): gravação de sessões anónimas
            </li>
          </ul>

          <h3>6.3. Cookies de marketing (mediante consentimento)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Meta Pixel</strong> (<code>_fbp</code>): atribuição
              e otimização de campanhas Meta Ads
            </li>
          </ul>

          <p>
            Pode em qualquer momento revogar o seu consentimento limpando
            os cookies do seu navegador, o que fará reaparecer o banner.
          </p>
        </section>

        <section>
          <h2>7. Os seus direitos</h2>
          <p>
            Ao abrigo do RGPD, tem os seguintes direitos relativamente aos
            seus dados pessoais:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Acesso</strong>: saber que dados detemos sobre si
            </li>
            <li>
              <strong>Retificação</strong>: corrigir dados incorretos ou
              desatualizados
            </li>
            <li>
              <strong>Apagamento</strong> (“direito ao esquecimento”):
              pedir a eliminação dos seus dados
            </li>
            <li>
              <strong>Limitação do tratamento</strong>: restringir o uso
              dos seus dados em certos casos
            </li>
            <li>
              <strong>Portabilidade</strong>: receber os seus dados num
              formato estruturado, ou pedir a sua transmissão a outro
              responsável
            </li>
            <li>
              <strong>Oposição</strong>: opor-se ao tratamento baseado em
              interesse legítimo ou para fins de marketing direto
            </li>
            <li>
              <strong>Retirada do consentimento</strong>: quando o
              tratamento se baseia em consentimento, pode retirá-lo a
              qualquer momento
            </li>
            <li>
              <strong>Decisões automatizadas</strong>: não ser sujeito a
              decisões baseadas exclusivamente em tratamento automatizado
              (não realizamos perfilagem com efeitos jurídicos)
            </li>
          </ul>
          <p>
            Para exercer qualquer destes direitos, basta enviar-nos um
            email para{" "}
            <a href="mailto:hello@fyze.pt">hello@fyze.pt</a>.
            Responderemos no prazo máximo de 30 dias.
          </p>
        </section>

        <section>
          <h2>8. Segurança dos dados</h2>
          <p>
            Adotamos medidas técnicas e organizativas adequadas para
            proteger os seus dados pessoais contra acesso não autorizado,
            perda, alteração ou divulgação. Estas incluem encriptação em
            trânsito (HTTPS), controlo de acessos e manutenção de
            infraestrutura atualizada.
          </p>
          <p>
            Apesar de todos os esforços, nenhum sistema é 100% seguro. Em
            caso de violação de dados, notificaremos a Comissão Nacional
            de Proteção de Dados e os titulares afetados nos termos do
            RGPD.
          </p>
        </section>

        <section>
          <h2>9. Reclamações</h2>
          <p>
            Caso considere que o tratamento dos seus dados viola o RGPD,
            tem o direito de apresentar reclamação à autoridade de
            controlo:
          </p>
          <p>
            <strong>
              Comissão Nacional de Proteção de Dados (CNPD)
            </strong>
            <br />
            Av. D. Carlos I, 134 - 1.º, 1200-651 Lisboa
            <br />
            Telefone: +351 213 928 400
            <br />
            Email:{" "}
            <a href="mailto:geral@cnpd.pt">geral@cnpd.pt</a>
            <br />
            Site:{" "}
            <a
              href="https://www.cnpd.pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cnpd.pt
            </a>
          </p>
        </section>

        <section>
          <h2>10. Alterações a esta política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente.
            A data da última atualização aparece no topo. Recomendamos que
            a consulte regularmente. Alterações materiais serão
            comunicadas por meios adequados (banner ou email a clientes
            existentes).
          </p>
        </section>
      </div>
    </>
  );
}

function PrivacyBodyEn() {
  return (
    <>
      <header className="mb-12">
        <Link
          href="/"
          className="text-sm text-zinc-400 hover:text-fyze font-bold uppercase tracking-widest mb-8 inline-block"
        >
          ← Back to home
        </Link>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-4">
          Privacy <span className="text-fyze">Policy</span>
        </h1>
        <p className="text-zinc-500 text-sm">
          Last updated: {LAST_UPDATED_EN}
        </p>
      </header>

      <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed space-y-10 [&_h2]:text-white [&_h2]:font-black [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h3]:text-white [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_p]:text-zinc-300 [&_p]:font-medium [&_li]:text-zinc-300 [&_a]:text-fyze [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-white">
        <section>
          <p>
            Fyze Agency (“Fyze”, “we”) is committed to protecting the
            privacy of the visitors to this website and their personal
            data, in compliance with the General Data Protection
            Regulation (EU) 2016/679 (“GDPR”) and Portuguese Law No.
            58/2019 of 8 August.
          </p>
          <p>
            This policy describes what data we collect, for what purpose,
            our legal basis, how long we keep it and the rights you are
            entitled to.
          </p>
        </section>

        <section>
          <h2>1. Data controller</h2>
          <p>
            <strong>Fyze Agency</strong>
            <br />
            Lisbon &amp; Algarve, Portugal
            <br />
            Email: <a href="mailto:hello@fyze.pt">hello@fyze.pt</a>
            <br />
            Phone:{" "}
            <a href="tel:+351915709951">+351 915 709 951</a>
          </p>
          <p>
            For any matter related to the protection of your personal
            data, you can contact us directly at the email address
            indicated above.
          </p>
        </section>

        <section>
          <h2>2. Data we collect</h2>
          <p>We collect the following types of personal data:</p>

          <h3>2.1. Data provided voluntarily</h3>
          <p>
            When you submit one of our forms (website request, contact),
            we collect:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Email</li>
            <li>Phone / WhatsApp number</li>
            <li>
              Type of business and information about your project that you
              choose to share
            </li>
            <li>
              Any files you upload (logo, visual identity)
            </li>
          </ul>

          <h3>2.2. Data collected automatically</h3>
          <p>When you browse our website, we may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address (anonymised where possible)</li>
            <li>Browser and device type, operating system</li>
            <li>Pages visited, duration of the visit, traffic source</li>
            <li>
              Session identifiers and cookies (see section 6)
            </li>
            <li>
              The page variant shown (in the context of A/B testing for
              site optimisation)
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Purposes and legal basis</h2>
          <p>
            We process your personal data for the following purposes, with
            the corresponding legal basis:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Responding to contacts and requests</strong>:
              carrying out pre-contractual steps at the data subject's
              request [Art. 6(1)(b) GDPR].
            </li>
            <li>
              <strong>Provision of our services</strong>: performance of a
              contract [Art. 6(1)(b) GDPR].
            </li>
            <li>
              <strong>Traffic analysis and website improvement</strong>{" "}
              (Google Analytics, Microsoft Clarity, Meta Pixel):
              consent [Art. 6(1)(a) GDPR].
            </li>
            <li>
              <strong>Direct marketing to existing clients</strong>{" "}
              (occasional communications about related services):
              legitimate interest [Art. 6(1)(f) GDPR], always respecting
              your right to object.
            </li>
            <li>
              <strong>Compliance with legal obligations</strong> (invoicing,
              accounting): legal obligation [Art. 6(1)(c) GDPR].
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Sharing data with third parties</h2>
          <p>
            We do not sell your personal data. We may, however, share it
            with processors who provide services essential to the
            operation of the website and our business:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Vercel Inc.</strong>: website hosting
            </li>
            <li>
              <strong>Google LLC</strong>: Google Analytics, Google
              Workspace, Google Apps Script (storage of form submissions)
            </li>
            <li>
              <strong>Meta Platforms Ireland Ltd.</strong>: Meta Pixel
              for campaign analysis
            </li>
            <li>
              <strong>Microsoft Ireland Operations Ltd.</strong>:
              Microsoft Clarity for behaviour analysis
            </li>
            <li>
              Public authorities, where legally required
            </li>
          </ul>
          <p>
            Some of these providers may transfer data outside the European
            Economic Area. When this happens, we ensure that adequate
            safeguards are in place, in particular Standard Contractual
            Clauses approved by the European Commission.
          </p>
        </section>

        <section>
          <h2>5. Data retention</h2>
          <p>
            We keep your data only for as long as necessary to fulfil the
            purposes for which it was collected:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Form submissions not converted into a
              client:</strong> 24 months
            </li>
            <li>
              <strong>Client data:</strong> for the duration of the
              contractual relationship and for a further 10 years after its
              termination (tax and accounting obligations)
            </li>
            <li>
              <strong>Browsing and analytics data:</strong> 14 months
              (Google Analytics) or 12 months (Meta Pixel)
            </li>
            <li>
              <strong>Cookies:</strong> see section 6
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Cookies and similar technologies</h2>
          <p>
            We use cookies and similar technologies to ensure the website
            functions and to analyse its performance. You can manage your
            preferences through the consent banner that appears on your
            first visit.
          </p>

          <h3>6.1. Essential cookies (always active)</h3>
          <p>
            Necessary for the website to function. They cannot be
            disabled.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code>fyze_variant</code>: identifies the page variant shown
              for optimisation purposes (A/B testing). Validity:
              12 months.
            </li>
            <li>
              <code>fyze_consent</code> (localStorage): stores your
              choice regarding cookies. Validity: until removed.
            </li>
          </ul>

          <h3>6.2. Analytics cookies (subject to consent)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Analytics 4</strong> (<code>_ga</code>,{" "}
              <code>_ga_*</code>): traffic and behaviour analysis
            </li>
            <li>
              <strong>Microsoft Clarity</strong> (<code>_clck</code>,{" "}
              <code>_clsk</code>): anonymous session recording
            </li>
          </ul>

          <h3>6.3. Marketing cookies (subject to consent)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Meta Pixel</strong> (<code>_fbp</code>): attribution
              and optimisation of Meta Ads campaigns
            </li>
          </ul>

          <p>
            You can revoke your consent at any time by clearing the
            cookies in your browser, which will make the banner reappear.
          </p>
        </section>

        <section>
          <h2>7. Your rights</h2>
          <p>
            Under the GDPR, you have the following rights regarding your
            personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Access</strong>: to know what data we hold about you
            </li>
            <li>
              <strong>Rectification</strong>: to correct inaccurate or
              outdated data
            </li>
            <li>
              <strong>Erasure</strong> (“right to be forgotten”):
              to request the deletion of your data
            </li>
            <li>
              <strong>Restriction of processing</strong>: to restrict the
              use of your data in certain cases
            </li>
            <li>
              <strong>Portability</strong>: to receive your data in a
              structured format, or to request its transmission to another
              controller
            </li>
            <li>
              <strong>Objection</strong>: to object to processing based on
              legitimate interest or for direct marketing purposes
            </li>
            <li>
              <strong>Withdrawal of consent</strong>: where processing is
              based on consent, you can withdraw it at any time
            </li>
            <li>
              <strong>Automated decisions</strong>: not to be subject to
              decisions based solely on automated processing (we do not
              carry out profiling with legal effects)
            </li>
          </ul>
          <p>
            To exercise any of these rights, simply send us an email to{" "}
            <a href="mailto:hello@fyze.pt">hello@fyze.pt</a>.
            We will respond within a maximum of 30 days.
          </p>
        </section>

        <section>
          <h2>8. Data security</h2>
          <p>
            We adopt appropriate technical and organisational measures to
            protect your personal data against unauthorised access, loss,
            alteration or disclosure. These include encryption in transit
            (HTTPS), access control and keeping the infrastructure up to
            date.
          </p>
          <p>
            Despite all efforts, no system is 100% secure. In the event of
            a data breach, we will notify the Comissão Nacional de Proteção
            de Dados (Portuguese Data Protection Authority) and the
            affected data subjects in accordance with the GDPR.
          </p>
        </section>

        <section>
          <h2>9. Complaints</h2>
          <p>
            If you believe that the processing of your data infringes the
            GDPR, you have the right to lodge a complaint with the
            supervisory authority:
          </p>
          <p>
            <strong>
              Comissão Nacional de Proteção de Dados (CNPD)
            </strong>
            <br />
            Av. D. Carlos I, 134 - 1.º, 1200-651 Lisboa
            <br />
            Phone: +351 213 928 400
            <br />
            Email:{" "}
            <a href="mailto:geral@cnpd.pt">geral@cnpd.pt</a>
            <br />
            Website:{" "}
            <a
              href="https://www.cnpd.pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cnpd.pt
            </a>
          </p>
        </section>

        <section>
          <h2>10. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The date
            of the last update appears at the top. We recommend that you
            review it regularly. Material changes will be communicated
            through appropriate means (banner or email to existing
            clients).
          </p>
        </section>
      </div>
    </>
  );
}

export default async function PrivacyPolicy() {
  const locale = await getLocale();

  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />

      <article className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8">
          {locale === "en" ? <PrivacyBodyEn /> : <PrivacyBodyPt />}
        </div>
      </article>

      <Footer />
    </main>
  );
}
