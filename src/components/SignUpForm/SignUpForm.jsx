import { Component } from "react";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const fetchResponse = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        }),
      });
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json();
      localStorage.setItem("token", token);

      const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      this.props.setUserInState(userDoc);
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="login">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <h3>
            <span>Sign up</span>
          </h3>
          <div className="form-floating mb-3">
            <input
              className="form-control form-control-lg"
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control form-control-lg"
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control form-control-lg"
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control form-control-lg"
              type="password"
              id="confirmPassword"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
          </div>
          <button
            className="btn btn-outline-light col-12"
            type="submit"
            disabled={disable}
          >
            SIGN UP
          </button>
        </form>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
