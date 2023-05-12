import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import FileBase from "react-file-base64";
import { updateUser, createUser } from "../api";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Create({ isCreate, setisCreate, setId, Id, userData, setuserData }) {
  const clear = () => {
    setuserData({
      firstName: "",
      lastName: "",
      Avatar: "",
      StudentNumber: "",
    });
    setId(0);
    setisCreate(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Id === 0) {
      createUser(userData);
    } else {
      updateUser(Id, userData);
    }
    clear();
  };

  return (
    <Container fluid="md">
      {isCreate ? (
        <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Creating a user
        </h1>
      ) : (
        <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Editing a user
        </h1>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>firstName</Form.Label>
          <Form.Control
            type="text"
            placeholder="firstName"
            value={userData.firstName}
            onChange={(e) =>
              setuserData({ ...userData, firstName: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>lastName</Form.Label>
          <Form.Control
            type="text"
            placeholder="lastName"
            value={userData.lastName}
            onChange={(e) =>
              setuserData({ ...userData, lastName: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Avatar</Form.Label>
          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setuserData({ ...userData, Avatar: base64 })
              }
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>StudentNumber</Form.Label>
          <Form.Control
            type="text"
            placeholder="StudentNumber"
            value={userData.StudentNumber}
            onChange={(e) =>
              setuserData({ ...userData, StudentNumber: e.target.value })
            }
          />
        </Form.Group>
        <Container fluid>
          <Row>
            <Col xs={6} className="justify-content-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Container>
  );
}

export default Create;
