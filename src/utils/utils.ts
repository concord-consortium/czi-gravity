import { Versions, Version } from "../types";

export const getVersion = () => {
  const queryParam = (window.location.search).split("?")[1];
  return Versions.includes(queryParam as Version) ? queryParam as Version : undefined;
};
