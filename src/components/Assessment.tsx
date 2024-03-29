import React, { useMemo, useState } from 'react';
import { Button } from 'reactstrap';

type Props = {
  question: string;
  correctAnswer: string; // TODO: Support other data types
  incorrectAnswerChoices: string[];
  answerShufflingFunction?: (answerChoices: string[]) => string[];
  className?: string;
};

export default function Assessment({
  question,
  correctAnswer,
  incorrectAnswerChoices,
  answerShufflingFunction = (answerChoices: string[]) => answerChoices.sort(),
  ...props
}: Props) {
  const shuffledAnswerChoices = useMemo(
    () => answerShufflingFunction([correctAnswer, ...incorrectAnswerChoices]),
    [answerShufflingFunction, correctAnswer, incorrectAnswerChoices],
  );

  const [submittedAnswer, setSubmittedAnswer] = useState<string | null>(null);

  return (
    <div {...props}>
      <p className="mb-0">{question}</p>

      <div className="ml-n3">
        {shuffledAnswerChoices.map(answerChoice => {
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
              className="mt-3 ml-3"
            >
              {answerChoice}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
