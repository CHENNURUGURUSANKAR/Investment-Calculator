import logo from "../../assets/invlogo.png";
import "./Header.css";

function Header() {
  return (
    <div>
      <img className="logo" src={logo}></img>
      <h4>Right investment will make you HAPPY</h4>
    </div>
  );
}
export default Header;
