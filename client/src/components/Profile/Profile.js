import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <div className="d-flex align-items-center">
                  <img
                    src={user.picture}
                    alt="Profile"
                    className="rounded-circle me-3"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <h2 className="mb-0">{user.name}</h2>
                </div>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <tbody>
                    {Object.entries(user).map(([key, value]) => (
                      <tr key={key}>
                        <th scope="row" className="text-capitalize">
                          {key.replace(/_/g, " ")}
                        </th>
                        <td>
                          {typeof value === "object"
                            ? JSON.stringify(value)
                            : String(value)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
