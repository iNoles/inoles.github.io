import { Link } from "gatsby";
import React from "react";

const classes = {
  wrapper: "mb-6",
  name: "font-semibold text-gray-900 dark:text-white pb-1",
  date: "italic text-gray-600 dark:text-gray-300 pb-1",
  description: "text-md text-gray-600 dark:text-gray-200 font-light",
};

interface SummaryItemTypes {
  name: string;
  description: string;
  date?: string;
  link?: string;
  internal?: boolean;
}

const SummaryItem = ({
  name,
  date = "",
  description,
  link = "",
  internal = false,
}: SummaryItemTypes) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link
            ? "hover:underline hover:text-black dark:hover:text-blue-400"
            : ""
        }`}
      >
        {link ? linkContent : name}
      </h3>
      {date ? <h3 className={classes.date}>{date}</h3> : ""}
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;
