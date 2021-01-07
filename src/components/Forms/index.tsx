import React from "react";
import styled from "styled-components";
import Card from "./Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

interface PropsError {
  login: boolean;
  password: boolean;
}

interface Props {
  onLogin: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onPassword: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  login: String;
  password: String;
  errors: PropsError;
}

const Forms = (props: Props) => {
  return (
    <Wrapper>
      <Card title="Авторизация">
        <Form>
          <InputBlock>
            <TextField
              value={props.login}
              onChange={props.onLogin}
              id="login"
              label="Login"
              error={props.errors.login}
              helperText={props.errors.login && "Incorrect login"}
              onKeyPress={(e) => {
                if (e.code === "Enter") {
                  props.onSend();
                }
              }}
            />
          </InputBlock>
          <InputBlock>
            <TextField
              value={props.password}
              onChange={props.onPassword}
              id="password"
              label="Password"
              type="password"
              error={props.errors.password}
              helperText={props.errors.password && "Incorrect password"}
              onKeyPress={(e) => {
                if (e.code === "Enter") {
                  props.onSend();
                }
              }}
            />
          </InputBlock>
          <ButtonBlock>
            <Button
              onClick={props.onSend}
              variant="contained"
              color="secondary">
              Войти <ExitToAppIcon fontSize="small" />
            </Button>
          </ButtonBlock>
        </Form>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputBlock = styled.div`
  padding-bottom: 20px;
`;

const ButtonBlock = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export default Forms;
