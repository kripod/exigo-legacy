import { graphql, Link } from 'gatsby';
import React from 'react';
import { Container } from 'reactstrap';
import Layout from '../components/Layout';

type Props = {
  data: any;
};

export default function IndexPage({ data }: Props) {
  return (
    <Layout>
      <Container>
        <h2>Quizzes</h2>

        <ul>
          {data.allJson.edges.map(({ node }: any) => (
            <li key={node.id}>
              <Link to={node.fields.slug}>{node.title}</Link>
            </li>
          ))}
        </ul>
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
          title
          fields {
            slug
          }
        }
      }
    }
  }
`;
