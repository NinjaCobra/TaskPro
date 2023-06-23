import "../Sidebar.css";
import logoIcon from "../../../logo.svg";

const Logo = () => {
  return (
    <a href="" className="logo">
      <svg className="logo-icon">
        <use href={logoIcon} />
      </svg>
      <span>Task Pro</span>
    </a>
  );
};

export default Logo;
