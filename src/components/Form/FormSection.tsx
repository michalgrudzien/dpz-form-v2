import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Control } from "react-hook-form";

import { CardContent, Typography, Grid, Divider } from "@material-ui/core";

import Field from "./Field";

type FormSectionProps = {
  title: string | JSX.Element;
  description: string | JSX.Element | JSX.Element[];
  last?: boolean;
  formProps: {
    control: Control;
    getValues: Function;
    errors: any;
  }; //TODO: extend
  fieldsConfig: any[];
};

const Wrapper = styled.div`
  padding-top: 0.5em;
`;

const FormSection: FunctionComponent<FormSectionProps> = ({
  title,
  description,
  last = false,
  formProps: { control, getValues, errors },
  fieldsConfig,
}) => {
  return (
    <Wrapper>
      <CardContent>
        <Grid container spacing={8}>
          <Grid item xs={12} md={5}>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {fieldsConfig.map((field) => (
                <Field
                  key={field.name}
                  control={control}
                  getValues={getValues}
                  error={errors[field.name]}
                  {...field}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      {!last && <Divider variant="middle" />}
    </Wrapper>
  );
};

export default FormSection;
