const { createFilePath } = require('gatsby-source-filesystem');
const { resolve } = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Json') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: resolve('./src/templates/quiz.tsx'),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
