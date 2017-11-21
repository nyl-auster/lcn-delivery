import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

class deliveryForm extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      form: {
        address: {
          value: ""
        },
        requested_pickup_time: {
          error: "",
          value: `${date.getHours()}:${(date.getMinutes() < 10 ? "0" : "") +
            date.getMinutes()}`
        },
        requested_drop_time: {
          error: "",
          value: `${date.getHours()}:${(date.getMinutes() < 10 ? "0" : "") +
            date.getMinutes()}`
        }
      }
    };
  }
  handleHourChange = event => {
    const newState = { ...this.state };
    let { name, value } = event.target;
    newState.form[name].error = "";
    newState.form[name].value = value;
    this.setState(newState);
  };
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
  handlePlacesAutocompleteChange = address => {
    const newState = { ...this.state };
    newState.form.address.value = address;
    this.setState(newState);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <div className="control">
              <label className="label">Lieu de récupération</label>
              <PlacesAutocomplete
                classNames={{
                  input: "input is-large"
                }}
                inputProps={{
                  onChange: this.handlePlacesAutocompleteChange,
                  value: this.state.form.address.value
                }}
                options={{
                  componentRestrictions: { country: ["fr"] }
                }}
              />
            </div>
          </div>
          <HourField
            field={this.state.form.requested_pickup_time}
            name="requested_pickup_time"
            handleChange={this.handleHourChange}
          />
          <div className="field">
            <div className="control">
              <label className="label">Lieu de livraison</label>
              <PlacesAutocomplete
                classNames={{
                  input: "input is-large"
                }}
                inputProps={{
                  onChange: this.handlePlacesAutocompleteChange,
                  value: this.state.form.address.value
                }}
              />
            </div>
          </div>
          <HourField
            field={this.state.form.requested_drop_time}
            name="requested_drop_time"
            handleChange={this.handleHourChange}
          />
        </form>
      </div>
    );
  }
}

const HourField = ({ field, handleChange, name }) => {
  return (
    <div className="field">
      <label className="label">
        Heure au format <em>09:00</em>
      </label>
      <div className="control">
        <input
          className="input is-large"
          name={name}
          onChange={handleChange}
          value={field.value}
          type="text"
          maxLength={5}
          step="1"
          min="0"
          max="24"
        />
      </div>
      {field.error && <p class="help is-danger">{field.error}</p>}
    </div>
  );
};

const SubmitButton = () => (
  <input className="button is-info" type="submit" value="soumettre" />
);

export default deliveryForm;
