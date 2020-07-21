import React, { FunctionComponent } from "react";
import styled from "styled-components";

import wtLogoImg from "assets/images/wt_logo.svg";

const LogoImg = styled.img`
  display: block;
  width: 250px;
  padding: 2em 0 1em;
  margin: 0 auto;
`;

//TODO: add WSS logo depending on env
const logoImg = wtLogoImg;

const Logo: FunctionComponent = () => (
  <LogoImg src={logoImg} alt="DPŻ World Tour" />
);

export default Logo;
