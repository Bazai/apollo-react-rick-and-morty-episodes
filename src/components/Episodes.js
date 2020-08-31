import React from "react";
// import { graphql } from "@apollo/react-hoc";
// import { loader } from "graphql.macro";
// const episodesQuery = loader("../queries/episodes.graphql");
import { useApolloClient } from "@apollo/client";
import { gql } from "@apollo/client";

const Episodes = () => {
  const client = useApolloClient();
  client
    .query({
      query: gql`
        query GetEpisodes {
          episodes(page: 1) {
            info {
              count
            }
            results {
              id
              name
            }
          }
        }
      `,
    })
    .then((result) => console.log(result));
  return <h1 className="mt-4 font-bold text-3xl text-black">Episodes</h1>;
};

// export default graphql(episodesQuery)(Episodes);
export default Episodes;
