import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.props
      .createPost({
        variables: {
          title: this.state.title,
          content: this.state.content
        }
      })
      .then(() => {
        // redirect to posts list page after saving
        console.log(this.props.history.push("/posts"));
      });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <TitleField
            handleChange={this.handleChange}
            value={this.state.title}
          />
          <BodyField
            handleChange={this.handleChange}
            value={this.state.content}
          />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

const TitleField = ({ value, handleChange }) => {
  return (
    <div className="field">
      <label className="label">Titre</label>
      <div className="control">
        <input
          name="title"
          onChange={handleChange}
          value={value}
          className="input"
          type="text"
          placeholder="Text input"
        />
      </div>
    </div>
  );
};

const BodyField = ({ value, handleChange }) => (
  <div className="field">
    <label className="label">Contenu</label>
    <div className="control">
      <textarea
        name="content"
        onChange={handleChange}
        rows="10"
        className="textarea"
        value={value}
        placeholder="Text input"
      />
    </div>
  </div>
);

const SubmitButton = () => (
  <input className="button is-info" type="submit" value="soumettre" />
);

export default PostForm;
