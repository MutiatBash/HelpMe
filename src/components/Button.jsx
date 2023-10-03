import { useNavigate, Link } from "react-router-dom";
export const Button = ({ text, customClassName, src }) => {
  return (
    <div>
      <button className={` rounded-lg  ${customClassName}`}>
        <img src={src} />
        <Link to="/" className="text-center">
          {text}
        </Link>
      </button>
    </div>
  );
};
