/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from "prop-types";

const ComponentC = ({ statement }) => {
  ComponentC.propTypes = {
    statement: PropTypes.string.isRequired,
  };
  return <div>{statement}</div>;
};

export default ComponentC;
