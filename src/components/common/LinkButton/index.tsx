import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  to: string;
  Icon: IconType;
  label: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ to, Icon, label }) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-start gap-5 w-full py-2 px-5 border-l-4 border-transparent hover:border-lightGreen hover:bg-darkGreen hover:text-lightGreen text-white transition-all"
    >
      {<Icon />}
      <span className="font-bold block">{label}</span>
    </Link>
  );
};
