import { useNavigate, Link } from "react-router-dom";
export const Button = ({ text, customClassName }) => {
  return (
    <div>
      <button className={` rounded-lg ${customClassName}`}>
        <Link to="/" className="text-center">
          {text}
        </Link>
      </button>
    </div>
  );
};
