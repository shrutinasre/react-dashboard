import React from "react";
import { userArray } from "../services/userService";

function TableRow() {
  const userList = userArray.map((user, idx) => (
    <tr key={idx}>
      <td>{user.id}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td className="text-center">
        <a className="me-3" href="#">
          <i className="bi-pen-fill" />
        </a>
        <a href="#">
          <i className="bi-trash-fill" />
        </a>
      </td>
    </tr>
  ));
  return <>{userList}</>;
}

export default TableRow;
