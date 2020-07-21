import { TRIP_TYPES } from "api/types";

export default (): TRIP_TYPES => {
  switch (process.env.REACT_APP_TRIP_TYPE) {
    case "INLAND":
      return TRIP_TYPES.INLAND;
    case "SEA":
      return TRIP_TYPES.SEA;
    default:
      return TRIP_TYPES.INLAND;
  }
};
