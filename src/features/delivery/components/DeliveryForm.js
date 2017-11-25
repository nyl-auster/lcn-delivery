import React from "react";
import moment from "moment";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import "../DeliveryForm.css";

class deliveryForm extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      form: {
        pickup_date: {
          error: null,
          value: moment().format("YYYY-MM-DD")
        },
        drop_date: {
          error: null,
          value: moment().format("YYYY-MM-DD")
        },
        pickup_address: {
          error: null,
          value: ""
        },
        drop_address: {
          error: null,
          value: ""
        },
        montantHT: {
          error: null,
          value: "0"
        },
        pickup_time: {
          error: null,
          value: moment().format("H:mm")
        },
        drop_time: {
          error: "",
          value: moment().format("H:mm")
        },
        drop_address_phone: {
          error: "",
          value: ""
        },
        drop_address_note: {
          error: "",
          value: ""
        }
      }
    };
  }

  createDelivery() {
    const pickupDateTime = `${this.state.form.pickup_date.value}T${
      this.state.form.pickup_time.value
    }:00.123Z`;
    const dropDateTime = `${this.state.form.drop_date.value}T${
      this.state.form.drop_time.value
    }:00.123Z`;
    const pickupAddress = this.state.form.pickup_address.value;
    const dropAddress = this.state.form.drop_address.value;
    const dropAddressPhone = this.state.form.drop_address_phone.value;
    const dropAddressNote = this.state.form.drop_address_note.value;
    const cargoAmountHt = parseFloat(this.state.form.montantHT.value);
    const variables = {
      pickupDateTime,
      dropDateTime,
      pickupAddress,
      dropAddress,
      cargoAmountHt,
      dropAddressNote,
      dropAddressPhone
    };
    this.props
      .createDelivery({
        variables
      })
      .then(result => {
        this.props.history.push("/deliveries/" + result.data.createDelivery.id);
      });
  }

  handleHourChange = event => {
    const newState = { ...this.state };
    let { name, value } = event.target;
    newState.form[name].error = "";
    newState.form[name].value = value;
    this.setState(newState);
  };

  handleFieldChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const newState = { ...this.state };
    newState.form[name].error = "";
    newState.form[name].value = value;
    this.setState(newState);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.createDelivery();
  };

  handlePlacesAutocompleteChange = (address, name) => {
    const newState = { ...this.state };
    newState.form[name].value = address;
    this.setState(newState);
  };

  render() {
    return (
      <div className="delivery-form">
        <form onSubmit={this.handleFormSubmit}>
          <h2 className="title is-3">Récupération</h2>
          <DateField
            label="Date"
            handleChange={this.handleFieldChange}
            field={this.state.form.pickup_date}
            name="pickup_date"
          />
          <HourField
            field={this.state.form.pickup_time}
            name="pickup_time"
            handleChange={this.handleHourChange}
          />
          <div className="field">
            <div className="control">
              <label className="label">Lieu de récupération</label>
              <PlacesAutocomplete
                classNames={{
                  input: "input is-large"
                }}
                inputProps={{
                  onChange: address =>
                    this.handlePlacesAutocompleteChange(
                      address,
                      "pickup_address"
                    ),
                  value: this.state.form.pickup_address.value
                }}
                options={{
                  componentRestrictions: { country: ["fr"] }
                }}
              />
            </div>
          </div>

          <h2 className="title is-3">Livraison</h2>
          <DateField
            label="Date"
            handleChange={this.handleFieldChange}
            field={this.state.form.pickup_date}
            name="drop_date"
          />
          <HourField
            field={this.state.form.drop_time}
            name="drop_time"
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
                  onChange: address =>
                    this.handlePlacesAutocompleteChange(
                      address,
                      "drop_address"
                    ),
                  value: this.state.form.drop_address.value
                }}
                options={{
                  componentRestrictions: { country: ["fr"] }
                }}
              />
            </div>
          </div>

          <PhoneField
            handleChange={this.handleFieldChange}
            name="drop_address_phone"
            field={this.state.form.drop_address_phone}
          />

          <NoteField
            label="Note"
            handleChange={this.handleFieldChange}
            name="drop_address_note"
            field={this.state.form.drop_address_note}
          />

          <MontantField
            handleChange={this.handleFieldChange}
            name="montantHT"
            field={this.state.form.montantHT}
          />
          <input
            type="submit"
            className="button is-large is-primary"
            value="Envoyer"
          />
        </form>
      </div>
    );
  }
}

const MontantField = ({ field, handleChange, name }) => {
  return (
    <div className="field">
      <label className="label">Montant de la commande HT</label>
      <div className="control">
        <input
          className="input is-large"
          name={name}
          onChange={handleChange}
          value={field.value}
          type="number"
        />
      </div>
      {field.error && <p class="help is-danger">{field.error}</p>}
    </div>
  );
};

const PhoneField = ({ field, handleChange, name }) => {
  return (
    <div className="field">
      <label className="label">Téléphone</label>
      <div className="control">
        <input
          className="input is-large"
          name={name}
          onChange={handleChange}
          value={field.value}
          type="text"
        />
      </div>
      {field.error && <p class="help is-danger">{field.error}</p>}
    </div>
  );
};

const DateField = ({ field, handleChange, name, label }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className="input is-large"
          name={name}
          onChange={handleChange}
          value={field.value}
          type="date"
        />
      </div>
      {field.error && <p class="help is-danger">{field.error}</p>}
    </div>
  );
};

const NoteField = ({ field, handleChange, name, label }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <textarea
          rows={4}
          className="textarea is-large"
          name={name}
          onChange={handleChange}
          value={field.value}
        />
      </div>
      {field.error && <p class="help is-danger">{field.error}</p>}
    </div>
  );
};

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
