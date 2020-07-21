import { TRIP_TYPES } from "./types";

type Values = { [name: string]: any };
type ValuesKey = keyof Values;

const FIELDS_PER_TRIP_TYPE: { [name: string]: string[] } = {
  [TRIP_TYPES.INLAND]: [
    "name",
    "surname",
    "email",
    "rodoApproval",
    "student",
    "sailingLicence",
    "sailingExperience",
    "skills",
    "transportationOutbound",
    "transportationReturn",
    "whatCanYouTake",
    "comments",
  ],
  [TRIP_TYPES.SEA]: [
    "name",
    "surname",
    "email",
    "student",
    "dateBirth",
    "birthplace",
    "country",
    "city",
    "idCardNumber",
    "nationality",
    "rodoApproval",
    "hasBLicence",
    "hasSRC",
    "sailingLicence",
    "sailingExperience",
    "skills",
    "whatCanYouTake",
    "tshirtSize",
    "gadgetChoice",
    "comments",
  ],
};

export default (values: Values, tripType: TRIP_TYPES) =>
  Object.keys(values)
    .filter((key: ValuesKey) =>
      FIELDS_PER_TRIP_TYPE[tripType].includes(String(key))
    )
    .reduce((obj: Values, key: ValuesKey) => {
      obj[key] = values[key];
      return obj;
    }, {});
