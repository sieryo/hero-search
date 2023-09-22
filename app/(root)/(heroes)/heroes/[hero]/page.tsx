import CardSkin from "@/components/card-skin";
import Hero from "@/components/hero";
import { getHero } from "@/sanity/actions";

const HeroPage = async ({ params }: { params: { hero: string } }) => {
  const [dataHero] = await getHero({
    hero: params.hero,
  });
  return (
    <div>
      <div className="min-h-[400px] flex justify-center items-center">
        <Hero {...dataHero} />
      </div>
      <div className="">
        <CardSkin />
      </div>
    </div>
  );
};

export default HeroPage;
