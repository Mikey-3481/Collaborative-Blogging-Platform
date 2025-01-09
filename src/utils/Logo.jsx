import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img
        className="logo"
        src={require("../styles/img/logo.png")}
        alt="Logo"
      />
    </Link>
  );
}
