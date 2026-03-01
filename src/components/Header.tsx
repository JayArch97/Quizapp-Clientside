import NavBar from "./NavBar.tsx";
import { ToggleButton, SignInButton } from "./Buttons.tsx";

function Header() {
  return (
    <div className="grid grid-cols-3">
      <NavBar />
      <SignInButton />
      <ToggleButton />
    </div>
  );
}

export default Header;
