import Link from "next/link";

export default function RoutesList({ className }: { className?: string }) {
  return (
    <ul className={className}>
      <li>
        <Link href="/">Collections</Link>
      </li>
      <li>
        <Link href="/">Men</Link>
      </li>

      <li>
        <Link href="/">Women</Link>
      </li>

      <li>
        <Link href="/">About</Link>
      </li>
      <li>
        <Link href="/">Contact</Link>
      </li>
    </ul>
  );
}
