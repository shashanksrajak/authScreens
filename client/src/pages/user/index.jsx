import React from "react";
import Card from "../../components/card";

const User = ({ user }) => {
  return (
    <div className="center">
      <Card>
        <h2>Hi, {user.firstName}!</h2>
        <h2>Here are your personal details</h2>
        <div style={{ marginBottom: "10px" }}></div>
        <h3>{`${user.firstName} ${user.lastName} `}</h3>
        <h3>{user.email}</h3>
      </Card>
    </div>
  );
};

export default User;
