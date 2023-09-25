import Hero from "@/components/hero";
import HeroSkills from "@/components/hero-skills";
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
      <div className=" min-h-[1000px]  border-l-2 ml-4  border-black/50 ">
        <HeroSkills heroSkill={dataHero.skills} />
      </div>
    </div>
  );
};

export default HeroPage;
