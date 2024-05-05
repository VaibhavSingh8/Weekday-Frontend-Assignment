import JobCard from "../components/JobCard";
import { Box, Grid } from "@mui/material";
import useApi from "../api/useApi";
import MultiSelect from "../components/MultiSelect";
import { roles, salary, experience, jobType } from "../api/data";
//import useFilteredData from "../utils/useFilteredData";

const SearchJob = () => {
  // const initialFilters = {
  //   roles: [],
  //   salary: [],
  //   experience: [],
  //   jobType: [],
  // };

  // Configuration for the filter options
  // const filterConfig = [
  //   { key: "roles", options: roles, placeholder: "Roles" },
  //   { key: "salary", options: salary, placeholder: "Minimum Base Pay Salary" },
  //   { key: "experience", options: experience, placeholder: "Experience" },
  //   { key: "jobType", options: jobType, placeholder: "Job Type" },
  // ];

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

  // const {
  //   data: filteredData,
  //   filters,
  //   updateFilters,
  // } = useFilteredData(data?.jdList || [], initialFilters);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleFilterChange = (key, value) => {
    value?.map((i) => {
      console.log(i);
      var title = i.title.toLowerCase();
      var salary = "";
      var experience = "";
      var job_type = "";

      var jobs = data.jdList;
      const result = jobs.filter(function (obj, index) {
        var newarr = [];
        newarr.append(obj.jobRole == title);
      });
      console.log(result);
    });

    updateFilters(key, value);
  };

  return (
    <Box margin={2}>
      <Grid container spacing={2} paddingX={1}>
        <MultiSelect
          key="roles"
          options={roles}
          placeholder="Roles"
          value={[]}
          onChange={(value) => handleFilterChange(c, value)}
        />
        <MultiSelect
          key="salary"
          options={salary}
          placeholder="Minimum Base Pay Salary"
          value={[]}
          onChange={(value) => handleFilterChange(key, value)}
        />
        <MultiSelect
          key="experience"
          options={experience}
          placeholder="Experience"
          value={[]}
          onChange={(value) => handleFilterChange(key, value)}
        />
        <MultiSelect
          key="jobType"
          options={jobType}
          placeholder="Job Type"
          value={[]}
          onChange={(value) => handleFilterChange(key, value)}
        />
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
