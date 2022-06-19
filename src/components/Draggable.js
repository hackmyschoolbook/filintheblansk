import React from "react";
import PropTypes from "prop-types";

import { WordBox } from "./styled";

export default function Draggable({ name, bgcolor, onDragStart }) {
  const _handleDragStart = e => {
    onDragStart(e, name);
  };

  return (
    <WordBox
      bgcolor={bgcolor}
      data-testid="answer"
      draggable="true"
      onDragStart={_handleDragStart}
    >
      {name}
    </WordBox>
  );
}

Draggable.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDragStart: PropTypes.func.isRequired
};
