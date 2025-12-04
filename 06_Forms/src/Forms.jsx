import { useState } from "react";

export default function Forms() {

  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: ""
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    setFormData((currData) => {
      return {...currData, [fieldName]: fieldValue};
    });
  };


  return (
  <>
    <form >
      <label htmlFor="fullName">Full Name:</label> &nbsp;
      <input name="fullName" type="text" placeholder="demo" value={formData.fullName} onChange={handleInputChange} id="fullName"/> &nbsp;
<br />
      <label htmlFor="username">Username:</label> &nbsp;
      <input name="username" type="text" placeholder="demo" value={formData.username} onChange={handleInputChange} id="username"/> &nbsp;
<br />
      <label htmlFor="username">Password:</label> &nbsp;
      <input name="password" type="password" placeholder="Enter Password" value={formData.password} onChange={handleInputChange} id="password"/>
<br /><br />
      <button >Submit</button>
    </form>
  </>);
}