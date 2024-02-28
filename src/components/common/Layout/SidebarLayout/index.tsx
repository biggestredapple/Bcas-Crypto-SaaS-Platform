import { NavbarComponent } from "components/common";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppActions } from "store";

type SidebarLayoutProps = {
  children: React.ReactNode;
};

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState(100000);
  const [navbar, setNavbar] = useState(false);
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(e.target.value));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(AppActions.crypto.getSearch({ name, price }));
  };
  const changeNavbar = () => setNavbar(!navbar);
  return (
    <div className="w-full h-full flex bg-land relative">
      <NavbarComponent
        name={name}
        price={price}
        onNameChange={onNameChange}
        onPriceChange={onPriceChange}
        onSubmit={onSubmit}
        navbar={navbar}
        changeNavbar={changeNavbar}
      />
      <div
        className={`${
          !navbar ? "w-full relative" : "absolute w-[calc(100vw-288px)] right-0"
        } h-full transition-all tablet:w-full mobile:w-full`}
      >
        {children}
      </div>
    </div>
  );
};

export const withSidebarLayout =
  (Page: React.FC): React.FC =>
  () => {
    return (
      <SidebarLayout>
        <Page />
      </SidebarLayout>
    );
  };
