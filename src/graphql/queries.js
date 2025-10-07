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

export const GET_MENU_SETS = gql`
query GetMenuSets{
  menuSets {
    nodes {
      title
      customMenuSets {
        menuItems {
          topLevelLink {
            nodes {
              ... on MenuLink {
                title
                id
                customMenuLinks {
                  subpath
                  openNewTab
                }
              }
            }
          }
          nestedLinks {
            nodes {
              ... on MenuLink {
                title
                id
                customMenuLinks {
                  subpath
                  openNewTab
                }
              }
            }
          }
        }
      }
    }
  }
}`


export const GET_MAIN_NAVIGATION = gql`
query GET_MAIN_NAVIGATION {
  menuSets(where: { title: "Main Navigation" }) {
    nodes {
      title
      customMenuSets {
        menuItems {
          topLevelLink {
            nodes {
              ... on MenuLink {
                title
                id
                customMenuLinks {
                  openNewTab
                  subpath
                }
              }
            }
          }
          nestedLinks {
            nodes {
              ... on MenuLink {
                title
                id
                customMenuLinks {
                  openNewTab
                  subpath
                }
              }
            }
          }
        }
      }
    }
  }
}
`;