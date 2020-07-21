import React, { FunctionComponent } from "react";

import {
  Dialog,
  DialogContent,
  CircularProgress,
  Typography,
  Box,
  DialogActions,
  Button,
} from "@material-ui/core";

import { SubmissionState } from "./Form";

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
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        </DialogContent>
      );
    case SubmissionState.SUCCESS:
      return (
        <>
          <DialogContent>
            <Typography>
              <Typography variant="h4">Bip bop, załatwione</Typography>
              Już za chwilę dostaniesz od nas maila z potwierdzeniem i kolejnymi
              krokami, które fajnie by było podjąć. Jeśli&nbsp;mail nie
              przyjdzie w rozsądnym czasie, napisz do nas na dowolnym kanale
              (mail, Messenger, a nawet Insta), a zajmiemy się tym od razu!
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={() => setSubmissionState(SubmissionState.INIT)}
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
            <Typography>
              <Typography variant="h4">Coś nie pykło :(</Typography>
              Cholera, coś nie wyszło i jeśli miałbym to na kogoś zwalić, to
              zdecydowanie jest to wina Masonów. Spróbuj, proszę, wysłać
              formularz jeszcze raz, a jak to nie pomoże to zakrzyknij ze złości
              w przestworza (groźby karalne względem działu IT będą też na
              miejscu) i wypełnij go od nowa. Jak to też nie pomoże, pisz do nas
              na dowolnym kanale (mail, Messenger, Insta). Naprawimy to na
              wczoraj!
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
    <Dialog open={submissionState !== SubmissionState.INIT}>
      {renderDialogContent(submissionState, setSubmissionState, submit)}
    </Dialog>
  );
};

export default SubmissionDialog;
