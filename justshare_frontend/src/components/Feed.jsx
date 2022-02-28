import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { client } from "../client";
import Spinner from "./Spinner";
import { feedQuery, searchQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";

const Feed = () => {
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      setLoading(true);

      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);
  const ideaName = categoryId || 'new';

  if (loading) {
    return (
      <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
    );
  }
if (!pins?.length){
  return <h1>No Pins available</h1>
}
  return <div>
    {pins && <MasonryLayout pins={pins} />}
  </div>;
};

export default Feed;
