import { useEffect, useState } from 'react';
import { salary } from '../api/data';

const useFilteredData = (jobs, filters) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    let updatedJobs = jobs;

    // Filter by job role
    if (filters?.roles?.length > 0) {
      updatedJobs = updatedJobs.filter(job =>
        filters.roles.includes(job.jobRole)
      );
    }

    // Filter by salary
    if (filters?.salary?.length > 0) {
        updatedJobs = updatedJobs.filter(job => {
                  // Check if minJdSalary is null or included in the selected salary values
        return job.minJdSalary === null || filters.salary.includes(job.minJdSalary);
    });
  }
  

    // Filter by experience
    if (filters?.experience?.length > 0) {
      updatedJobs = updatedJobs.filter(job =>
        filters.experience.includes(job.minExp)
      );
    }

    // Filter by job type
    if (filters?.jobType?.length > 0) {
      updatedJobs = updatedJobs.filter(job =>
        filters.jobType.includes(job.location)
      );
    }

    // Update state with filtered jobs
    setFilteredJobs(updatedJobs);
  }, [jobs, filters]);

  return filteredJobs;
};

export default useFilteredData;
