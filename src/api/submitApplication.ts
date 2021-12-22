import getTripType from "helpers/getTripType";

import axiosInstance from "./axios";
import formatFields from "./formatFields";
import filterFields from "./filterFields";

export default (data: any) => {
  const tripType = getTripType();

  const formattedFields = formatFields(data);
  const payload = filterFields(formattedFields, tripType);

  return axiosInstance.post("trip/application", {
    tripId: parseInt(process.env.REACT_APP_TRIP_ID || "0"),
    ...payload,
  });
};
