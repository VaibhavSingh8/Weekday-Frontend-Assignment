// import { useState, useEffect } from "react";

// const useFilteredData = (initialData, initialFilters) => {
//   const [data, setData] = useState(initialData);
//   const [filters, setFilters] = useState(initialFilters);

//   useEffect(() => {
//     // Filtering logic
//     let filteredData = initialData;

//     // Filter by roles
//     if (filters.roles.length > 0) {
//       filteredData = filteredData.filter((job) =>
//         filters.roles.some((role) => job?.jobRole?.includes(role.title))
//       );
//     }

//     // Filter by salary
//     if (filters.salary.length > 0) {
//       filteredData = filteredData.filter((job) =>
//         filters.salary.some((salary) => {
//           const salaryValue = salary.title.replace(/[^0-9]/g, "");
//           const salaryInLakhs = parseInt(salaryValue, 10);
//           return (
//             job?.minJdSalary >= salaryInLakhs &&
//             job?.maxJdSalary <= salaryInLakhs
//           );
//         })
//       );
//     }

//     // Filter by experience
//     if (filters.experience.length > 0) {
//       filteredData = filteredData.filter((job) =>
//         filters.experience.some((exp) => {
//           const expValue = exp.title.replace(/[^0-9]/g, "");
//           return job?.minExp >= parseInt(expValue, 10);
//         })
//       );
//     }

//     // Filter by jobType
//     if (filters.jobType.length > 0) {
//       filteredData = filteredData.filter((job) =>
//         filters.jobType.some((type) => job?.jobType?.includes(type.title))
//       );
//     }

//     setData(filteredData);
//   }, [initialData, filters]);

//   const updateFilters = (key, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [key]: value,
//     }));
//   };

//   return { data, filters, updateFilters };
// };

// export default useFilteredData;
