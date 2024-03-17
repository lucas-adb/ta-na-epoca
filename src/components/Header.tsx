import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="mx-auto max-w-screen-xl flex justify-between px-4 sm:px-6 lg:px-8 items-center h-16">
        <Link
          href="/"
          className="font-sans font-extrabold text-green-900 text-2xl transition-transform hover:-translate-y-1"
        >
          Tá na época?
        </Link>

        <div className="flex gap-4">
          <Link href="/calendario" className="hover:text-green-900 transition-transform hover:-translate-y-1">
            Calendário
          </Link>
          <Link href="/sobre" className="hover:text-green-900 transition-transform hover:-translate-y-1">
            Sobre
          </Link>
        </div>
      </nav>
    </header>
  );
}
