import { getHeroes } from "@/sanity/actions";
import SearchHero from "@/components/search-hero";

const HeroesPage = async () => {
  const heroes = await getHeroes({
    hero: "",
  });
  return (
    <div>
      <div className="flex items-center flex-col">
        <SearchHero heroes={heroes} />
      </div>
    </div>
  );
};

export default HeroesPage;
