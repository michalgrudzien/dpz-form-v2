export default (fields: any) => ({
  ...fields,
  sailingExperience: parseInt(fields.sailingExperience),
});
