import { HtmlHead } from "../components/HtmlHead";
import Main from "../components/Hero";

export default function Tentang() {
  return (
    <>
      <HtmlHead
        title="Main"
        decription="[insert page description]"
        link="/"
      />
      <main className="overflow-hidden">
        <Main />
      </main>
    </>
  );
}
