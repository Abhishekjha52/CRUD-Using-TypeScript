import React from "react";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: {
    name: string;
    age: number;
    city: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeInd: number | -1;
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  formData,
  onChange,
  activeInd,
}) => {
    return (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label className="font-weight-bold">Name</label><br/>
            <input
              type="text"
              className="form-control form-control-lg"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={onChange}
              required
            />
          </div>
          <br/>
          <div className="form-group">
            <label className="font-weight-bold">Age</label><br/>
            <input
              type="number"
              className="form-control form-control-lg"
              name="age"
              value={formData.age!==0 ? formData.age : ""}
              placeholder="Enter you age"
              onChange={onChange}
              required
            />
          </div>
          <br/>
          <div className="form-group">
            <label className="fonr-weight-bold">City</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="city"
              value={formData.city}
              placeholder="Enter your city"
              onChange={onChange}
              required
            />
          </div>
          <br/>
          <button type="submit" className="btn btn-success btn-lg btn-block">
            {activeInd!==-1 ? "UPDATE" : "ADD"}
          </button>
        </form>
      );
}
export default Form;
