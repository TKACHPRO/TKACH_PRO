const getHeaderStyles = (segments) => {
  if (!segments.length || segments.includes("home")) {
    return { bg: "bg-light", text: "text-dark" };
  } else if (segments.includes("catalog") && segments.indexOf("catalog") !== segments.length - 1) {
    return { bg: "bg-light", text: "text-dark" };
  } else {
    return { bg: "bg-dark", text: "text-light" };
  }
};

export default getHeaderStyles;
