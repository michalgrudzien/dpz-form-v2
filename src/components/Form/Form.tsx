import React from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

import { Grid, Card, CardContent, Button, Typography } from "@material-ui/core";

import colors from "config/colors";
import validationSchema from "config/validationSchema";
import FormSection from "./FormSection";

const MainTextWrapper = styled.div`
  color: ${colors.white};
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  padding-bottom: 2em;
`;

const DetailsWrapper = styled.div`
  padding-top: 2em;
`;

const Form = () => {
  const { control, handleSubmit, getValues, errors } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });
  const onSubmit = (data: object): void => console.log(data);
  const formProps = {
    control,
    getValues,
    errors,
  };

  return (
    <>
      <CardContent>
        <MainTextWrapper>
          <Typography
            color="inherit"
            variant="h2"
            component="h1"
            onClick={() => console.log(getValues())}
          >
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
          <FormSection
            title="Dane osobowe"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            formProps={formProps}
            fieldsConfig={[
              {
                type: "text",
                name: "name",
                label: "Imię",
              },
              {
                type: "text",
                name: "surname",
                label: "Nazwisko",
              },
              {
                type: "email",
                name: "email",
                label: "Adres e-mail",
                fullWidth: true,
              },
              {
                type: "select",
                name: "student",
                label: "Czy masz legitymację studencką?",
                fullWidth: true,
                options: [
                  {
                    label: "Tak.",
                    value: 1,
                  },
                  {
                    label: "No niestety.",
                    value: 0,
                  },
                ],
              },
              {
                type: "checkbox",
                name: "beer",
                label: "Ulubione piwo",
                fullWidth: true,
                defaultValue: false,
                options: [
                  {
                    label: "Czarny Specjal Mazowieckie",
                    value: true,
                  },
                ],
              },
            ]}
          />
          <FormSection
            title="Doświadczenie zeglarskie"
            description="Lubimy dzielić załogi tak, żeby w każdej znalazł się ktoś, kto odróżnia foka od foki. W idealnym świecie jest to sternik, ale każdemu sternikowi miło, kiedy ma kogoś do pomocy. Więc nie krępuj się, tu możesz się pochwalić swoimi nieprzeciętnymi umiejętnościami!"
            last={true}
            formProps={formProps}
            fieldsConfig={[
              {
                type: "radio",
                name: "sailingExperience",
                label: "Doświadczenie",
                fullWidth: true,
                options: [
                  {
                    label: "Brak.",
                    value: "1",
                  },
                  {
                    label: "Zeglarz jachtowy",
                    value: "2",
                  },
                  {
                    label: "Jachtowy Sternik Morski",
                    value: "3",
                  },
                  {
                    label: "Kapitan Jachtowy",
                    value: "4",
                  },
                ],
              },
              {
                type: "imageRadio",
                name: "sailingLicence",
                label: "Uprawnienia",
                fullWidth: true,
                options: [
                  {
                    label: "Brak.",
                    value: "NONE",
                    image: require("assets/images/licence_NONE.svg"),
                    imageChecked: require("assets/images/licence_NONE_c.svg"),
                  },
                  {
                    label: "Zeglarz Jachtowy",
                    value: "ZJ",
                    image: require("assets/images/licence_ZJ.svg"),
                    imageChecked: require("assets/images/licence_ZJ_c.svg"),
                  },
                  {
                    label: "Jachtowy Sternik Morski",
                    value: "JSM",
                    image: require("assets/images/licence_JSM.svg"),
                    imageChecked: require("assets/images/licence_JSM_c.svg"),
                  },
                  {
                    label: "Kapitan Jachtowy",
                    value: "KJ",
                    image: require("assets/images/licence_KJ.svg"),
                    imageChecked: require("assets/images/licence_KJ_c.svg"),
                  },
                  // {
                  //   label: "Zeglarz jachtowy",
                  //   value: "ZJ",
                  // },
                  // {
                  //   label: "Jachtowy Sternik Morski",
                  //   value: "JSM",
                  // },
                  // {
                  //   label: "Kapitan Jachtowy",
                  //   value: "KJ",
                  // },
                ],
              },
            ]}
          />
          {/* <FormSection
            title="Dane osobowe"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            formProps={formProps}
            fieldsConfig={[
              {
                type: "text",
                name: "lastName",
                label: "Nazwisko",
              },
            ]}
          />
          <FormSection
            title="Dane osobowe"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            formProps={formProps}
            fieldsConfig={[
              {
                type: "email",
                name: "email",
                label: "Adres e-mail",
              },
            ]}
          /> */}
          <Button size="large" variant="contained" color="primary" fullWidth>
            Płyniemy!
          </Button>
        </Card>
      </form>
    </>
  );
};

export default Form;
