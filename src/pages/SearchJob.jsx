import React from "react";
import JobCard from "../components/JobCard";
import { Box, Grid } from "@mui/material";
import useApi from "../api/useApi";

const SearchJob = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 9,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  // Call the useAPI custom hook, passing the API URL and request options
  const { data, loading, error } = useApi(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box margin={2}>
      <Grid container spacing={4}>
        {data?.jdList?.map((job) => {
          return <JobCard key={job?.jdUid} job={job} />;
        })}
      </Grid>
    </Box>
  );
};

export default SearchJob;
