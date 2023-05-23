import { HtmlHead } from "../components/HtmlHead";
import Main from "../components/Home";

export default function Hero() {
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
