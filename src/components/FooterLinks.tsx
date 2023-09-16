import { FC } from "react";
import { IconType } from "react-icons";

interface FooterLinksProps {
  href: string;
  Icon: IconType;
}

const FooterLinks: FC<FooterLinksProps> = ({ href, Icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="hover:text-yellow-500 duration-200"
    >
      <Icon size={40} />
    </a>
  );
};
export default FooterLinks;
