import React, { useState } from "react";
import styled from "styled-components";
import { WIDTH_CONTENT, PropsUsers, PropsState, media } from "api/consts";
import { actions as actionsUsers } from "reducer/users";
import FormGroup from "./FormGroup";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { setupMaster } from "cluster";

interface PropsErrors {
  name: boolean;
  lastname: boolean;
  city: boolean;
}

interface Props {
  setUser: (user: PropsUsers) => void;
  users: Array<PropsUsers>;
}

const AddUser = (props: Props) => {
  const [name, setName] = useState<String>("");
  const [lastname, setLastname] = useState<String>("");
  const [gender, setGender] = useState("male");
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

  const notifyError = () =>
    toast.error("Incorrect user", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const notifySuccess = () =>
    toast.success("User added successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value);
  };

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

  const addUser = () => {
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
    if (valid === undefined) {
      props.setUser({
        name: name,
        lastname: lastname,
        aboutyou: aboutyou,
        date: selectedDate,
        gender: gender,
        city: city,
      });
      setTimeout(() => {
        setName("");
        setLastname("");
        setAboutyou("");
        setCity("");
      });

      notifySuccess();
    } else {
      notifyError();
    }
    setErrors(errorsObject);
  };

  return (
    <Wrapper>
      <Content>
        <FormGroup
          name={name}
          setName={onSetName}
          lastname={lastname}
          setLastname={onSetLastame}
          city={city}
          setCity={onSetCity}
          gender={gender}
          handleDateChange={handleDateChange}
          handleChangeGender={handleChangeGender}
          selectedDate={selectedDate}
          aboutyou={aboutyou}
          onSetAboutyou={onSetAboutyou}
          errors={errors}
          addUser={addUser}
        />
      </Content>
      <ToastContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${WIDTH_CONTENT};
  margin: 20px auto;
  box-sizing: border-box;
  height: auto;
  @media only screen and ${media.AddUser} {
    width: 100%;
    margin-top: 0px;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 10px;
  height: auto;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-end;
  background-color: white;
`;
const mapStateToProps = (state: PropsState) => {
  return {
    users: state.users.users,
  };
};

const action = {
  setUser: actionsUsers.setUser,
};
export default connect(mapStateToProps, action)(AddUser);
