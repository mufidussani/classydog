import { HtmlHead } from "../components/HtmlHead";
import Cari from "../components/CJenis";

export default function CJenis() {
  return (
    <>
      <HtmlHead
        title="Cari Jenis"
        decription="[insert page description]"
        link="/CariJenis"
      />
      <main className="overflow-hidden">
        <Cari />
      </main>
    </>
  );
}
