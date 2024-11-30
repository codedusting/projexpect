import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background py-4">
      <div className="container flex items-center justify-between">
        <Link id="logo" href={"/"}>
          ProjeXpect
        </Link>
      </div>
    </footer>
  );
}
