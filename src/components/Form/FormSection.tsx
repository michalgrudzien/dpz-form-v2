import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Control } from "react-hook-form";

import {
  CardContent,
  Typography,
  Grid,
  Divider,
  Grow,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import Field from "./Field";
import colors from "config/colors";

type FormSectionProps = {
  title: string | JSX.Element;
  description: string | JSX.Element | JSX.Element[];
  last?: boolean;
  formProps: {
    control: Control;
    getValues: Function;
    errors: any;
    touched: any;
    watch: any;
  };
  fieldsConfig: any[];
  isFormDisabled: boolean;
};

const Wrapper = styled.div`
  padding-top: 0.5em;
`;

const StyledCheckCircleIcon = styled(CheckCircleIcon)`
  margin-left: 0.25em;
`;

const FormSection: FunctionComponent<FormSectionProps> = ({
  title,
  description,
  last = false,
  formProps: { control, getValues, errors, touched, watch },
  fieldsConfig,
  isFormDisabled,
}) => {
  const fieldsNames: string[] = fieldsConfig.map((field) => field.name);
  const isSectionValid: boolean = fieldsConfig.every(
    (field) =>
      (touched[field.name] && !errors.hasOwnProperty(field.name)) ||
      (!touched[field.name] && field.initiallyValid)
  );

  //TODO: handle this better :(
  const isValidTransport: boolean =
    fieldsNames[0] === "isTravelling" && watch("isTravelling") === false;

  return (
    <Wrapper>
      <CardContent>
        <Grid container spacing={8}>
          <Grid item xs={12} md={5}>
            <Typography variant="h4">
              {title}
              <Grow in={isSectionValid || isValidTransport}>
                <StyledCheckCircleIcon
                  fontSize="default"
                  htmlColor={colors.green}
                />
              </Grow>
            </Typography>
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
                  touched={!!touched[field.name]}
                  {...field}
                  disabled={isFormDisabled}
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
