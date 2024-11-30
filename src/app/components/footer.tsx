import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background py-4 border-t">
      <div className="container flex items-center justify-between">
        <Link id="logo" href={"/"}>
          ProjeXpect
        </Link>
      </div>
    </footer>
  );
}
