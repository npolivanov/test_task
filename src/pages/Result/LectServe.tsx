import React, { useEffect, useState } from "react";
import request from "api/request";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const LectServe = () => {
  const [date, setDate] = useState<any>(false);
  useEffect(() => {
    request("https://www.lectserve.com/today").then((res: any) => {
      setDate(res);
    });
  }, []);
  return (
    <Wrapper>
      {!date && "Loading..."}

      {date && (
        <>
          <Typography variant="h2" component="h2" gutterBottom>
            {date.daily.day}
          </Typography>
          <div>Дата - {date.daily.date_pretty}</div>
          <div>Неделя - {date.daily.week}</div>
          <Typography variant="h4" component="h2" gutterBottom>
            Чтение
          </Typography>
          <div>
            Вечер - {date.daily.readings.evening.first}
            {date.daily.readings.evening.second}
          </div>
          <div>
            Утро - {date.daily.readings.morning.first}
            {date.daily.readings.morning.second}
          </div>

          <Typography variant="h2" component="h2" gutterBottom>
            {date.sunday.day}
          </Typography>
          <div>Дата - {date.sunday.date_pretty}</div>
          <div>Лекция - {date.sunday.lectionary}</div>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  margin: auto;
`;
export default LectServe;
