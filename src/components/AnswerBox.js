import React from "react";
import PropTypes from "prop-types";

import Draggable from "./Draggable";

import { Block, WordWrapper } from "./styled";

export default function AnswerBox({ answers }) {
  const onDragStart = (e, id) => {
    if (e.dataTransfer) {
      e.dataTransfer.setData("text/plain", id);
    }
  };

  return (
    <Block>
      Drag answers below to correct place
      <WordWrapper>
        {answers.map(a => (
          <Draggable
            bgcolor="rgba(255,255,255,0)"
            key={a}
            name={a}
            onDragStart={onDragStart}
          />
        ))}
      </WordWrapper>
    </Block>
  );
}

AnswerBox.propTypes = {
  answers: PropTypes.array.isRequired
};
