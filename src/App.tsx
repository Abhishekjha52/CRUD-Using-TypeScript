import "./App.css";
import React, { useState } from "react";
import Form from "./Components/Form";
import UserList from "./Components/UserList";
import { v4 as uuidv4 } from "uuid";

interface FormData {
  id: string;
  name: string;
  age: string;
  city: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    name: "",
    age: "",
    city: "",
  });

  const [users, setUsers] = useState<FormData[]>([]);
  const [edit, setEdit] = useState<boolean>(false);
  const [activeInd, setActiveInd] = useState<number | 0>(0);

  const addUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = uuidv4();
    const user = {
      id,
      name: formData.name,
      age: formData.age,
      city: formData.city,
    };

    if (edit) {
      //update user
      users[activeInd] = user;
      setUsers([...users]);
      setEdit(false);
      setActiveInd(0);
    } else {
      //add user
      setUsers([...users, user]);
    }
    setFormData({ id: "",name: "", age: "", city: "" });
  };

  const handleEdit = (index: number) => {
    const user = users[index];
    setFormData(user);
    setEdit(true);
    setActiveInd(index);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newUsers = users.filter((user) => user.id !== id);
      setUsers([...newUsers]);
    }
  };

  return (
    <div>
      <center>
        <h2 className="main-header">React CRUD Operations</h2>
      </center>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
            <Form
              onSubmit={addUser}
              formData={formData}
              setFormData={(e) => {
                const { name, value } = e.target;
                setFormData((prevState) => ({
                  ...prevState,
                  [name]: value,
                }));
              }}
              edit={edit}
            />
          </div>
        </div>
      </div>

      <UserList
        users={users}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};
export default App;
     
