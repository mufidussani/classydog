import { HtmlHead } from "../components/HtmlHead";
import Abouts from "../components/Tentang";

export default function Tentang() {
  return (
    <>
      <HtmlHead
        title="Tentang"
        decription="[insert page description]"
        link="/tentang"
      />
      <main className="overflow-hidden">
        <Abouts />
      </main>
    </>
  );
}
