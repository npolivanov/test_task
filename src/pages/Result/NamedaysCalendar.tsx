import React, { useEffect, useState } from "react";
import styled from "styled-components";
import request from "api/request";

const NamedaysCalendar = () => {
  const [date, setDate] = useState<any>(false);
  useEffect(() => {
    request("https://api.abalin.net/today")
      .then((res: any) => {
        console.log(res);
        setDate(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);
  return (
    <Wrapper>
      {date && <h3>Дата - {date.data.dates.day}</h3>}
      {date && (
        <>
          {Object.values(date.data.namedays).map((item: any) => (
            <div>
              <span>{item}</span>
            </div>
          ))}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  margin: auto;
`;

export default NamedaysCalendar;
