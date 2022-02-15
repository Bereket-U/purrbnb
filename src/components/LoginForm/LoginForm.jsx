import { Component } from "react";

export default class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
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
      // 1. POST our new user info to the server
      const fetchResponse = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json(); // 3. decode fetch response: get jwt token from srv
      localStorage.setItem("token", token); // 4. Stick token into localStorage

      const userDoc = JSON.parse(atob(token.split(".")[1])).user; // 5. Decode the token + put user document into state
      this.props.setUserInState(userDoc);
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    return (
      <div className="login">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <h3>
            <span>Log in</span>
          </h3>
          <div className="form-floating mb-3">
            <input
              className="form-control form-control-lg"
              type="text"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label for="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control form-control-lg"
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label for="password">Password</label>
          </div>

          <button className="btn  btn-outline-light col-12" type="submit">
            LOG IN
          </button>
        </form>

        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
