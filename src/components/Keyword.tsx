import { FC } from "react";

interface KeywordProps {
  children: string;
}

const Keyword: FC<KeywordProps> = ({ children }) => {
  return (
    <li className="bg-black/[0.7] px-3 py-1 text-xs font-normal uppercase tracking-wider text-white rounded-full dark:text-white/70">
      {children}
    </li>
  );
};

export default Keyword;
