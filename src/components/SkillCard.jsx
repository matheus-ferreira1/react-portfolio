import React from "react";

const SkillCard = ({ skill }) => {
  const { name, Icon, tools, color } = skill;
  const style = { color: color };

  return (
    <article
      style={{
        borderBottomStyle: "solid",
        borderBottomColor: color,
        borderBottomWidth: "8px",
      }}
      className="bg-black text-gray-400 hover:text-white w-full hover:shadow-lg hover:shadow-gray-800 flex flex-col gap-4 p-8 rounded-lg grayscale hover:grayscale-0 duration-200"
    >
      <Icon style={style} size={50} />
      <h1 className="font-bold text-xl capitalize">{name}</h1>
      <p>{tools}</p>
    </article>
  );
};

export default SkillCard;
