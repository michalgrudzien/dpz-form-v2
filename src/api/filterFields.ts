import { TRIP_TYPES } from "./types";

type Values = { [name: string]: any };
type ValuesKey = keyof Values;

export const FIELDS_PER_TRIP_TYPE: { [name: string]: string[] } = {
  [TRIP_TYPES.INLAND]: [
    "name",
    "surname",
    "email",
    "rodoApproval",
    "student",
    "beer",
    "sailingLicence",
    "sailingExperience",
    "skills",
    "transportationOutbound",
    "transportationReturn",
    "whatCanYouTake",
    "politics",
    "diet",
    "comments",
  ],
  [TRIP_TYPES.SEA]: [
    "name",
    "surname",
    "email",
    "student",
    "beer",
    "dateBirth",
    "birthplace",
    "country",
    "city",
    "idCardNumber",
    "nationality",
    "sailingExperience",
    "sailingLicence",
    "hasSRC",
    "skills",
    "whatCanYouTake",
    "politics",
    "diet",
    "comments",
    "rodoApproval",
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
