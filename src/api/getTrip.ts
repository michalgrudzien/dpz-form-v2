import axiosInstance from "./axios";

export default (tripId: number) => axiosInstance.get(`trip/${tripId}`);
