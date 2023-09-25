import Image from "next/image";

interface SkillIcon {
  name: string;
  image: string;
}

const SkillIcon = (skill: SkillIcon) => {
  return (
    <div className="border w-[80px] border-black/30  p-1 md:hover:border-slate-500 transition-all">
      <Image
        src={skill.image}
        width={80}
        height={80}
        alt={skill.name}
        className=" object-contain max-md:w-[50px]"
      />
    </div>
  );
};

export default SkillIcon;
