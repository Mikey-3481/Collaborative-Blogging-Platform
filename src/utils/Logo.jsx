import { Link } from "react-router-dom";

export default function Logo({ isPath }) {
  return (
    <Link to={isPath ? "/" : ""}>
      <img
        className="logo"
        src={require("../styles/img/logo.png")}
        alt="Logo"
      />
    </Link>
  );
}
