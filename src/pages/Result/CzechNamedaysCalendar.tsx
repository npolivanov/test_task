import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import request from "api/request";

const CzechNamedaysCalendar = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [dateArr, setDateArr] = useState<any>([]);

  const setDate = async () => {
    let date: any = [];
    for (let i = 1; i <= 9; i++) {
      await request(`https://svatky.adresa.info/json?date=0${i}01`).then(
        (res: any) => {
          date.push(res);
        }
      );
    }

    console.log(date);
    setDateArr(date);
  };
  useEffect(() => {
    setDate();
  }, []);
  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Wrapper>
      {dateArr.length === 0 && "Loading..."}
      {dateArr.map((item: any, i: number) => {
        return (
          <Accordion
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography>{item[0].date} - Дата</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item[0].name}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  margin: auto;
`;

export default CzechNamedaysCalendar;
