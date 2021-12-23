import { formatISO } from "date-fns";

export default (fields: any) => ({
  transportationOutbound: "",
  transportationReturn: "",
  ...fields,
  dateBirth: fields.dateBirth? formatISO(fields.dateBirth, { representation: 'date' }) : undefined,
  sailingExperience: parseInt(fields.sailingExperience),
});
