import { HtmlHead } from "../components/HtmlHead";
import Lihat from "../components/LJenis";

export default function LJenis() {
  return (
    <>
      <HtmlHead
        title="Lihat Jenis"
        decription="[insert page description]"
        link="/LihatJenis"
      />
      <main className="overflow-hidden">
        <Lihat />
      </main>
    </>
  );
}
