import Logo from "./Logo";
import Navigation from "./Navigation";
import "@/styles/header.scss";
import useToggle from "@/hooks/useToggle";
import { IoIosMenu } from "react-icons/io";
import Button from "./Button";
import { useScrollDirection } from "@/hooks/useScrollDirection";

function Header() {
  const scrollDirection = useScrollDirection();
  const { handleToggle } = useToggle({ id: "navigation" });

  return (
    <header className={`header ${scrollDirection === "down" ? "hidden" : ""}`}>
      <div className="header__body">
        <Logo />
        <Button
          text={"Hello"}
          variant="tertiary"
          onlyIcon
          icon={IoIosMenu}
          classNames="navigation__toggle"
          onClick={handleToggle}
        />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
