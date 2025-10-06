import { gql } from '@apollo/client'

export const GET_PORTFOLIO_ITEMS = gql`
  query GetPortfolioItems {
  portfolioItems {
    nodes {
      featuredImage{
        node{
          sourceUrl
          title
          caption
          altText
        }
      }
      title
      slug
      content
      customPortfolioFields {
        companies {
          nodes {
            ... on Company {
              id
              featuredImage {
                node {
                  sourceUrl
                }
              }
              title
              slug
            }
          }
        }
        portfolioItemGallery {
          nodes {
            id
            sourceUrl
            altText
            title
            caption
            description
          }
        }
        year
      }
      roles {
        nodes {
          id
          name
          slug
        }
      }
      technologies {
        nodes {
          id
          name
          slug
        }
      }
      workTypes {
        nodes {
          id
          name
          slug
        }
      }
    }
  }
}
`

