import React, { FC } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experienceData } from "../constants/data";
import Keyword from "./Keyword";

interface ExperienceProps {
  theme?: string | null;
}

const Experience: FC<ExperienceProps> = ({ theme }) => {
  return (
    <section
      id="experience"
      className="scroll-mt-20 flex flex-col justify-center items-center max-w-5xl px-7 md:mx-auto py-11"
    >
      <h1 className="text-2xl font-semibold">Experiência</h1>
      <VerticalTimeline lineColor="">
        {experienceData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme == "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme == "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3>{item.role}</h3>
              <h3 className="font-semibold capitalize">@ {item.company}</h3>
              <ul className="flex flex-wrap my-4 gap-2 ">
                {item.keywords.map((keyword, index) => (
                  <Keyword key={index}>{keyword}</Keyword>
                ))}
              </ul>
              <p className="!mt-1 !font-light text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
