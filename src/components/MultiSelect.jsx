import { TextField, Autocomplete, Grid } from "@mui/material";

const MultiSelect = ({ options, placeholder, value, onChange }) => {
  return (
    <Grid item xs={12} md={4} lg={3} marginBlock={2}>
      <Autocomplete
        multiple
        options={options}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        fullWidth
        value={value}
        onChange={(event, newValue) => onChange(newValue)}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.title}
          </li>
        )}
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
