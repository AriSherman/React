import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username.length < 4 && password.length < 4 ) {
        toast("userName or password is shorter than 4 letters")
        return;
    }
    if (username.indexOf("@") > -1){
        toast("@ is invalid in usreName")
        return;
    }
    const loginSuccess = this.props.login(username, password);
    if (loginSuccess){
      //TODO move to next page
    }
    else{
      toast("Invalid userName or password")
    }
  }

  render() {
    const { username, password, submitted } = this.state;
    return (
      <div className="login-page col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              "form-group" + (submitted && !username ? " has-error" : "")
            }
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            <ToastContainer />
          </div>
        </form>
      </div>
    );
  }
}


export default LoginPage;