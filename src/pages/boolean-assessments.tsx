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

export default function BooleanAssessmentsPage({ data }: Props) {
  const shuffledAssessmentEdges = shuffle(data.allJson.edges);

  return (
    <Layout>
      <Container tag={Measure}>
        {/* TODO: Read title from JSON */}
        <h2>Makroökonómia kvíz</h2>

        {shuffledAssessmentEdges.map(({ node }: any) => (
          <Assessment
            key={node.id}
            question={node.question}
            correctAnswer={node.correctAnswer ? 'Igaz' : 'Hamis'}
            incorrectAnswerChoices={[node.correctAnswer ? 'Hamis' : 'Igaz']}
            className="mt-3 mb-4"
          />
        ))}
      </Container>
    </Layout>
  );
}

export const query = graphql`
  {
    allJson {
      edges {
        node {
          id
          question
          correctAnswer
        }
      }
    }
  }
`;
