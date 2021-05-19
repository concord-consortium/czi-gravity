export const getVersion = () => {
  if (!window.location.search) { return ""; }
  else { return (window.location.search).split("?")[1]; }
};
