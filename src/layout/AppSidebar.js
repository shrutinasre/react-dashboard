import React from "react";
import { Dropdown, ListGroup } from "react-bootstrap";

function AppSidebar({ toggleSidebar }) {
  return (
    <>
      <div className={"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar " + (toggleSidebar ? "hide" : "")}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none py-2">
          <i className="bi-bootstrap fs-4 me-3" />
          <span className="fs-4">LOGO</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              <i className="bi-house-door-fill fs-6 me-2" />
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="bi-speedometer2 fs-6 me-2" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="bi-box2-fill fs-6 me-2" />
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="bi-boxes fs-6 me-2" />
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="bi-person-circle fs-6 me-2" />
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <Dropdown>
          {/* <Dropdown.Toggle as={customA}>Shruti Nasre</Dropdown.Toggle> */}
          <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ width: "100%", textAlign: "left" }}>
            <img src="assets/userImg.jpg" alt="" width="32" height="32" class="rounded-circle me-2" /> Shruti Nasre
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <ListGroup>
              <ListGroup.Item className="d-flex">
                <span className="me-auto">
                  <i class="bi bi-bell me-2"></i>
                  Updates
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <span className="me-auto">
                  <i class="bi bi-envelope me-2"></i>
                  Messages
                </span>
                <span class="badge bg-info ms-2 ">42</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <span className="me-auto">
                  <i class="bi bi-list-task me-2"></i>
                  Tasks
                </span>
                <span class="badge bg-primary ms-2">10</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <span className="me-auto">
                  {" "}
                  <i class="bi bi-chat-right-heart me-2"></i>
                  Comments
                </span>
                <span class="badge bg-warning ms-2">03</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <span className="me-auto">
                  {" "}
                  <i class="bi bi-person me-2"></i>
                  Profile
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <span className="me-auto">
                  <i class="bi bi-gear me-2"></i>
                  Setting
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <span className="me-auto">
                  <i class="bi bi-lock-fill me-2"></i>
                  Logout
                </span>
              </ListGroup.Item>
            </ListGroup>

            {/* <Dropdown.Item href="#">
              <i class="bi bi-bell"></i>
              Updates <span class="badge bg-info ms-2">42</span>
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <i class="bi bi-envelope"></i>
              Messages<span class="badge bg-info ms-2">42</span>
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <i class="bi bi-list-task"></i>
              Tasks<span class="badge bg-info ms-2">42</span>
            </Dropdown.Item>
            <i class="bi bi-chat-square-dots"></i>
            <Dropdown.Item href="#">
              
            </Dropdown.Item>
            <Dropdown.Item href="#">
              
            </Dropdown.Item>
            <Dropdown.Item href="#">
              
            </Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default AppSidebar;
