import { HtmlHead } from "../components/HtmlHead";
import Lihat from "../components/Lihat";

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
