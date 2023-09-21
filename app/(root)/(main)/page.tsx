import Card from "@/components/card";
import Hero from "@/components/hero";
import SearchHero from "@/components/search-hero";
import { HeroType } from "@/components/hero";
import { getHero, getHeroes } from "@/sanity/actions";

export default async function Home({
  searchParams,
}: {
  searchParams: { hero: string | undefined };
}) {
  const heroes = await getHeroes({
    hero: "",
  });
  const [dataHero] = await getHero({
    hero: searchParams.hero,
  });

  return (
    <div className=" max-w-[1440px] mx-auto min-h-screen">
      {Object.keys(dataHero).length <= 1 ? (
        <div className="min-h-[400px] flex justify-center items-center">{`Tidak ada hero dengan pencarian "${searchParams.hero}"`}</div>
      ) : (
        <Hero {...dataHero} />
      )}
      <div className=" min-h-[1000px] md:pt-10 pt-[100px]   border-4">
        <SearchHero {...heroes} />
        <div className="flex justify-center">
          <div className="md:p-10 p-3 flex gap-6 md:justify-start flex-wrap justify-center">
            {heroes.map((hero: HeroType) => (
              <Card key={hero.name} {...hero} />
            ))}
          </div>
        </div>
      </div>
      <div className=" min-h-screen"></div>
    </div>
  );
}
