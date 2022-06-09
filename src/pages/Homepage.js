import React from "react";
import { Button, Col, FormControl, InputGroup, Pagination, Row, Table } from "react-bootstrap";
import TableRow from "./TableRow";

function Homepage() {
  return (
    <>
      <Row className="homepage">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <Button variant="dark" size="md" className="b-shadow">
              <i className="bi-plus" /> Add New
            </Button>
            <InputGroup className="mb-3 homepage-search b-shadow">
              <FormControl placeholder="Search" />
              <Button variant="outline-primary">
                <i className="bi-search" />
              </Button>
            </InputGroup>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="b-shadow bg-light p-2 b-radius">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <TableRow></TableRow>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex justify-content-end align-items-center">
            <div className=" mt-2 bg-light p-1 b-shadow b-radius">
              <Pagination className="m-0">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Homepage;
