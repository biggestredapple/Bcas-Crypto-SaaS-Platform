import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

import { PATHS } from "consts";
import { InputComponent, LinkButton } from "components/common";
import { SliderComponent } from "../Slider";
import { ChangeEvent, FormEvent } from "react";

interface NavbarProps {
  name: string;
  price: number;
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  navbar: boolean;
  changeNavbar: () => void;
}
export const NavbarComponent: React.FC<NavbarProps> = ({
  name,
  price,
  onNameChange,
  onPriceChange,
  onSubmit,
  navbar,
  changeNavbar,
}) => {
  return (
    <div
      className={`flex p-0 min-w-72 max-w-72 h-full z-10 mobile:absolute transition-all ${
        navbar ? "absolute left-0" : "absolute -left-72"
      } tablet:absolute`}
    >
      <div className="flex flex-col items-start justify-between h-full pb-5 bg-black w-full">
        <div className="flex flex-col items-start gap-1 w-full">
          <Link className="py-12 mx-auto outline-none" to={PATHS.MAIN}>
            <img
              src="https://www.bcas.io/hubfs/BCAS-2022-Website/Typography/bcas-logo.svg"
              alt="logo"
            />
          </Link>
          <form onSubmit={onSubmit} className="flex flex-col gap-5 items-center w-full">
            <LinkButton to={PATHS.MAIN} Icon={FaHome} label="Home" />
            <InputComponent
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={onNameChange}
            />
            <SliderComponent
              min={0}
              max={70000}
              step={1}
              value={price}
              onChange={onPriceChange}
              name="volume"
              label="Token Price"
            />
            <div className="w-full px-5 border-l-4 border-lightGreen">
              <button
                className="rounded-md py-2 bg-lightGreen w-full text-white font-bold px-5 hover:bg-green"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-start gap-1 w-full">
          <LinkButton to={PATHS.MAIN} Icon={RiLogoutBoxLine} label="Log out" />
        </div>
      </div>
      <div className="w-16 h-full bg-transparent flex items-center absolute left-68">
        <button
          className="animate-pulse flex items-center justify-center w-16 h-8 rounded-tl-full rounded-tr-full bg-black rotate-90 text-4xl border-dark-100 border-b-black border-2 relative"
          onClick={changeNavbar}
        >
          <div className="w-4 h-4 border-t-[3px] border-l-[3px] rotate-45 border-white absolute top-4"></div>
        </button>
      </div>
    </div>
  );
};
