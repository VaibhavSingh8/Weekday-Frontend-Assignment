import React from "react";
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

const JobCard = () => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper elevation={1} sx={{ paddingBlock: 2, borderRadius: 4 }}>
        <Chip
          label="⏳ Posted 19 days ago"
          variant="outlined"
          size="small"
          sx={{ marginLeft: 2 }}
        />
        <CardHeader
          title="Weeekday"
          //subheader="Frontend Engineer"
          subheader={
            <Box>
              <Typography variant="body2">Frontend Engineer</Typography>
              <Typography variant="body2" color="textSecondary">
                India
              </Typography>
            </Box>
          }
          avatar={
            <CardMedia
              component="img"
              sx={{ width: 52, height: 54, objectFit: "contain" }}
              image={logo}
              alt="logo"
            />
          }
        />

        <CardContent>
          <Box mt={-2}>
            <Typography variant="body1">
              Estimated Salary: ₹40 - 60 LPA ✅
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="body1">About Company:</Typography>
            <Typography variant="body2">
              <strong>About us</strong>
            </Typography>
            <Typography variant="body2">
              At Pinch, our dream is to transform the home ecosystem around
              families...
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="body2">Experience: 3+ years</Typography>
            <Typography variant="body2">Location: Remote</Typography>
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
