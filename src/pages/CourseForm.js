import React from "react";
import DatePicker from "react-mobile-datepicker";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

class DatePickerField extends React.Component {
  state = {
    time: new Date(),
    isOpen: false
  };

  handleClick = () => {
    this.setState({ isOpen: true });
  };

  handleCancel = () => {
    this.setState({ isOpen: false });
  };

  handleSelect = time => {
    this.setState({ time, isOpen: false });
  };

  render() {
    return (
      <div className="App">
        <a className="select-btn" onClick={this.handleClick}>
          Select date
        </a>
        <DatePicker
          dateFormat={["DD", "MM", "YYYY", "hh H", "mm min"]}
          value={this.state.time}
          isOpen={this.state.isOpen}
          onSelect={this.handleSelect}
          onCancel={this.handleCancel}
        />
      </div>
    );
  }
}

const SubmitButton = () => {
  return (
    <div className="field">
      <div className="control">
        <button className="button" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

class CourseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "Place du Bouffay, Nantes, France" };
    this.onChange = address => this.setState({ address });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <DatePickerField />
          <PlacesAutocomplete inputProps={inputProps} />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default CourseForm;
