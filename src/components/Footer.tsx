import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <nav className="mx-auto max-w-screen-xl flex justify-between px-4 sm:px-6 lg:px-8 items-center h-16">
        <p>Fontes: CEASA, G1, Folha de São Paulo</p>

        <Link
          href="/"
          className="font-sans font-extrabold text-green-900 text-2xl"
        >
          Lucas Alves
        </Link>
      </nav>
    </footer>
  );
}
