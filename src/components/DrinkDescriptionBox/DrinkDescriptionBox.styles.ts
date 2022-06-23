export const drinkDescriptionBoxStyles = {
  root: {
    position: "absolute",
    top: "10vh",
    right: "5vw",
    width: "45vw",
    height: "80vh",
    background: "rgba(134, 122, 42, .8)",
    borderRadius: "30px",
    zIndex: -2,
    opacity: 0,
    transition: "all .5s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    "&.active": {
      transition: "all .5s",
      opacity: 1,
      zIndex: 10,
    },
  },
  title: {
    fontSize: "3rem",
    fontStyle: "italic",
  },
  description: {
    fontSize: "1.5rem",
    color: "#1f1f1f",
    height: "60vh",
    overflowY: "auto",
    paddingRight: "2vw",

    "&::-webkit-scrollbar": {
      width: "7px",
      borderRadius: "30px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#d6b636",
      borderRadius: "30px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#a39608",
      borderRadius: "30px",
    },
  },
  buttonWrapper: {
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  button: {
    color: "black",
    fontSize: "1rem",
  },
};
