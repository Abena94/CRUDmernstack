import React from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { Archive, PlusCircle } from "react-bootstrap-icons";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { deleteUser } from "../api";

export default function Display({ setisCreate,isCreate,setId, users, setuserData }) {
  const getValues = (id) => {
    const user = users.find((person) => person._id === id);
    setuserData({
      firstName: user.firstName,
      lastName: user.lastName,
      Avatar: user.Avatar,
      StudentNumber: user.StudentNumber,
    });
    setId(id);
    setisCreate(false);
  };

  return (
    <Container className="mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Student Number</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td style={{ textAlign: "center" }}>
                <Image
                  fluid
                  roundedCircle
                  src={user.Avatar}
                  style={{ width: "3rem", height: "3rem" }}
                  alt="test"
                />
              </td>
              <td style={{ textAlign: "center" }}>{user.StudentNumber}</td>
              <td style={{ textAlign: "center" }}>{user.firstName}</td>
              <td style={{ textAlign: "center" }}>{user.lastName}</td>
              <td>
                <Button variant="light" onClick={() => deleteUser(user._id)}>
                  <Archive />
                </Button>
              </td>
              <td>
                <Button variant="light" onClick={() => getValues(user._id)}>
                  <PlusCircle />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
