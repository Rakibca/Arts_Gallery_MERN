import "./Button.css";

const Button = ({ text, effectType }) => {
  return (
    <button
      style={{
        fontSize: "15px",
        color: "#640f28",
        fontWeight: "bold",
        backgroundColor: "#cda174",
        borderRadius: "10px",
      }}
      className={`${effectType}`}
    >
      {text}
    </button>
  );
};

export default Button;
