import { TextField, Autocomplete, Grid } from "@mui/material";

const MultiSelect = ({ options, placeholder }) => {
  return (
    <Grid item xs={12} md={4} lg={2.4} marginBlock={2}>
      <Autocomplete
        multiple
        options={options}
        getOptionLabel={(option) => option}
        disableCloseOnSelect
        filterSelectedOptions
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={placeholder}
            size="small"
            placeholder={placeholder}
          />
        )}
      />
    </Grid>
  );
};

export default MultiSelect;
