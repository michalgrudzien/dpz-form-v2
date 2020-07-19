import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { LinearProgress } from "@material-ui/core";
import colors from "config/colors";

type FormProgressProps = {
  fieldsCount: number;
  validFields: number;
};

const StyledLinearProgress = styled(LinearProgress)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;

  ${({ value }) =>
    value === 100 &&
    `
    &.MuiLinearProgress-root{
        .MuiLinearProgress-barColorPrimary{
            background-color: ${colors.green}
        }
    }
  `}
`;

const FormProgress: FunctionComponent<FormProgressProps> = ({
  fieldsCount,
  validFields,
}) => (
  <StyledLinearProgress
    variant="determinate"
    value={(validFields / fieldsCount) * 100}
  />
);

export default FormProgress;
