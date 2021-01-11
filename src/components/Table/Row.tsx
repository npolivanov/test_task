import React, { useState, useEffect } from "react";
import { PropsUsers } from "api/consts";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CancelIcon from "@material-ui/icons/Cancel";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

interface IProps {
  item: PropsUsers;
  i: number;
  deleteItem: (id: number | undefined) => void;
  onEditUser: (user: PropsUsers) => void;
  onError: () => void;
}
interface PropsErrors {
  name: boolean;
  lastname: boolean;
  city: boolean;
}
const Row = ({ item, i, deleteItem, onEditUser, onError }: IProps) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState<String>("");
  const [lastname, setLastname] = useState<String>("");
  const [gender, setGender] = useState<String>("male");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2000-05-02")
  );
  const [city, setCity] = useState<String>("");
  const [aboutyou, setAboutyou] = useState<
    string | number | readonly string[] | undefined
  >("");

  const [errors, setErrors] = useState<PropsErrors>({
    name: false,
    lastname: false,
    city: false,
  });

  const getWord = (word: any) => {
    if (word !== undefined && typeof word !== "number" && word.length > 15) {
      return word.substr(0, 15) + "...";
    } else {
      return word;
    }
  };

  useEffect(() => {
    setEdit(false);
    setName(item.name);
    setLastname(item.lastname);
    setGender(item.gender);
    setSelectedDate(item.date);
    setCity(item.city);
    setAboutyou(item.aboutyou);
  }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const onSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSetLastame = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };

  const onSetCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const onSetAboutyou = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAboutyou(e.target.value);
  };
  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value);
  };

  const onEdit = () => {
    const errorsObject = { ...errors };
    if (name.length === 0) {
      errorsObject.name = true;
    } else {
      errorsObject.name = false;
    }

    if (lastname.length === 0) {
      errorsObject.lastname = true;
    } else {
      errorsObject.lastname = false;
    }

    if (city.length === 0) {
      errorsObject.city = true;
    } else {
      errorsObject.city = false;
    }
    let valid = Object.values(errorsObject).find((val) => val === true);
    setErrors(errorsObject);
    if (valid === undefined) {
      onEditUser({
        id: item.id,
        name: name,
        lastname: lastname,
        aboutyou: aboutyou,
        date: selectedDate,
        gender: gender,
        city: city,
      });
      setEdit(false);
    } else {
      onError();
    }
  };

  return (
    <>
      {!edit ? (
        <TableRow hover role="checkbox" key={i} tabIndex={-1}>
          <TableCell align={"center"}>{i + 1}</TableCell>
          <TableCell align={"center"}>{getWord(item.name)}</TableCell>
          <TableCell align={"center"}>{getWord(item.lastname)}</TableCell>
          <TableCell align={"center"}>{getWord(item.aboutyou)}</TableCell>
          <TableCell align={"center"}>
            {moment(item.date).format("DD-MM-YYYY")}
          </TableCell>
          <TableCell align={"center"}>{item.gender}</TableCell>
          <TableCell align={"center"}>{getWord(item.city)}</TableCell>
          <TableCell align={"center"}>
            <IconButton
              color="primary"
              component="span"
              onClick={() => setEdit(true)}>
              <EditIcon fontSize={"small"} />
            </IconButton>
          </TableCell>
          <TableCell align={"center"}>
            <IconButton
              color="primary"
              onClick={() => deleteItem(item.id)}
              component="span">
              <DeleteForeverIcon fontSize={"small"} />
            </IconButton>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow hover role="checkbox" key={i} tabIndex={-1}>
          <TableCell align={"center"}>{i + 1}</TableCell>
          <TableCell align={"center"}>
            <TextField
              value={name}
              label="Name"
              type="text"
              size="small"
              required
              variant="outlined"
              onChange={onSetName}
              error={errors.name}
            />
          </TableCell>
          <TableCell align={"center"}>
            <TextField
              value={lastname}
              label="Lastname"
              type="text"
              size="small"
              required
              variant="outlined"
              onChange={onSetLastame}
              error={errors.lastname}
            />
          </TableCell>
          <TableCell align={"center"}>
            <TextareaAutosize
              rowsMin={3}
              aria-label="empty textarea"
              placeholder="About you"
              onChange={onSetAboutyou}
              value={aboutyou}
            />
          </TableCell>
          <TableCell align={"center"}>
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
          </TableCell>
          <TableCell align={"center"}>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={gender}
              onChange={handleChangeGender}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </TableCell>
          <TableCell align={"center"}>
            <TextField
              size="small"
              required
              variant="outlined"
              label="City"
              error={errors.city}
              onChange={onSetCity}
              value={city}
            />
          </TableCell>
          <TableCell align={"center"}>
            <Button variant="contained" color="primary" onClick={onEdit}>
              ok
            </Button>
          </TableCell>
          <TableCell align={"center"}>
            <IconButton
              color="secondary"
              onClick={() => setEdit(false)}
              component="span">
              <CancelIcon fontSize={"small"} />
            </IconButton>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default Row;
