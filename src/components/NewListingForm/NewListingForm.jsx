import React, { Component } from "react";
import "./NewListingForm.css";

export default class NewListingForm extends Component {
  state = {
    title: this.props.editMode ? this.props.listing.title : "",
    type: this.props.editMode ? this.props.listing.type : "",
    price: this.props.editMode ? this.props.listing.price : "",
    description: this.props.editMode ? this.props.listing.description : "",
    image: this.props.editMode ? this.props.listing.image : "",
    message: "",
  };

  generateSubmitButtonTitle = () => {
    return this.props.editMode ? "Edit Listing" : "Add Listing";
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      message: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let fetchResponse;
      if (this.props.editMode) {
        fetchResponse = await fetch(`/api/listings/${this.props.listing._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: this.state.title,
            type: this.state.type,
            price: this.state.price,
            description: this.state.description,
            image: this.state.image,
            user: this.props.user._id,
          }),
        });
      } else {
        fetchResponse = await fetch("/api/listings/new", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: this.state.title,
            type: this.state.type,
            price: this.state.price,
            description: this.state.description,
            image: this.state.image,
            user: this.props.user._id,
          }),
        });
      }
      if (!fetchResponse.ok) {
        throw new Error("Fetch failed - Bad request");
      } else {
        this.setState({
          title: this.props.editMode ? this.props.listing.title : "",
          type: this.props.editMode ? this.props.listing.type : "",
          price: this.props.editMode ? this.props.listing.price : "",
          description: this.props.editMode
            ? this.props.listing.description
            : "",
          image: this.props.editMode ? this.props.listing.image : "",
          message: this.props.editMode
            ? "Listing Updated Successfully!"
            : "Listing Created Successfully!",
        });
        const response = await fetchResponse.json();
        this.props.setListings(response);
      }
    } catch (err) {
      this.setState({ message: "Failed - Please Try Again" });
    }
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.editMode &&
      this.props.listing.updatedAt !== prevProps.listing.updatedAt
    )
      this.setState({
        title: this.props.editMode ? this.props.listing.title : "",
        type: this.props.editMode ? this.props.listing.type : "",
        price: this.props.editMode ? this.props.listing.price : "",
        description: this.props.editMode ? this.props.listing.description : "",
        image: this.props.editMode ? this.props.listing.image : "",
        message: "Listing Updated Successfully!",
      });
  }

  render() {
    return (
      <div>
        {!this.props.editMode && <h1>New Listing Page</h1>}
        <p className="">&nbsp;{this.state.message}</p>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <h1>New Listing</h1>

            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
            <label>Type</label>
            <select
              name="type"
              onChange={this.handleChange}
              value={this.state.type}
              required
            >
              <option value="">Select Type</option>
              <option value="House">House</option>
              <option value="Condo">Condo</option>
              <option value="Apartment">Apartment</option>
            </select>

            <label>Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
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

            <label>Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={this.state.image}
              onChange={this.handleChange}
              required
            />
            <button className="btn btn-success" type="submit">
              {this.generateSubmitButtonTitle()}
            </button>
            <h2 className="">&nbsp;{this.state.message}</h2>
          </form>
        </div>
      </div>
    );
  }
}
