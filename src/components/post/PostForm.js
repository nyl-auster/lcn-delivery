import React from "react";

const TitleField = ({ value, handleInputChange }) => {
  return (
    <div className="field">
      <label className="label">Titre</label>
      <div className="control">
        <input
          name="title"
          onChange={handleInputChange}
          value={value}
          className="input"
          type="text"
          placeholder="Text input"
        />
      </div>
    </div>
  );
};

const BodyField = ({ value, handleInputChange }) => (
  <div className="field">
    <label className="label">Contenu</label>
    <div className="control">
      <textarea
        name="content"
        onChange={handleInputChange}
        rows="10"
        className="textarea"
        value={value}
        placeholder="Text input"
      />
    </div>
  </div>
);

const SubmitButton = () => (
  <input className="button" type="submit" value="soumettre" />
);

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.createPost({
      variables: {
        title: this.state.title,
        content: this.state.content
      }
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <TitleField
            handleInputChange={this.handleInputChange}
            value={this.state.title}
          />
          <BodyField
            handleInputChange={this.handleInputChange}
            value={this.state.content}
          />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default PostForm;
