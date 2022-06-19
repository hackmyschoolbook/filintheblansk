import React, { useState } from "react";
import PropTypes from "prop-types";

import { WordBox } from "./styled";

export default function Droppable({
  groupName,
  bgcolor,
  ndx,
  onDrop,
  children
}) {
  const [state, setState] = useState({
    bgcolor: "white"
  });

  const _handleDrop = e => {
    onDrop(e, groupName);
    setState({ bgcolor: "white" });
  };

  const _handleDragOver = e => {
    e.preventDefault();
    setState({ bgcolor: "yellow" });
  };

  const _handleDragLeave = e => {
    e.preventDefault();
    setState({ bgcolor: "white" });
  };

  return (
    <WordBox
      bgcolor={bgcolor ? bgcolor : state.bgcolor}
      data-testid={`droppable${ndx}`}
      onDragLeave={_handleDragLeave}
      onDragOver={_handleDragOver}
      onDrop={_handleDrop}
    >
      {children}
    </WordBox>
  );
}

Droppable.propTypes = {
  bgcolor: PropTypes.string,
  children: PropTypes.string.isRequired,
  groupName: PropTypes.number.isRequired,
  ndx: PropTypes.number.isRequired,
  onDrop: PropTypes.func.isRequired
};
