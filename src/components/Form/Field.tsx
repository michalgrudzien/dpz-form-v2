import React, { FunctionComponent } from "react";
import { Controller, Control } from "react-hook-form";
import styled from "styled-components";

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
  FormHelperText,
  SvgIcon,
} from "@material-ui/core";

import thinkingIcon from "assets/images/thinking_icon.svg";

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
  error: any;
};

const ErrorIcon = styled(({ className }) => (
  <img className={className} src={thinkingIcon} alt="error" />
))`
  width: 24px;
  ${({ label }) =>
    label &&
    `position: relative;
  top: 5px;
  left: 2px;`}
`;

const Field: FunctionComponent<FieldProps> = ({
  name,
  type,
  label,
  disabled = false,
  fullWidth = false,
  defaultValue = "",
  options = [],
  control,
  error,
}) => {
  switch (type) {
    case "radio":
      return (
        <Grid item xs={12} sm={fullWidth ? 12 : 6}>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={(props) => (
              <FormControl error={!!error} component="fieldset">
                <FormLabel component="legend">
                  {label}
                  {!!error && <ErrorIcon label />}
                </FormLabel>
                <RadioGroup {...props}>
                  {options.map((option: Option) => (
                    <FormControlLabel
                      value={option.value}
                      label={option.label}
                      disabled={disabled}
                      control={<Radio color="default" />}
                    />
                  ))}
                </RadioGroup>
                <FormHelperText>{error?.message}</FormHelperText>
              </FormControl>
            )}
          />
        </Grid>
      );
    case "imageRadio":
      return (
        <Grid item xs={12} sm={fullWidth ? 12 : 6}>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={(props) => (
              <FormControl error={!!error} component="fieldset" fullWidth>
                <FormLabel component="legend">
                  {label}
                  {!!error && <ErrorIcon label />}
                </FormLabel>
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
                <FormHelperText>{error?.message}</FormHelperText>
              </FormControl>
            )}
          />
        </Grid>
      );
    case "checkbox":
      return (
        <Grid item xs={12} sm={fullWidth ? 12 : 6}>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            type="checkbox"
            render={({ onChange, onBlur, value }) => (
              <FormControl error={!!error} component="fieldset">
                <FormLabel component="legend">
                  {label}
                  {!!error && <ErrorIcon label />}
                </FormLabel>
                <FormGroup>
                  {options.map((option: Option) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onBlur={onBlur}
                          onChange={(e) => onChange(e.target.checked)}
                          checked={value}
                          color="default"
                        />
                      }
                      label={option.label}
                    />
                  ))}
                </FormGroup>
                <FormHelperText>{error?.message}</FormHelperText>
              </FormControl>
            )}
          />
        </Grid>
      );
    default:
      const isSelect: boolean = type === "select";
      return (
        <Grid item xs={12} sm={fullWidth ? 12 : 6}>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={(props) => (
              <MuiTextField
                {...props}
                type={type}
                helperText={error?.message}
                error={!!error}
                select={isSelect}
                label={label}
                disabled={disabled}
                fullWidth
                InputProps={{
                  endAdornment: !!error ? <ErrorIcon /> : null,
                }}
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
