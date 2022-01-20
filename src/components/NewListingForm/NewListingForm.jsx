import React, { Component } from "react";
import "./NewListingForm.css";

export default class NewListingForm extends Component {
  state = {
    title: "",
    type: "",
    price: "",
    description: "",
    image: "",
    message: "",
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
      const fetchResponse = await fetch("/api/listings/new", {
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

      if (!fetchResponse.ok) {
        throw new Error("Fetch failed - Bad request");
      } else {
        this.setState({
          title: "",
          type: "",
          price: "",
          description: "",
          image: "",
          message: "Listing Created Successfully!",
        });
        const response = await fetchResponse.json()
        this.props.setListings (response)
      }
    } catch (err) {
      this.setState({ message: "Failed - Please Try Again" });
    }
  };
  render() {
    return (
      <div>
        
        
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
            <div className="imgUpContainer">
              <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
              <button className="btn btn-secondary" type="button" id="inputGroupFileAddon04">Add Image</button>
            </div> 


            {/* <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={this.state.image}
              onChange={this.handleChange}
              required
            /> */}
            
            <button className="btn btn-success" type="submit">Add Listing</button>
            <h2 className="">&nbsp;{this.state.message}</h2>
          </form>
        </div>
      </div>
    );
  }
}
