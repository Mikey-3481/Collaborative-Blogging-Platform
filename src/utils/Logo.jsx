import { Link } from "react-router-dom";

export default function Logo({ path }) {
  return (
    <Link to={path ? path : "#"}>
      <img
        className="logo"
        src={require("../styles/img/logo.png")}
        alt="Logo"
      />
    </Link>
  );
}
