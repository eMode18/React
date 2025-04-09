/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from "prop-types";
import ComponentC from "./ComponentC";

const ComponentB = ({ statement }) => {
  ComponentB.propTypes = {
    statement: PropTypes.string.isRequired,
  };
  return (
    <div>
      <ComponentC statement={statement} />
    </div>
  );
};

export default ComponentB;
