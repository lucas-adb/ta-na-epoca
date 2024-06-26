import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="mx-auto max-w-screen-xl flex justify-between px-4 sm:px-6 lg:px-8 items-center h-16">
        <Link
          href="/"
          className="font-sans font-extrabold text-green-900 text-base sm:text-2xl transition-transform hover:-translate-y-1"
          id="logo"
        >
          Tá na época?
        </Link>

        <div className="flex gap-4 justify-center items-center">
          <Link
            href="/calendario"
            className="hover:text-green-900 transition-transform hover:-translate-y-1 text-sm sm:text-base"
            id="calendario"
          >
            Calendário
          </Link>
          <Link
            href="/sobre"
            className="hover:text-green-900 transition-transform hover:-translate-y-1 text-sm sm:text-base"
            id="sobre"
          >
            Sobre
          </Link>
        </div>
      </nav>
    </header>
  );
}
