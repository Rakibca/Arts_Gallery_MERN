import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div>
      <ReactLoading
        type="spinningBubbles"
        color="#007bff"
        height={150}
        width={150}
      />
    </div>
  );
};

export default Loading;
