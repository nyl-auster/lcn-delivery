import React from "react";

class PostForm extends React.Component {
  handleFormSubmit = event => {
    event.preventDefault();
    alert("submitted");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <input className="button" type="submit" value="soumettre" />
        </form>
      </div>
    );
  }
}

export default PostForm;
