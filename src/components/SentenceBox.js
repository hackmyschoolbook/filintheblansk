import React from "react";
import PropTypes from "prop-types";

import Droppable from "./Droppable";

import { Block, WordBox, WordWrapper } from "./styled";

export default function SentenceBox({ marked, sentence, onDrop }) {
  const _handleDrop = (e, id) => {
    onDrop(e, id);
  };

  const _renderSentence = () =>
    sentence.map((word, i) => {
      if (word.type === "word") {
        return (
          <WordBox data-testid={"word"} key={i}>
            {word.text}
          </WordBox>
        );
      }
      let bgcolor;

      if (marked) {
        bgcolor = word.text === word.displayed ? "lightgreen" : "#F77";
      }

      return (
        <Droppable
          bgcolor={bgcolor}
          groupName={word.id}
          key={i}
          ndx={i}
          onDrop={_handleDrop}
        >
          {word.placed ? word.displayed : " "}
        </Droppable>
      );
    });

  return (
    <Block>
      <WordWrapper>{_renderSentence()}</WordWrapper>
    </Block>
  );
}

SentenceBox.propTypes = {
  marked: PropTypes.bool.isRequired,
  onDrop: PropTypes.func.isRequired,
  sentence: PropTypes.array.isRequired
};
