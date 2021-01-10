import React from "react";
import styled from "styled-components";
import { WIDTH_CONTENT } from "api/consts";
import Button from "@material-ui/core/Button";
import FormGroup from "./FormGroup";

const AddUser = () => {
  return (
    <Wrapper>
      <Content>
        <FormGroup />

        <div>
          <Button variant="contained" color="primary">
            + ADD
          </Button>
        </div>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${WIDTH_CONTENT};
  margin: 20px auto;
  height: auto;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: white;
`;

export default AddUser;
