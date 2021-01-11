import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { WIDTH_CONTENT, PropsState, PropsUsers, media } from "api/consts";
import { connect } from "react-redux";
import { actions as actionsUsers } from "reducer/users";
import { ToastContainer, toast } from "react-toastify";
import Row from "./Row";
const TableComponent = (props: any) => {
  const [edit, setEdit] = useState(false);
  const notifySuccess = (message: String) =>
    toast.success(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const notifyError = (message: String) =>
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const deleteItem = (id: number | undefined) => {
    props.deleteUser(id);
    notifySuccess("Delete success");
  };

  const onEditUser = (user: PropsUsers) => {
    props.editUser(user);
    notifySuccess("Edit success");
  };

  return (
    <Wrapper>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align={"center"}>№</TableCell>
                <TableCell align={"center"}>Имя</TableCell>
                <TableCell align={"center"}>Фамилия</TableCell>
                <TableCell align={"center"}>О себе</TableCell>
                <TableCell align={"center"}>Дата рождения</TableCell>
                <TableCell align={"center"}>пол</TableCell>
                <TableCell align={"center"}>город</TableCell>
                <TableCell align={"center"}></TableCell>
                <TableCell align={"center"}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.users.map((item: PropsUsers, i: number) => (
                <Row
                  onEditUser={onEditUser}
                  deleteItem={deleteItem}
                  onError={() => notifyError("Incorrect user")}
                  i={i}
                  item={item}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <ToastContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  width: ${WIDTH_CONTENT};
  @media only screen and ${media.AddUser} {
    width: 100%;
    margin-top: 0px;
  }
`;

const mapStateToProps = (state: PropsState) => {
  return {
    users: state.users.users,
  };
};

const action = {
  setUser: actionsUsers.setUser,
  deleteUser: actionsUsers.deleteUser,
  editUser: actionsUsers.editUser,
};
export default connect(mapStateToProps, action)(TableComponent);
