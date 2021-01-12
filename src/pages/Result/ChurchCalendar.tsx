import React, { useEffect, useState } from "react";
import styled from "styled-components";
import request from "api/request";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

const ChurchCalendar = () => {
  const [today, setToday] = useState<any>(false);
  const [yesterday, setYesterday] = useState<any>(false);
  const [tomorrow, setTomorrow] = useState<any>(false);

  useEffect(() => {
    request(
      "http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today"
    ).then((res: any) => {
      setToday(res);
    });
    request(
      "http://calapi.inadiutorium.cz/api/v0/en/calendars/default/yesterday"
    ).then((res: any) => {
      setYesterday(res);
    });

    request(
      "http://calapi.inadiutorium.cz/api/v0/en/calendars/default/tomorrow"
    ).then((res: any) => {
      setTomorrow(res);
    });
  }, []);
  return (
    <Wrapper>
      <Typography variant="h2" component="h2" gutterBottom>
        Today
      </Typography>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align={"center"}>Date</TableCell>
                <TableCell align={"center"}>Season</TableCell>
                <TableCell align={"center"}>Season week</TableCell>
                <TableCell align={"center"}>Weekday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1} key={"center"}>
                <TableCell align={"center"}>{today && today.date}</TableCell>
                <TableCell align={"center"}>{today && today.season}</TableCell>
                <TableCell align={"center"}>
                  {today && today.season_week}
                </TableCell>
                <TableCell align={"center"}>{today && today.weekday}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Typography variant="h2" component="h2" gutterBottom>
        Yesterday
      </Typography>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align={"center"}>Date</TableCell>
                <TableCell align={"center"}>Season</TableCell>
                <TableCell align={"center"}>Season week</TableCell>
                <TableCell align={"center"}>Weekday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1} key={"center"}>
                <TableCell align={"center"}>
                  {yesterday && yesterday.date}
                </TableCell>
                <TableCell align={"center"}>
                  {yesterday && yesterday.season}
                </TableCell>
                <TableCell align={"center"}>
                  {yesterday && yesterday.season_week}
                </TableCell>
                <TableCell align={"center"}>
                  {yesterday && yesterday.weekday}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Typography variant="h2" component="h2" gutterBottom>
        Tomorrow
      </Typography>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align={"center"}>Date</TableCell>
                <TableCell align={"center"}>Season</TableCell>
                <TableCell align={"center"}>Season week</TableCell>
                <TableCell align={"center"}>Weekday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1} key={"center"}>
                <TableCell align={"center"}>
                  {tomorrow && tomorrow.date}
                </TableCell>
                <TableCell align={"center"}>
                  {tomorrow && tomorrow.season}
                </TableCell>
                <TableCell align={"center"}>
                  {tomorrow && tomorrow.season_week}
                </TableCell>
                <TableCell align={"center"}>
                  {tomorrow && tomorrow.weekday}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  margin: auto;
`;

export default ChurchCalendar;
