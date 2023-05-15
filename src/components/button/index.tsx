// Create button component
import './style.css'

const Button = (props: { title: string; onClick?: () => void }) => {
  return (
    <button className="bt" onClick={props?.onClick}>{props?.title || "Get item"}</button>
  );
};

export default Button;