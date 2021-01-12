import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { PropsCards } from "api/consts";
import styled from "styled-components";

import { Link } from "react-router-dom";

interface IProps {
  card: any;
  children: React.ReactNode;
}

const CardComponent = (props: IProps) => {
  return (
    <Wrapper>
      <Card variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Category: {props.card.Category}
          </Typography>
          {props.children}

          <Typography variant="h5" component="h2">
            {" "}
            {props.card.API}
          </Typography>
          <Typography color="textSecondary">
            Auth: {props.card.Auth.length === 0 ? "no" : "yes"}
            <br />
            HTTPS: {props.card.HTTPS ? "yes" : "no"}
            <br />
            Cors: {props.card.Cors}
            <br />
            Link: {props.card.Link}
          </Typography>
          <hr />
          <Typography variant="body2">{props.card.Description}</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/result/${props.card.API}`} target="_blank">
            Показать
          </Link>
          {/* <Button size="small">Показать результат</Button> */}
        </CardActions>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 450px;
  margin-top: 30px;
  box-sizing: border-box;
`;

export default CardComponent;
