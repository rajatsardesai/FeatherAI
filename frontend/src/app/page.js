import { Hero } from "@/components";
import { BlurEllipses, Footer, Navbar } from "@/components";

export default function Home() {
  return (
    <main className="bg-green-gradient/10">
      <div className="absolute overflow-hidden w-full h-screen">
        <BlurEllipses className="top-[-380px] left-[-417px]" />
        <BlurEllipses className="bottom-[217px] right-[-517px]" />
      </div>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
