import React, { FunctionComponent } from "react";
import { Controller, Control } from "react-hook-form";

import {
  MenuItem,
  TextField as MuiTextField,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

export type Option = {
  label: string;
  value: string | number;
  image?: string;
  imageChecked?: string;
};

export type FieldProps = {
  name: string;
  type: string;
  label: string;
  disabled?: boolean;
  fullWidth?: boolean;
  defaultValue: string;
  options?: Option[] | [];
  control: Control;
  getValues: Function;
};

const Field: FunctionComponent<FieldProps> = ({
  name,
  type,
  label,
  disabled = false,
  fullWidth = false,
  defaultValue = "",
  options = [],
  control,
  getValues,
}) => {
  switch (type) {
    case "radio":
      return (
        <Grid item xs={12} md={fullWidth ? 12 : 6}>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={(props) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup {...props}>
                  {options.map((option: Option) => (
                    <FormControlLabel
                      value={option.value}
                      label={option.label}
                      disabled={disabled}
                      control={<Radio />}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </Grid>
      );
    case "imageRadio":
      return (
        <Grid item xs={12} md={fullWidth ? 12 : 6}>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={(props) => (
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup {...props}>
                  <Grid container>
                    {options.map((option: Option) => (
                      <Grid item xs={12} sm={6} md={3}>
                        <FormControlLabel
                          value={option.value}
                          label={option.label}
                          labelPlacement="bottom"
                          disabled={disabled}
                          control={
                            <Radio
                              icon={
                                <img
                                  style={{ width: "110px" }}
                                  src={option.image}
                                  alt={option.label}
                                />
                              }
                              checkedIcon={
                                <img
                                  style={{ width: "110px" }}
                                  src={option.imageChecked}
                                  alt={option.label}
                                />
                              }
                            />
                          }
                        />
                      </Grid>
                    ))}
                  </Grid>
                </RadioGroup>
              </FormControl>
            )}
          />
        </Grid>
      );
    case "checkbox":
      return (
        <Grid item xs={12} md={fullWidth ? 12 : 6}>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            type="checkbox"
            render={({ onChange, onBlur, value }) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">{label}</FormLabel>
                <FormGroup>
                  {options.map((option: Option) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onBlur={onBlur}
                          onChange={(e) => onChange(e.target.checked)}
                          checked={value}
                        />
                      }
                      label={option.label}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            )}
          />
        </Grid>
      );
    default:
      const isSelect: boolean = type === "select";
      return (
        <Grid item xs={12} md={fullWidth ? 12 : 6}>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={(props) => (
              <MuiTextField
                {...props}
                type={type}
                // variant="outlined"
                select={isSelect}
                label={label}
                disabled={disabled}
                fullWidth
              >
                {isSelect &&
                  options.map((option: Option) => (
                    <MenuItem key={`${option.value}`} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
              </MuiTextField>
            )}
          />
        </Grid>
      );
  }
};

export default Field;
