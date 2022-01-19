import React, { Component } from "react";

export default class NewListingForm extends Component {
  state = {
    title: "",
    type: "",
    price: "",
    description: "",
    image: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };
  render() {
    return (
      <div>
        <h1>New Listing Page</h1>
        <p className="error-message">&nbsp;{this.state.error}</p>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />

            <input
              type="text"
              name="type"
              placeholder="Type"
              value={this.state.type}
              onChange={this.handleChange}
              required
            />

            <input
              type="number"
              name="price"
              placeholder="price"
              value={this.state.price}
              onChange={this.handleChange}
              required
            />
            <label>Description</label>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            ></textarea>

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={this.state.image}
              onChange={this.handleChange}
              required
            />
            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
    );
  }
}
