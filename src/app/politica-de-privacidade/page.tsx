import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | Fyze Agency",
  description:
    "Como a Fyze Agency recolhe, utiliza e protege os seus dados pessoais ao abrigo do RGPD.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "29 de abril de 2026";

export default function PrivacyPolicy() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />

      <article className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </article>

      <Footer />
    </main>
  );
}
