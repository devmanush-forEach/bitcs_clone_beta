import "./FlashButton.css";

const FlashButton = ({ text }) => {
  const runFunction = () => {};
  return (
    <>
      <button onClick={runFunction} className="flash_btn">
        {text}
      </button>
    </>
  );
};

export default FlashButton;
