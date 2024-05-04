import { Box, Grid } from "@mui/material";
import "./App.css";
import JobCard from "./components/JobCard";

function App() {
  return (
    <Box margin={2}>
      <Grid container spacing={4}>
        {[...Array(17)].map((_, index) => (
          <JobCard />
        ))}
      </Grid>
    </Box>
  );
}

export default App;
