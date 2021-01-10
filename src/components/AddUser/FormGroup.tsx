import "date-fns";
import React, { useState } from "react";
import styled from "styled-components";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { media } from "api/consts";

const FormGroup = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2000-05-02")
  );
  const [value, setValue] = React.useState("male");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <Form>
      <Item>
        <TextField
          size="small"
          required
          variant="outlined"
          label="Name"
          defaultValue=""
        />

        <TextField
          size="small"
          required
          variant="outlined"
          label="Lastname"
          defaultValue=""
        />

        <TextareaAutosize
          rowsMin={3}
          aria-label="empty textarea"
          placeholder="About you"
        />
      </Item>
      <Item>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date of Birth"
            inputVariant="outlined"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <TextField
          size="small"
          required
          variant="outlined"
          label="City"
          defaultValue=""
        />
      </Item>
    </Form>
  );
};

const Form = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
  @media only screen and ${media.FormGroup} {
    flex-direction: column;
    & > * {
      padding-bottom: 20px;
    }
  }
`;

export default FormGroup;
