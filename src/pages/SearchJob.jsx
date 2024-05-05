import React, { useState } from "react";
import JobCard from "../components/JobCard";
import { Box, Grid } from "@mui/material";
import useApi from "../api/useApi";
import MultiSelect from "../components/MultiSelect";
import { roles, salary, experience, jobType, employees } from "../api/data";

const SearchJob = () => {
  const [filters, setFilters] = useState({
    roles: [],
    employees: [],
    salary: [],
    experience: [],
    jobType: [],
  });

  // Configuration for the filter options
  const filterConfig = [
    { key: "roles", options: roles, placeholder: "Roles" },
    {
      key: "employees",
      options: employees,
      placeholder: "Number of Employees",
    },
    { key: "salary", options: salary, placeholder: "Minimum Base Pay Salary" },
    { key: "experience", options: experience, placeholder: "Experience" },
    { key: "jobType", options: jobType, placeholder: "Job Type" },
  ];

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
      <Grid container spacing={2} paddingX={1}>
        {filterConfig.map((config) => {
          return (
            <MultiSelect
              key={config.key}
              options={config.options}
              placeholder={config.placeholder}
            />
          );
        })}
      </Grid>
      <Grid container spacing={4}>
        {data?.jdList?.map((job) => {
          return <JobCard key={job?.jdUid} job={job} />;
        })}
      </Grid>
    </Box>
  );
};

export default SearchJob;
