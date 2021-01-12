import React, { useEffect } from "react";
import { checkToken } from "api/helpFunction";
import { withRouter } from "react-router-dom";
import Header from "components/Header";
import MenuComponent from "components/Menu";
import AddUser from "components/AddUser";
import Table from "components/Table";

interface Props {
  history: any;
}

const Main = (props: Props) => {
  return (
    <div>
      <Header />
      <MenuComponent />
      <AddUser />
      <Table />
    </div>
  );
};

export default withRouter(Main);
