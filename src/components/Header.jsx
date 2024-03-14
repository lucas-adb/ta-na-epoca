import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="mx-auto max-w-screen-xl flex justify-between px-4 sm:px-6 lg:px-8 items-center h-16">
        <Link
          href="/"
          className="font-serif font-extrabold italic text-green-800 text-3xl"
        >
          Tá na época?
        </Link>
        <Link href="/calendario">Calendário</Link>
      </nav>
    </header>
  );
}
