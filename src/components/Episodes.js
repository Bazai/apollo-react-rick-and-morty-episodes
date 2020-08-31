import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const EPISODES = gql`
  query GetEpisodes {
    episodes(page: 1) {
      info {
        count
      }
      results {
        id
        name
        air_date
        created
        episode
      }
    }
  }
`;
const EPISODES2 = gql`
  query GetEpisodes {
    episodes(page: 2) {
      info {
        count
      }
      results {
        id
        name
        air_date
        created
        episode
      }
    }
  }
`;
const EPISODES3 = gql`
  query GetEpisodes {
    episodes(page: 3) {
      info {
        count
      }
      results {
        id
        name
        air_date
        created
        episode
      }
    }
  }
`;

const Episodes = () => {
  // const client = useApolloClient();
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { loading, error, data } = useQuery(EPISODES);
  const { loading: loading2, error: error2, data: data2 } = useQuery(
    EPISODES2,
    {
      skip: !data,
    }
  );

  const { loading: loading3, error: error3, data: data3 } = useQuery(
    EPISODES3,
    {
      skip: !data2,
    }
  );

  useEffect(() => {
    setEpisodes(data?.episodes?.results);
  }, [data]);

  useEffect(() => {
    if (data2?.episodes?.results) {
      setEpisodes((state) => {
        return [...state, ...data2?.episodes?.results];
      });
    }
  }, [data2]);

  useEffect(() => {
    if (data3?.episodes?.results) {
      setEpisodes((state) => {
        return [...state, ...data3?.episodes?.results];
      });
      setIsLoading(false);
    }
  }, [data3]);

  useEffect(() => {
    console.log("EEE", episodes);
  }, [episodes]);

  useEffect(() => {
    console.log("II", isLoading);
  }, [isLoading]);

  // if (error) {
  //   return <h1 className="mt-4 font-bold text-3xl text-red-900">Error</h1>;
  // } else
  if (isLoading) {
    return <h1 className="mt-4 font-bold text-3xl text-black">Loading...</h1>;
  } else {
    return <h1 className="mt-4 font-bold text-3xl text-black">Episodes</h1>;
  }
};

export default Episodes;
