export const getVersion = () => {
  return (window.location.search).split("?")[1];
};
