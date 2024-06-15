import { IoAdd } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { CiTrash } from "react-icons/ci";
import usersData from "../utils/users.json";
import { Link } from "react-router-dom";

const { users } = usersData;

export default function Home() {
  return (
    <div>
      <div className="d-flex justify-content-end my-4">
        <Link className="btn btn-info my-2 my-sm-0" to="/create">
          <IoAdd />
          New contact
        </Link>
      </div>

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Adress</th>
            <th scope="col">Phone</th>
            <th scope="col">Company</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>{user.company}</td>
              <td>
                <Link
                  to={`/contacts/${user.id}/edit`}
                  type="button"
                  className="btn btn-sm btn-primary"
                  style={{ marginRight: "5px" }}
                >
                  <GoPencil />
                </Link>
                <Link
                  to={`/contacts/${user.id}/edit`}
                  type="button"
                  className="btn btn-sm btn-danger"
                >
                  <CiTrash />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
