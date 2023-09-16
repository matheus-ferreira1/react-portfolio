import { footerLinks } from "../constants/data";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 dark:border-opacity-30 w-full px-4 lg:px-0 py-10  max-w-5xl mx-auto flex flex-col gap-5">
      <div className="flex justify-center items-center gap-4">
        {footerLinks.map((link) => (
          <FooterLinks key={link.id} {...link} />
        ))}
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-base mb-2 text-center">
          Feito com <span className="text-yellow-500">❤</span> e ☕ por Matheus
          Ferreira
        </p>
        <p className="font-light text-sm text-gray-400">
          Copyright &copy; 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
