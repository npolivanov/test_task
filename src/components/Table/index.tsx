import React, { useEffect } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { WIDTH_CONTENT, PropsState, PropsUsers } from "api/consts";
import { connect } from "react-redux";
import { actions as actionsUsers } from "reducer/users";

const TableComponent = (props: any) => {
  useEffect(() => {
    console.log(1);
  }, [props.users]);
  console.log(props.users);
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
                <TableCell align={"center"}>Пол</TableCell>
                <TableCell align={"center"}>город</TableCell>
                <TableCell align={"center"}></TableCell>
                <TableCell align={"center"}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.users.map((item: any, i: number) => (
                <TableRow hover role="checkbox" key={i} tabIndex={-1}>
                  <TableCell align={"center"}>1</TableCell>
                  <TableCell align={"center"}>1</TableCell>
                  <TableCell align={"center"}>1</TableCell>
                  <TableCell align={"center"}>1</TableCell>
                  <TableCell align={"center"}>1</TableCell>
                  <TableCell align={"center"}>1</TableCell>
                  <TableCell align={"center"}>1</TableCell>
                  <TableCell align={"center"}>
                    <IconButton color="primary" component="span">
                      <EditIcon fontSize={"small"} />
                    </IconButton>
                  </TableCell>
                  <TableCell align={"center"}>
                    <IconButton color="primary" component="span">
                      <DeleteForeverIcon fontSize={"small"} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  width: ${WIDTH_CONTENT};
`;

const mapStateToProps = (state: PropsState) => {
  return {
    users: state.users.users,
  };
};

const action = {
  setUser: actionsUsers.setUser,
};
export default connect(mapStateToProps, action)(TableComponent);
