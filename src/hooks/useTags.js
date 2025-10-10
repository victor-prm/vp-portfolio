import { useQuery } from '@apollo/client/react';
import {
  GET_TAGS_TECHNOLOGIES,
  GET_TAGS_ROLES,
  GET_TAGS_WORKTYPES,
} from '../graphql/queries';

const TAG_QUERIES = {
  technologies: GET_TAGS_TECHNOLOGIES,
  roles: GET_TAGS_ROLES,
  workTypes: GET_TAGS_WORKTYPES,
};

export default function useTags(type = 'technologies') {
  const query = TAG_QUERIES[type];

  if (!query) {
    throw new Error(
      `Invalid tag type "${type}". Must be one of: ${Object.keys(TAG_QUERIES).join(', ')}`
    );
  }

  const { data, loading, error } = useQuery(query);
  const nodes = data ? Object.values(data)[0]?.nodes || [] : [];

  return { tags: nodes, loading, error };
}