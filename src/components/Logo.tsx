import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { TRIP_TYPES } from "api/types";
import getTripType from "helpers/getTripType";

import wtLogoImg from "assets/images/wt_logo.svg";
import wssLogoImg from "assets/images/wss_logo.svg";

const LogoImg = styled.img`
  display: block;
  width: 150px;
  padding: 2em 0 1em;
  margin: 0 auto;
`;

const logoImg = getTripType() === TRIP_TYPES.SEA ? wssLogoImg : wtLogoImg;

const Logo: FunctionComponent = () => (
  <LogoImg src={logoImg} alt="DPŻ World Tour" />
);

export default Logo;
