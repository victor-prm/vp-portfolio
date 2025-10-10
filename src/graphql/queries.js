import { gql } from '@apollo/client'

export const GET_PORTFOLIO_ITEMS = gql`
query GetPortfolioItems {
  portfolioItems(first: 50) {
    nodes {
      featuredImage{
        node{
          sourceUrl
          title
          caption
          altText
          mediaDetails{
              width
              height
            }
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

export const GET_PORTFOLIO_ITEM_SINGLE = gql`
  query GetPortfolioItemDetails($slug: String!) {
    portfolioItemBy(slug: $slug) {
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
        portfolioItemGallery(first: 50) {
          nodes {
            id
            sourceUrl
            altText
            title
            caption
            description
            mediaDetails {
              width
              height
            }
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
`;


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


export const GET_MENU_BY_TITLE = gql`
  query GetMenuByTitle($title: String!) {
    menuSets(where: { title: $title }) {
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

export const GET_TAGS_TECHNOLOGIES = gql`
  query GetTechnologies {
    technologies(first: 100) {
      nodes {
        name
        slug
      }
    }
  }
`;

export const GET_TAGS_ROLES = gql`
  query GetRoles {
    roles {
      nodes {
        name
        slug
      }
    }
  }
`;

export const GET_TAGS_WORKTYPES = gql`
  query GetWorkTypes {
    workTypes {
      nodes {
        name
        slug
      }
    }
  }
`;


export const GET_PAGE_BY_ID = gql`
  query GetPageById($id: ID!) {
    pageBy(id: $id) {
      title
      slug
      content
      featuredImage{
      node{
        id
            sourceUrl
            altText
            title
            caption
            description
            mediaDetails {
              width
              height
            }
      }
    }
    }
  }
`;