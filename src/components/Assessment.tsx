import React, { useState } from 'react';
import { Button } from 'reactstrap';

type Props = {
  question: string;
  correctAnswer: string; // TODO: Support other data types
  incorrectAnswerChoices: string[];
  answerShufflingFunction: (answerChoices: string[]) => string[];
};

export default function Assessment({
  question,
  correctAnswer,
  incorrectAnswerChoices,
  answerShufflingFunction = (answerChoices: string[]) => answerChoices.sort(),
}: Props) {
  const shuffledAnswerChoices = answerShufflingFunction([
    correctAnswer,
    ...incorrectAnswerChoices,
  ]);

  const [submittedAnswer, setSubmittedAnswer] = useState<string | null>(null);

  return (
    <div>
      <p className="mb-0">{question}</p>

      <div>
        {shuffledAnswerChoices.map((answerChoice, i) => {
          let color = 'secondary';
          if (submittedAnswer != null) {
            if (answerChoice === correctAnswer) {
              color = 'success';
            } else if (answerChoice === submittedAnswer) {
              color = 'danger';
            }
          }

          return (
            <Button
              key={answerChoice}
              value={answerChoice}
              disabled={submittedAnswer != null}
              onClick={(event: React.FormEvent<HTMLButtonElement>) =>
                setSubmittedAnswer(event.currentTarget.value)
              }
              outline={color === 'secondary'}
              color={color}
              className={`mt-3 ${
                i < shuffledAnswerChoices.length - 1 ? 'mr-3' : ''
              }}`}
            >
              {answerChoice}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
