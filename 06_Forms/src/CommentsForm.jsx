import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState(
    {
      username: '',
      comment: '',
      rating: ''
    }
  );

  let handleInputChange = (e) => {

    setFormData((currData) => {
      let Name = e.target.name;
      let value = e.target.value;
      return { ...currData, [Name]: value };
    });
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({
      username: '',
      comment: '',
      rating: ''
    });
  }

  return (
    <>
      <h2>Give a Comment:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label> &nbsp;
        <input type="text" id="username" name="username" placeholder="username" value={formData.username} onChange={handleInputChange} />
        <br /><br />
        <label htmlFor="comment">Comment:</label> &nbsp;
        <textarea value={formData.comment} id="comment" name="comment" placeholder="Remarks" onChange={handleInputChange}></textarea>
        <br /><br />
        <label htmlFor="rating">Rating:</label> &nbsp;
        <input value={formData.rating} type="number" name="rating" id="rating" placeholder="Rating" min={1} max={10} onChange={handleInputChange}/>
        <br /><br />
        <button type="submit">Add a Comment</button>
      </form>
    </>
  );
};