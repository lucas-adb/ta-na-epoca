import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <nav className="mx-auto max-w-screen-xl flex justify-between px-4 sm:px-6 lg:px-8 items-center h-16">
        <p className="transition-transform hover:-translate-y-1">
          Fonte:{" "}
          <Link 
            href="https://ceagesp.gov.br/sala-imprensa/sazonalidade-de-compras/"
            className="hover:text-green-900 text-sm sm:text-base"
            id="source"
          >
            CEAGESP
          </Link>
        </p>

        <Link
          href="https://lucasalves.dev/"
          className="font-sans font-extrabold text-green-900 transition-transform hover:-translate-y-1 text-base sm:text-2xl"
          id="portfolio"
        >
          Lucas Alves
        </Link>
      </nav>
    </footer>
  );
}
