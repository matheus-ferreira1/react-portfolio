import React from "react";

const KeywordCard = ({ children }) => {
  return (
    <h5 className="bg-gray-900 rounded-md p-2 capitalize text-sm">
      {children}
    </h5>
  );
};

const ExperienceCard = ({ item }) => {
  const { company, role, description, keywords, dateInit, dateEnd } = item;

  return (
    <article className="bg-black p-8 rounded-lg flex flex-col gap-3 w-full md:max-w-[800px]">
      <h6 className="uppercase text-sm font-light text-gray-300 flex justify-start items-center">
        <span className="mr-2 h-[4px] bg-yellow-500 w-6 " />
        {role}
      </h6>
      <h3 className="text-2xl font-bold">{company}</h3>
      <h5>
        {dateInit} <span className="text-yellow-500 text-xl">&#8594;</span>{" "}
        {dateEnd}
      </h5>
      <p className="text-justify">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {keywords.map((keyword) => (
          <KeywordCard key={keyword}>{keyword}</KeywordCard>
        ))}
      </div>
    </article>
  );
};

export default ExperienceCard;
