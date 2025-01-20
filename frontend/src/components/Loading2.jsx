const Loading2 = () => {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.loader}></div>
      <p>Loading Images...</p>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  loader: {
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #3498db",
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    animation: "spin 2s linear infinite",
  },
};

export default Loading2;
