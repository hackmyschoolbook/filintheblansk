import React, { useState } from "react";

import SentenceBox from "./SentenceBox";
import AnswerBox from "./AnswerBox";
import Results from "./Results";
import { getSentence, getAnswers } from "./TextConverter";

import { AppContainer, PrimaryButton } from "./styled";

const text = "The <brown> fox <jumped> over the <dog>";

export default function App() {
  const [state, setState] = useState({
    showResults: false,
    question: "",
    answers: getAnswers(text),
    sentence: getSentence(text)
  });

  const onDrop = (e, dropId) => {
    const text = e.dataTransfer.getData("text/plain");

    const sentence = state.sentence.map(word => {
      if (word.id === dropId) {
        return { ...word, placed: true, displayed: text };
      }
      return word;
    });
    setState({ ...state, sentence });
  };

  const test = () => {
    setState({ ...state, showResults: !state.showResults });
  };

  const { showResults } = state;

  return (
    <AppContainer>
      <h2 className="header">Stephen fill in blank</h2>

      <SentenceBox
        marked={showResults}
        onDrop={onDrop}
        sentence={state.sentence}
      />
      <AnswerBox answers={state.answers} />
      <div>
        <PrimaryButton onClick={test}>Check result</PrimaryButton>
      </div>
      {showResults && <Results data={state.sentence} />}
    </AppContainer>
  );
}
