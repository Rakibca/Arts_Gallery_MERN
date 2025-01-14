import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div>
      <ReactLoading
        type="spinningBubbles"
        color="yellow"
        height={150}
        width={150}
      />
    </div>
  );
};

export default Loading;
