import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/Banner";

const HomePage = () => {
  return (
    <main className="pb-24">
      {/* Hero Carousel */}
      <div className="bg-zinc-200 w-full h-[28rem]"></div>

      <div className="flex flex-col gap-24 pt-12">
        <Section title="Trending products">
          <div className="grid grid-cols-3 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Section>

        <Section title="Best deals">
          <div className="grid grid-cols-3 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Section>

        <Section>
          <Banner />
        </Section>
      </div>
    </main>
  );
};

export default HomePage;
