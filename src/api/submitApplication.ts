import getTripType from "helpers/getTripType";

import axiosInstance from "./axios";
import formatFields from "./formatFields";
import filterFields from "./filterFields";

export default (data: any) => {
  const payload = filterFields(data, getTripType());
  const formattedPayload = formatFields(payload);

  return axiosInstance.post("trip/application", {
    tripId: parseInt(process.env.REACT_APP_TRIP_ID || "0"),
    ...formattedPayload,
  });
};
