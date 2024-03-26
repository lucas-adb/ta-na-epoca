import FramerFadeIn from "@/components/framer/FramerFadeIn";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex-grow max-w-4xl mx-auto flex flex-col sm:justify-center">
      {/* <FramerFadeIn> */}
      <div className="flex flex-col gap-8 p-8">
        <section className="flex flex-col items-center sm:gap-4 gap-6 px-6 sm:px-4 mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl text-green-900 text-center">
            O que é o “Tá na época”?
          </h1>

          <p className="text-lg text-center">
            É o site que ajuda você a escolher as frutas e vegetais que estão em
            período de safra.
          </p>
        </section>

        <section className="flex flex-col items-center sm:gap-4 gap-6 mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-green-900 text-center">
            Benefícios
          </h2>
          <FramerFadeIn>
            <div className="flex gap-4 justify-between mt-4 md:flex-row flex-col">
              <div className="border-green-900 border-2 p-8 rounded text-center  flex flex-col gap-4 sm:gap-2 bg-green-900 text-amber-50 hover:scale-105 transition-transform shadow-md basis-1/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="max-w-32 max-h-32 mx-auto"
                >
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                    clipRule="evenodd"
                  />
                </svg>

                <h3 className="font-bold text-lg">Barato</h3>
                <p>
                  Ao optar por produtos da estação, é possível economizar até
                  30% do valor, pois durante períodos de abundância, os preços
                  tendem a ser menores.
                </p>
              </div>
              <div className="border-green-900 border-2 p-8 rounded text-center flex flex-col gap-4 sm:gap-2 bg-green-900 text-amber-50 hover:scale-105 transition-transform shadow-md basis-1/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  // className="basis-1/3"
                  className="max-w-32 max-h-32 mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                    clipRule="evenodd"
                  />
                </svg>

                <h3 className="font-bold text-lg">Sustentável</h3>
                <p>
                  Alimentos cultivados localmente e colhidos na época certa
                  requerem menos agrotóxicos, intervenções humanas e recursos,
                  tornando o processo de produção mais sustentável para o meio
                  ambiente.
                </p>
              </div>

              <div className="border-green-900 border-2 p-8 rounded text-center  flex flex-col gap-4 sm:gap-2 bg-green-900 text-amber-50 hover:scale-105 transition-transform shadow-md basis-1/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  // className="basis-1/3"
                  className="max-w-32 max-h-32 mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                    clipRule="evenodd"
                  />
                </svg>

                <h3 className="font-bold text-lg">Saboroso</h3>
                <p>
                  Os alimentos colhidos no auge do seu sabor apresentam frescor
                  e maior valor nutricional, proporcionando uma experiência
                  gastronômica mais satisfatória.
                </p>
              </div>
            </div>
          </FramerFadeIn>
        </section>

        <section className="flex flex-col items-center sm:gap-4 gap-6 px-6 sm:px-4 mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-green-900 text-center">
            Metodologia
          </h2>

          <p className="text-center text-sm sm:text-base">
            Utilizamos como base a tabela de sazonalidade que registra a
            quantidade dos principais produtos comercializados no ETSP da{" "}
            <Link
              href="https://ceagesp.gov.br/sala-imprensa/sazonalidade-de-compras/"
              className="font-bold hover:text-green-900"
            >
              CEAGESP
            </Link>
            . A metodologia adotada compreende a análise dos últimos cinco anos
            (de 2019 a 2023), examinando mês a mês todos os grupos de produtos
            comercializados na central de abastecimento paulistana.
          </p>
          <p className="text-center text-sm sm:text-base">
            No mês em questão, foram incluídos apenas os produtos categorizados
            com alta disponibilidade para esse período. É importante ressaltar
            que, devido à natureza dos dados serem específicos de São Paulo, os
            meses de safra podem variar conforme a região.
          </p>
        </section>

        <section className="flex flex-col items-center sm:gap-4 gap-6 px-6 sm:px-4 mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-green-900 text-center">
            Referências
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://exame.com/ciencia/observar-a-sazonalidade-dos-alimentos-pode-garantir-economia-e-sustentabilidade/"
              className="hover:text-green-900 transition-transform hover:-translate-y-1 text-sm sm:text-base"
            >
              Exame
            </Link>
            <Link
              href="https://www1.folha.uol.com.br/mercado/2022/01/veja-a-melhor-epoca-para-comprar-frutas-verduras-e-legumes.shtml"
              className="hover:text-green-900 transition-transform hover:-translate-y-1 text-sm sm:text-base"
            >
              Folha de S.Paulo
            </Link>
            <Link
              href="https://diet.mayoclinic.org/us/blog/2022/picked-at-their-peak-the-benefits-of-choosing-and-eating-seasonal-produce/"
              className="hover:text-green-900 transition-transform hover:-translate-y-1 text-sm sm:text-base"
            >
              Mayo Clinic
            </Link>
          </div>
        </section>
      </div>
      {/* </FramerFadeIn> */}
    </main>
  );
}
