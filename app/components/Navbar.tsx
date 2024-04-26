import Link from "next/link";

export default function Navbar({ className }: { className: string }) {
  return (
    <ul className={className}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">New</Link>
      </li>
      <li>
        <Link href="/">Popular</Link>
      </li>
      <li>
        <Link href="/">Trending</Link>
      </li>
      <li>
        <Link href="/">Categories</Link>
      </li>
    </ul>
  );
}
