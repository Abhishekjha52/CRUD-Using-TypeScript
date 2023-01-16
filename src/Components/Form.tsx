import React from "react";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: {
    name: string;
    age: string;
    city: string;
  };
  setFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  edit: boolean;
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  formData,
  setFormData,
  edit,
}) => {
    return (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={setFormData}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              className="form-control"
              name="age"
              value={formData.age}
              onChange={setFormData}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={setFormData}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {edit ? "Update" : "Add"}
          </button>
        </form>
      );
}
export default Form;