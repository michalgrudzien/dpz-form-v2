import React, { FunctionComponent } from "react";

import {
  Dialog,
  DialogContent,
  CircularProgress,
  Typography,
  Box,
  DialogActions,
  Button,
  Link,
  withStyles,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";

import { SubmissionState } from "./Form";
import colors from "config/colors";

const CheckIcon = withStyles({
  root: {
    marginLeft: 8,
  },
})(CheckCircleIcon);

const ErrorIcon = withStyles({
  root: {
    marginLeft: 8,
  },
})(SentimentDissatisfiedIcon);

type SubmissionDialogProps = {
  submissionState: SubmissionState;
  setSubmissionState: Function;
  submit: Function;
};

const renderDialogContent = (
  submissionState: SubmissionState,
  setSubmissionState: Function,
  submit: Function
) => {
  switch (submissionState) {
    case SubmissionState.PENDING:
      return (
        <DialogContent>
          <Box display="flex" justifyContent="center" mb={1}>
            <CircularProgress />
          </Box>
          <Typography display="block">Zobaczmy...</Typography>
        </DialogContent>
      );
    case SubmissionState.SUCCESS:
      return (
        <>
          <DialogContent>
            <Typography>
              <Typography variant="h4">
                Bip bop, załatwione
                <CheckIcon htmlColor={colors.green} />
              </Typography>
              <Typography gutterBottom>
                Już za chwilę dostaniesz od nas maila z potwierdzeniem i
                kolejnymi krokami, które fajnie by było podjąć.
              </Typography>
              <Typography gutterBottom>
                Jeśli&nbsp;mail nie przyjdzie w rozsądnym czasie, napisz do nas
                na dowolnym kanale (
                <Link href="mailto:kontakt@depezet.com" target="_blank">
                  mail
                </Link>
                ,{" "}
                <Link
                  href="https://m.me/dobrapraktykazeglarska"
                  target="_blank"
                >
                  Messenger
                </Link>
                , a nawet{" "}
                <Link href="https://instagram.com/depezet" target="_blank">
                  Insta
                </Link>
                ), a zajmiemy się tym od razu!{" "}
              </Typography>
              <Typography>
                <b>Pamiętaj, żeby sprawdzić folder SPAM ;)</b>
              </Typography>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={() => setSubmissionState(SubmissionState.FINISHED)}
            >
              OK
            </Button>
          </DialogActions>
        </>
      );
    case SubmissionState.ERROR:
      return (
        <>
          <DialogContent>
            <Typography variant="h4">
              Coś nie pykło <ErrorIcon htmlColor={colors.red} />
            </Typography>
            <Typography gutterBottom>
              Cholera, coś nie wyszło i jeśli miałbym to na kogoś zwalić, to
              zdecydowanie jest to wina Masonów.{" "}
            </Typography>
            <Typography gutterBottom>
              Spróbuj, proszę, wysłać formularz jeszcze raz, a jak to nie pomoże
              to zakrzyknij ze złości w przestworza (groźby karalne względem
              działu IT będą też na miejscu) i wypełnij go od nowa. Jak to też
              nie pomoże, pisz do nas na dowolnym kanale (
              <Link href="mailto:kontakt@depezet.com" target="_blank">
                mail
              </Link>
              ,{" "}
              <Link href="https://m.me/dobrapraktykazeglarska" target="_blank">
                Messenger
              </Link>
              ,{" "}
              <Link href="https://instagram.com/depezet" target="_blank">
                Insta
              </Link>
              ). Naprawimy to na wczoraj!
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              size="large"
              color="primary"
              onClick={() => setSubmissionState(SubmissionState.INIT)}
            >
              Wróć do formularza
            </Button>
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={() => submit()}
            >
              Wyślij jeszcze raz
            </Button>
          </DialogActions>
        </>
      );
    default:
      return null;
  }
};

const SubmissionDialog: FunctionComponent<SubmissionDialogProps> = ({
  submissionState,
  setSubmissionState,
  submit,
}) => {
  return (
    <Dialog
      open={
        submissionState !== SubmissionState.INIT &&
        submissionState !== SubmissionState.FINISHED
      }
    >
      {renderDialogContent(submissionState, setSubmissionState, submit)}
    </Dialog>
  );
};

export default SubmissionDialog;
