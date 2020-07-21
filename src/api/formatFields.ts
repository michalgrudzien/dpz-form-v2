export default (fields: any) => ({
  transportationOutbound: "",
  transportationReturn: "",
  ...fields,
  sailingExperience: parseInt(fields.sailingExperience),
});
