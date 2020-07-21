import getTripType from "helpers/getTripType";
import filterFields from "./filterFields";

export default (data: any) => {
  const payload = filterFields(data, getTripType());

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(payload);
      reject(payload);
    }, 1000);
  });
};
