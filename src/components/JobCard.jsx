import React, { useState } from "react";
import {
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  Chip,
  Paper,
} from "@mui/material";
import logo from "../assets/logo.png";

const JobCard = ({ job }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper
        elevation={1}
        sx={{
          paddingBlock: 2,
          borderRadius: 4,
          transition: " transform 0.3s ease-in-out",
          "&:hover": {
            cursor: "pointer",
            transform: "scale(1.03)",
          },
        }}
      >
        <Chip
          label="⏳ Posted 19 days ago"
          variant="outlined"
          size="small"
          sx={{ marginLeft: 2 }}
        />
        <CardHeader
          title={
            <Typography
              variant="caption"
              color="grey"
              fontWeight="600"
              sx={{ color: "#8b8b8b", fontSize: "13px", letterSpacing: "1px" }}
            >
              {job?.companyName || "Weekday"}
            </Typography>
          }
          subheader={
            <Box>
              <Typography
                variant="body1"
                sx={{
                  textTransform: "capitalize",
                  color: "black",
                  fontWeight: 400,
                }}
              >
                {job?.jobRole} Engineer
              </Typography>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  marginTop: "5px",
                  color: "black",
                  fontWeight: 500,
                  fontSize: "11px",
                }}
              >
                {job?.location || ""}
              </Typography>
            </Box>
          }
          avatar={
            <CardMedia
              component="img"
              sx={{
                width: 54,
                height: 49,
                objectFit: "contain",
                marginBottom: 1,
              }}
              image={job?.logoUrl || logo}
              alt="logo"
            />
          }
        />

        <CardContent>
          <Box mt={-2}>
            <Typography variant="body1">
              Estimated Salary: {job?.minJdSalary && `₹${job.minJdSalary} - `}
              {job?.maxJdSalary} LPA ✅
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="body1">About Company:</Typography>
            <Typography variant="body2">
              <strong>About us</strong>
            </Typography>
            <Box
              sx={{
                maskImage: showMore
                  ? "none"
                  : "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
              }}
            >
              <Typography variant="body1" sx={{ mt: 0.5 }}>
                {job?.jobDetailsFromCompany
                  ? showMore
                    ? job?.jobDetailsFromCompany
                    : `${job?.jobDetailsFromCompany?.slice(0, 400)}...`
                  : ""}
              </Typography>
            </Box>

            <Box
              sx={{
                position: "relative",
                bottom: "20px",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "primary.main",
                  cursor: "pointer",
                }}
                onClick={() => setShowMore((prev) => !prev)}
              >
                {showMore ? "Show Less" : "Show More"}
              </Typography>
            </Box>
            {/* <Typography variant="body2">
              {job?.jobDetailsFromCompany ||
                "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment."}
            </Typography> */}
          </Box>
          <Box mt={2}>
            <Typography variant="body2">Minimum Experience</Typography>
            <Typography variant="body2">{job?.minExp || "0"} years</Typography>
          </Box>
        </CardContent>
        <Box sx={{ textAlign: "center", marginBottom: 1, paddingX: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none",
              marginBlock: 1,
              backgroundColor: "#55efc4",
              color: "#000",
              borderRadius: 2,
            }}
          >
            ⚡ Easy Apply
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none",
              backgroundColor: "#4843da",
              color: "#fff",
              borderRadius: 2,
            }}
          >
            Ask for referral
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default JobCard;
