import "./App.css";
import React, { useState } from "react";
import Form from "./Components/Form";
import UserList from "./Components/UserList";
import CreateUserObject from "./Components/CreateUserObject";
import { v4 as uuidv4 } from "uuid";

interface FormData {
  id: string;
  name: string;
  age: number;
  city: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    name: "",
    age: 0,
    city: "",
  });

  const [users, setUsers] = useState<FormData[]>([]);
  const [activeInd, setActiveInd] = useState<number | -1>(-1);

  const addUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(activeInd!==-1){
      updateUser();
    }
    else{
      createUser();
    }
    resetFormData();
  };

  const createUser = () => {
    const user = CreateUserObject(uuidv4(), formData);
    setUsers([...users, user]);
  };

  const updateUser = () => {
    const updatedUser = {...users[activeInd], ...formData};
    const newUsers = [...users];
    newUsers[activeInd] = updatedUser;
    setUsers(newUsers);
    setActiveInd(-1);
  };

  const resetFormData = () => {
    setFormData({id: "", name: "", age: 0, city: "" });
  };

  const handleEdit = (index: number) => {
    const user = users[index];
    setFormData(user);
    setActiveInd(index);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newUsers = users.filter((user) => user.id !== id);
      setUsers([...newUsers]);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
  }

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
              onChange={onChange}
              activeInd={activeInd}
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
