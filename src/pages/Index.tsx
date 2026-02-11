import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Statement from "@/components/Statement";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background surface-noise min-h-screen">
      <Hero />
      <Pillars />
      <Statement />
      <Footer />
    </main>
  );
};

export default Index;
