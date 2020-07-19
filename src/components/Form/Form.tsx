import React from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

import { Grid, Card, CardContent, Button, Typography } from "@material-ui/core";

import colors from "config/colors";
import validationSchema from "config/validationSchema";
import fieldsConfig from "config/fieldsConfig.json";
import FormSection from "./FormSection";
import FormProgress from "./FormProgress";

const MainTextWrapper = styled.div`
  color: ${colors.white};
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  padding-bottom: 2em;
`;

const DetailsWrapper = styled.div`
  padding-top: 2em;
`;

const fieldsCount = fieldsConfig.reduce((acc, section) => {
  return acc + section.fieldsConfig.length;
}, 0);

const Form = () => {
  const {
    control,
    handleSubmit,
    getValues,
    errors,
    formState: { touched },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });
  const onSubmit = (data: object): void => console.log(data);
  const formProps = {
    control,
    getValues,
    errors,
    touched,
  };

  const validFieldsCount = Object.keys(touched).filter(
    (fieldName) => !errors.hasOwnProperty(fieldName)
  ).length;

  return (
    <>
      <FormProgress fieldsCount={fieldsCount} validFields={validFieldsCount} />
      <CardContent>
        <MainTextWrapper>
          <Typography color="inherit" variant="h2" component="h1">
            No siema!
          </Typography>
          <Typography color="inherit" variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>

          <DetailsWrapper>
            <Grid container>
              <Grid xs={12} md={4} item>
                <Typography color="inherit" variant="h5">
                  Termin: 19.06.2020 - 26.06.2020
                </Typography>
              </Grid>
              <Grid xs={12} md={4} item>
                <Typography color="inherit" variant="h5">
                  Koszt: 900zł
                </Typography>
              </Grid>
              <Grid xs={12} md={4} item>
                <Typography color="inherit" variant="h5">
                  Start: Kraków/Gizycko
                </Typography>
              </Grid>
            </Grid>
          </DetailsWrapper>
        </MainTextWrapper>
      </CardContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          {fieldsConfig.map((section) => (
            <FormSection
              title={section.title}
              description={section.description}
              fieldsConfig={section.fieldsConfig}
              formProps={formProps}
            />
          ))}
          <Button size="large" variant="contained" color="primary" fullWidth>
            Płyniemy!
          </Button>
        </Card>
      </form>
    </>
  );
};

export default Form;
