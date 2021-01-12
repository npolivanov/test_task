import React, { useEffect, useState } from "react";
import request from "api/request";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);
const HebrewCalendar = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [items, setItems] = useState([]);

  useEffect(() => {
    request(
      "https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=on&nx=on&year=now&month=x&ss=on&mf=on&c=on&geo=geoname&geonameid=3448439&m=5&s=on&lg=ru"
    ).then((res: any) => {
      console.log(res);
      setItems(res.items);
    });
  }, []);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Wrapper>
      <Paper>
        <TableContainer component={Paper}>
          <Table
            aria-labelledby="tableTitle"
            size={"small"}
            aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Title</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Категория</StyledTableCell>
                <StyledTableCell align="center">иврит</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {items.length > 0 &&
                items.map((item: any, i: number) => (
                  <TableRow key={i} hover role="checkbox" tabIndex={-1}>
                    <TableCell align="center">{item.title}</TableCell>
                    <TableCell align="center">{item.date}</TableCell>
                    <TableCell align="center">{item.category}</TableCell>
                    <TableCell align="center">{item.hebrew}</TableCell>
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
  width: 80%;
  margin: auto;
`;

export default HebrewCalendar;
