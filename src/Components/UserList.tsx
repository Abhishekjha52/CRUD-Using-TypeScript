import React from "react";

interface UserListProps {
  users: { id: string; name: string; age: string; city: string }[];
  handleEdit: (index: number) => void;
  handleDelete: (id: string) => void;
}

const UserList: React.FC<UserListProps> = ({
  users,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div>
      {users.map((user, index) => {
        return (
          <div className="box mb-3 d-flex align-items-stretch border border-secondary">
            <div className="box-body">
              <h5 className="box-text">Name : {user.name}</h5>
              <h5 className="box-text">Age : {user.age}</h5>
              <h5 className="box-text">City : {user.city}</h5>
              <div className="d-flex">
                <button
                  className="btn btn-info mr-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
