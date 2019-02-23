import { graphql } from 'gatsby';
import shuffle from 'lodash.shuffle';
import React from 'react';
import { Container } from 'reactstrap';
import Assessment from '../components/Assessment';
import Layout from '../components/Layout';
import Measure from '../components/Measure';

type Props = {
  data: any;
};

export default function QuizTemplate({ data }: Props) {
  const shuffledAssessments = shuffle(data.json.assessments);

  return (
    <Layout>
      <Container tag={Measure}>
        <h2>{data.json.title}</h2>

        {shuffledAssessments.map((assessment, i) => (
          <Assessment
            key={
              // The list of assessments will not ever change, so we're safe
              // eslint-disable-next-line react/no-array-index-key
              i
            }
            question={assessment.question}
            correctAnswer={assessment.correctAnswer ? 'Igaz' : 'Hamis'}
            incorrectAnswerChoices={[
              assessment.correctAnswer ? 'Hamis' : 'Igaz',
            ]}
            className="mt-3 mb-4"
          />
        ))}
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    json(fields: { slug: { eq: $slug } }) {
      id
      title
      assessments {
        question
        correctAnswer
      }
    }
  }
`;
