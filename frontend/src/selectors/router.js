import queryString from 'query-string';

export const getQueryParams = ({
  router: {
    location: { search },
  },
}) => queryString.parse(search);
