import Image from "next/image";

interface SkillIcon {
  name: string;
  image: string;
}

const SkillIcon = (skill: SkillIcon) => {
  return (
    <div className="border w-full border-black/30 max-md:rounded-full max-md:p-[2px] p-1 rounded-full    transition-all">
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
