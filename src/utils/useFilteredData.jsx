import { useEffect, useState } from "react";

const useFilteredData = (jobs, filters) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    let updatedJobs = jobs;

    // Filter by job role
    if (filters?.roles?.length > 0) {
      updatedJobs = updatedJobs.filter((job) => {
        return filters.roles.includes(job.jobRole);
      });
    }

    // Filter by salary
    if (filters?.salary?.length > 0) {
      updatedJobs = updatedJobs.filter((job) => {
        return filters.salary.some((salary) => job.minJdSalary <= salary);
      });
    }

    // Filter by experience
    if (filters?.experience?.length > 0) {
      updatedJobs = updatedJobs.filter((job) => {
        return filters.experience.some(
          (experience) => job.minExp <= experience
        );
      });
    }

    // Filter by job type
    if (filters?.jobType?.length > 0) {
      updatedJobs = updatedJobs.filter((job) => {
        // Check if job type is "remote"
        if (filters.jobType.includes("remote")) {
          return job.location === "remote";
        } else if (job.location !== "remote" && job.location === "remote") {
          return filters;
        } else {
          // If job type is not "remote", apply regular location-based filtering
          return filters.jobType.some((jobType) => job.location !== "remote");
        }
      });
    }

    // Update state with filtered jobs
    setFilteredJobs(updatedJobs);
  }, [jobs, filters]);

  return filteredJobs;
};

export default useFilteredData;
