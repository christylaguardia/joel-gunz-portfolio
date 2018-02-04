import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions';

class Auth extends React.PureComponent {

  state = {
    email: null,
    password: null
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    this.props.login(email, password);
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.handleSubmit();
        }}>
        <p>
          <input
            name="email"
            type="email"
            placeholder="email"
            required
            onChange={e => this.handleChange(e)}
          />
        </p>
        <p>
          <input
            name="password"
            type="password"
            placeholder="password"
            required
            onChange={e => this.handleChange(e)}
          />
        </p>
        <p><input type="submit" value="Login" /></p>
      </form>
    
    );
  }
}

export default connect(
  null,
  { login }
)(Auth);