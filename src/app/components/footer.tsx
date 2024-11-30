import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background py-4">
      <div className="container flex items-center justify-between px-4 lg:px-0">
        <Link id="logo" href={"/"} className="text-xl font-bold lowercase">
          ProjeXpect
        </Link>
      </div>
    </footer>
  );
}
