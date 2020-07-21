import React, { useState } from "react";
import styled from "styled-components";
import Wave from "react-wavify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

import { Card, Button, Box } from "@material-ui/core";

import colors from "config/colors";
import validationSchema from "config/validationSchema";
import fieldsConfig from "config/fieldsConfig.json";

import { submitApplication } from "api";

import FormSection from "./FormSection";
import FormProgress from "./FormProgress";
import SubmissionDialog from "./SubmissionDialog";

export enum SubmissionState {
  INIT = "init",
  PENDING = "pending",
  SUCCESS = "success",
  ERROR = "error",
}

const StyledWave = styled(Wave)`
  position: relative;
  bottom: -124px;
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 104px;
`;

//TODO: handle this better :(
const allFieldsNames: string[] = [
  "name",
  "surname",
  "email",
  "student",
  "beer",
  "isTravelling",
  "transportationOutbound",
  "transportationReturn",
  "sailingExperience",
  "sailingLicence",
  "politics",
  "diet",
  "skills",
  "whatCanYouTake",
  "comments",
  "rodoApproval",
];
const fieldsCount = allFieldsNames.length;

const Form = () => {
  const {
    control,
    handleSubmit,
    getValues,
    errors,
    watch,
    formState: { touched, isValid: isFormValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  const [submissionState, setSubmissionState]: [
    SubmissionState,
    Function
  ] = useState(SubmissionState.INIT);

  const onSubmit = (data: any): void => {
    setSubmissionState(SubmissionState.PENDING);

    submitApplication(data)
      .then((data) => {
        setSubmissionState(SubmissionState.SUCCESS);
      })
      .catch(() => {
        setSubmissionState(SubmissionState.ERROR);
      });
  };

  const submit = handleSubmit(onSubmit);

  const formProps = {
    control,
    getValues,
    errors,
    touched,
    watch,
  };

  //TODO: handle this better :(
  const computedFieldsCount: number =
    watch("isTravelling") !== false ? fieldsCount : fieldsCount - 2;

  const validFieldsCount: number = allFieldsNames.filter(
    (fieldName) =>
      (!errors.hasOwnProperty(fieldName) && touched[fieldName]) ||
      ["skills", "whatCanYouTake", "comments"].includes(fieldName)
  ).length;

  return (
    <>
      <FormProgress
        fieldsCount={computedFieldsCount}
        validFields={validFieldsCount}
      />
      <form onSubmit={submit}>
        <Card>
          {fieldsConfig.map((section, index) => (
            <FormSection
              key={section.title}
              title={section.title}
              description={section.description}
              fieldsConfig={section.fieldsConfig}
              formProps={formProps}
              last={index === fieldsConfig.length - 1}
            />
          ))}
          <StyledWave
            fill={isFormValid ? colors.secondary : colors.lightGrey}
            options={{
              height: 10,
              amplitude: 20,
              speed: 0.15,
              points: 3,
            }}
          />
          <StyledBox>
            <Button
              size="large"
              variant={isFormValid ? `contained` : undefined}
              color="primary"
              disabled={!isFormValid}
              type="submit"
            >
              {isFormValid
                ? "Płyniemy!"
                : "Chyba jeszcze coś zostało do wypełnienia..."}
            </Button>
          </StyledBox>
          <SubmissionDialog
            setSubmissionState={setSubmissionState}
            submissionState={submissionState}
            submit={submit}
          />
        </Card>
      </form>
    </>
  );
};

export default Form;
