import React from "react";

interface SkillCardProps {
  skill: {
    name: string;
    Icon: any;
    tools: string;
    color: string;
  };
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { name, Icon, tools, color } = skill;
  const style = { color: color };

  return (
    <article
      style={{
        borderBottomStyle: "solid",
        borderBottomColor: color,
        borderBottomWidth: "8px",
      }}
      //   className="bg-black text-gray-400 hover:text-white w-full hover:shadow-lg hover:shadow-gray-800 flex flex-col gap-4 p-8 rounded-lg grayscale hover:grayscale-0 duration-200"
      className="grayscale hover:grayscale-0 transition-all duration-400 bg-gray-100 dark:bg-white/10  border border-black/5 rounded-lg px-8 py-6"
    >
      <Icon style={style} size={30} />
      <h1 className="font-bold text-xl capitalize">{name}</h1>
      <p className="font-thin">{tools}</p>
    </article>
  );
};
export default SkillCard;
