import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import useApi from "../api/useApi";
import MultiSelect from "../components/MultiSelect";
import JobCard from "../components/JobCard";
import { roles, salary, experience, jobType } from "../api/data";
import useFilteredData from "../utils/useFilteredData";

const SearchJob = () => {
  const [selectedRoles, setSelectedRoles] = useState();
  const [selectedExperience, setSelectedExperience] = useState();
  const [selectedJobType, setSelectedJobType] = useState();
  const [selectedSalary, setSelectedSalary] = useState();

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

  // Call the useApi custom hook, passing the API URL and request options
  const { data, loading, error } = useApi(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  );

  // Function to handle filter changes

  const handleFilterChange = (key, value) => {
    switch (key) {
      case "roles":
        const roles = value.map((i) => i.title.toLowerCase());
        setSelectedRoles(roles);
        break;
      case "salary":
        const salaries = value.map((i) => i.value);
        setSelectedSalary(salaries);
        break;
      case "experience":
        const experience = value.map((i) => i.value);
        console.log(experience);
        setSelectedExperience(experience);
        break;
      case "jobType":
        const jobType = value.map((i) => i.title.toLowerCase());
        setSelectedJobType(jobType);
        break;
      default:
        break;
    }
  };

  // Filter data based on selected filters using the custom hook
  const filteredData = useFilteredData(data?.jdList, {
    roles: selectedRoles,
    salary: selectedSalary,
    experience: selectedExperience,
    jobType: selectedJobType,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box margin={2}>
      <Grid container spacing={2} paddingX={1}>
        <MultiSelect
          key="roles"
          options={roles}
          placeholder="Roles"
          value={selectedRoles}
          //onChange={(value) => handleFilterChange('roles', value)}
          // onChange={(value) => handleFilterChange('roles', value.map(item => item.title.toLowerCase()))}
          onChange={(value) => handleFilterChange("roles", value)}
        />
        <MultiSelect
          key="salary"
          options={salary}
          placeholder="Minimum Base Pay Salary"
          value={selectedSalary}
          // onChange={(value) => handleFilterChange('salary',  value.map(item => item.value))}
          onChange={(value) => handleFilterChange("salary", value)}
        />
        <MultiSelect
          key="experience"
          options={experience}
          placeholder="Experience"
          value={selectedExperience}
          onChange={(value) => handleFilterChange("experience", value)}
        />
        <MultiSelect
          key="jobType"
          options={jobType}
          placeholder="Job Type"
          value={selectedJobType}
          onChange={(value) => handleFilterChange("jobType", value)}
        />
      </Grid>
      <Grid container spacing={4}>
        {filteredData?.map((job) => (
          <JobCard key={job?.jdUid} job={job} />
        ))}
      </Grid>
    </Box>
  );
};

export default SearchJob;
