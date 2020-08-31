import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

import Loader from "./Loader";
import Season from "./Season";

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
  const [episodes, setEpisodes] = useState([]);
  const [normalizedEpisodes, setNormalizedEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetching
  const { data } = useQuery(EPISODES);
  const { data: data2 } = useQuery(EPISODES2, {
    skip: !data,
  });

  const { data: data3 } = useQuery(EPISODES3, {
    skip: !data2,
  });

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

  // Normalize paginated data
  useEffect(() => {
    if (!isLoading) {
      let normalized = {};
      episodes.forEach((ep) => {
        const reg = /S(\d\d)E(\d\d)/;
        const season = ep?.episode.match(reg)?.[1];

        if (normalized.hasOwnProperty(season)) {
          normalized[season].push(ep);
        } else {
          normalized[season] = [ep];
        }
        setNormalizedEpisodes(normalized);
      });
    }
  }, [episodes, isLoading]);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        {Object.keys(normalizedEpisodes).map((season) => (
          <Season
            number={season}
            key={season}
            episodes={normalizedEpisodes[season]}
          />
        ))}
      </>
    );
  }
};

export default Episodes;
