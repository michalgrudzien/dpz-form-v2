import React, { FunctionComponent } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  LinearProgress,
  CircularProgress,
  Typography,
  Box,
  DialogActions,
  Button,
} from "@material-ui/core";

type SubmissionDialogProps = {
  isSubmitting?: boolean;
  open: boolean;
  setOpen: Function;
};

const SubmissionDialog: FunctionComponent<SubmissionDialogProps> = ({
  isSubmitting,
  open,
  setOpen,
}) => {
  return (
    <Dialog open={open}>
      {isSubmitting && (
        <DialogContent>
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        </DialogContent>
      )}
      {/* <DialogContent>
        <Typography>
          <Typography variant="h4">
            Piękna rzecz, wszystko się udało!
          </Typography>
          Już za chwilę dostaniesz od nas maila z potwierdzeniem i kolejnymi
          krokami, które fajnie by było podjąć. Jeśli&nbsp;mail nie przyjdzie w
          rozsądnym czasie, napisz do nas na dowolnym kanale (mail, Messenger, a
          nawet Insta), a zajmiemy się tym od razu!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button size="large" color="primary" variant="contained">
          Bip bop, załatwione
        </Button>
      </DialogActions> */}
      {/* <DialogContent>
        <Typography>
          <Typography variant="h4">Coś nie pykło :(</Typography>
          Cholera, coś nie wyszło i jeśli miałbym to na kogoś zwalić, to
          zdecydowanie jest to wina Masonów. Spróbuj, proszę, wysłać formularz
          jeszcze raz, a jak to nie pomoże to zakrzyknij ze złości w przestworza
          (groźby karalne względem działu IT będą też na miejscu) i wypełnij go
          od nowa. Jak to też nie pomoże, pisz do nas na dowolnym kanale (mail,
          Messenger, Insta). Naprawimy to na wczoraj!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button size="large" color="primary">
          Wróć do formularza
        </Button>
        <Button size="large" color="primary" variant="contained">
          Wyślij jeszcze raz
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default SubmissionDialog;
