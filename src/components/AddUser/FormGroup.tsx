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
import Button from "@material-ui/core/Button";
import { media } from "api/consts";

interface PropsErrors {
  name: boolean;
  lastname: boolean;
  city: boolean;
}

interface Props {
  name: String;
  setName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  lastname: String;
  setLastname: (lastname: React.ChangeEvent<HTMLInputElement>) => void;
  gender: String;
  handleChangeGender: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedDate: Date | null;
  handleDateChange: (selectedDate: Date | null) => void;
  city: String;
  setCity: (city: React.ChangeEvent<HTMLInputElement>) => void;
  aboutyou: string | number | readonly string[] | undefined;
  onSetAboutyou: (aboutyou: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errors: PropsErrors;
  addUser: () => void;
}

const FormGroup = (props: Props) => {
  return (
    <Form>
      <Item>
        <TextField
          size="small"
          required
          variant="outlined"
          label="Name"
          value={props.name}
          onChange={props.setName}
          error={props.errors.name}
        />

        <TextField
          size="small"
          required
          variant="outlined"
          label="Lastname"
          value={props.lastname}
          onChange={props.setLastname}
          error={props.errors.lastname}
        />

        <TextareaAutosize
          rowsMin={3}
          aria-label="empty textarea"
          placeholder="About you"
          value={props.aboutyou}
          onChange={props.onSetAboutyou}
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
            value={props.selectedDate}
            onChange={props.handleDateChange}
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
            value={props.gender}
            onChange={props.handleChangeGender}>
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
          error={props.errors.city}
          value={props.city}
          onChange={props.setCity}
        />
      </Item>
      <Item>
        <Button variant="contained" color="primary" onClick={props.addUser}>
          + ADD
        </Button>
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
