import Link from "next/link";

import "./styles/css";

export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a href="/">About</a>
      </Link>
      <Link href="/typing-game">
        <a href="/">About</a>
      </Link>
    </div>
  );
}
