/* eslint-disable no-unused-vars */

import React from "react";
import ComponentB from "./ComponentB";
import PropTypes from "prop-types";

const ComponentA = ({ statement }) => {
  ComponentA.propTypes = {
    statement: PropTypes.string.isRequired,
  };

  return (
    <div>
      <ComponentB statement={statement} />
    </div>
  );
};

export default ComponentA;
