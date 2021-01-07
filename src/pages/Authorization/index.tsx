import React from "react";
import Header from "components/Header";
import Forms from "components/Forms";

const Authorization = () => {
  return (
    <div>
      <Header />
      <Forms
        onLogin={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value);
        }}
        onPassword={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
};

export default Authorization;
