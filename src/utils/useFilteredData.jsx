import { useState, useEffect } from "react";

const useFilteredData = (initialData, initialFilters) => {
  const [data, setData] = useState(initialData);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    // Filtering logic
    let filteredData = initialData;

    // Filter by roles
    if (filters.roles.length > 0) {
      filteredData = filteredData.filter((job) =>
        filters.roles.some((role) => job?.jobRole?.includes(role.title))
      );
    }

    // // Filter by employees
    // if (filters.employees.length > 0) {
    //   filteredData = filteredData.filter((job) =>
    //     filters.employees.some((employee) =>
    //       job?.companyName?.includes(employee.title)
    //     )
    //   );
    // }

    // Filter by salary
    if (filters.salary.length > 0) {
      filteredData = filteredData.filter((job) =>
        filters.salary.some(
          (salary) =>
            job?.minJdSalary >= salary.value && job?.maxJdSalary <= salary.value
        )
      );
    }

    // Filter by experience
    if (filters.experience.length > 0) {
      filteredData = filteredData.filter((job) =>
        filters.experience.some((exp) => job?.minExp >= exp.value)
      );
    }

    // Filter by jobType
    if (filters.jobType.length > 0) {
      filteredData = filteredData.filter((job) =>
        filters.jobType.some((type) => job?.jobType?.includes(type.title))
      );
    }

    setData(filteredData);
  }, [initialData, filters]);

  const updateFilters = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  return { data, filters, updateFilters };
};

export default useFilteredData;
