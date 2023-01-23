import React from "react";

const CourseCard = ({ item }) => {
  const { title, institute, hours } = item;
  return (
    <li className="flex w-full justify-between text-base text-gray-800 font-light">
      <h3>
        {title} - {institute}
      </h3>
      <h4>{hours}h</h4>
    </li>
  );
};

export default CourseCard;
