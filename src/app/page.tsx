import HeaderPage from "@demoapp/components/header";
import Link from "next/link";

export default function Home() {
  console.log("im app.tsx");

  return (
    <div>
      <p>This is App.tsx page</p>
      <div>
        Link to:
        <p>
          <Link href={"/blog"}>{" Blog"}</Link>
        </p>
        <p>
          <Link href={"/about"}>{"About "}</Link>
        </p>
      </div>
    </div>
  );
}
