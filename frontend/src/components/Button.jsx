import "./Button.css";

const Button = ({ text, effectType }) => {
  return (
    <button
      style={{
        margin: "1px",
        color: "#640f28",
        fontWeight: "bold",
        backgroundColor: "#cda174",
      }}
      className={`custom-button ${effectType}`}
    >
      {text}
    </button>
  );
};

export default Button;
