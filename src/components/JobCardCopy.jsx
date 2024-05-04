import { Typography, Chip, Paper, Grid, Avatar, Button } from "@mui/material";
import logo from "../assets/logo.png";
import BoltIcon from "@mui/icons-material/Bolt";

const JobCardCopy = ({ jobData }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <Chip label="Posted 10 days ago" variant="outlined" size="small" />
        </Grid>
        <Grid
          container
          marginBlock={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Grid item xs={1}>
            <Avatar src={logo} alt="company logo" />
          </Grid>
          <Grid item xs={11} paddingLeft={2}>
            <Typography variant="caption" color="grey">
              Company Name
            </Typography>
            <Typography variant="subtitle2">Estimated Salaary</Typography>
          </Grid>
          <Grid item xs={11} paddingLeft={2}>
            <Typography variant="caption">Bangalore</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            mt={1}
            variant="body"
            sx={{ color: "grey", fontSize: 16 }}
          >
            Estimated Salary: &#x20B9; &#x2705;
          </Typography>
        </Grid>
        <Grid container>
          <Grid item>
            <Typography
              mt={1}
              variant="body2"
              sx={{ fontSize: 16, fontWeight: 500 }}
            >
              About Company:
            </Typography>

            <Typography
              mt={0.2}
              variant="body2"
              sx={{ fontSize: 14, fontWeight: 700 }}
            >
              About us
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Typography variant="body2" color="textSecondary" component="p">
              This is a sample job and you must have displayed it to understand
              that its not just some random lorem ipsum text but something which
              was manually written. Oh well, if random text is what you were
              looking for then here it is: Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages and now in this
              assignment... .
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="caption">Minimum Experience</Typography>
          </Grid>
          <Typography variant="caption">2 years</Typography>
          <Button
            startIcon={<BoltIcon sx={{ color: "yellow" }} />}
            sx={{ marginBlock: 1, backgroundColor: "teal" }}
            variant="contained"
            fullWidth
          >
            Easy Apply
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "indigo" }}
          >
            Unlock referral
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JobCardCopy;
