/** @format */

import React, { FunctionComponent } from "react";
import styled from "styled-components";

type GradientBackgroundProps = {
  className?: string;
};

const Gradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(225deg, #0f7b97, #0c1a2b);
  background-size: 100% 100%;

  background-size: 400% 400%;
  -webkit-animation: DpzGradient 11s ease infinite;
  -moz-animation: DpzGradient 11s ease infinite;
  animation: DpzGradient 11s ease infinite;

  @-webkit-keyframes DpzGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes DpzGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes DpzGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const GradientBackground: FunctionComponent<GradientBackgroundProps> = ({
  className,
}) => <Gradient className={className} />;

export default GradientBackground;
