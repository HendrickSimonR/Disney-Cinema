import React from 'react';
// import SigninForm from './signin_form';
// import SignupForm from './signup_form';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.session.map((error, i) => (
          <div>
            <li key={i}>
              {error}
            </li>
            <br />
          </div>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.removeErrors()
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitForm(user)
    // .then(
    //   () => this.props.history.push('/dashboard'));
    }

  render() {
    console.log('session', this.props)

    return (
      <div className="signin-form-container">
        <h1 className="form-header">{this.props.formGreeting}</h1>
          <form onSubmit={this.handleSubmit} className="sign-form-box">
            <div>
              {this.props.errors.session.length > 0 ? this.renderErrors() : ''}
            </div>
            
            <br />
            
              <div className="signin-form">
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="signin-input"
                  placeholder="Username"
                />
              <br />
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signin-input"
                  placeholder="Password"
                />
              <br />
                <input className="session-submit" type="submit" value={this.props.formType.toUpperCase()} />
              <br />
            </div>
            
            <div className="session-option">
              <p>{this.props.question} {this.props.link}</p>
            </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;



// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = props.user;
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.update = this.update.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     let user = Object.assign({}, this.state);
//     this.props.submitForm(user)
//       .then(() => this.props.history.push({pathname: '/browse'}));
//   }

//   update(field) {
//     return e => {
//       this.setState({
//         [field]: e.target.value
//       });
//     };
//   }

//   render() {
//     return (
//       <div>
//         {
//           this.props.formType === 'Sign In' ? 
//             <SigninForm
//               handleSubmit={this.handleSubmit}
//               update={this.update}
//               formType={this.props.formType}
//             /> :
//             <SignupForm
//               handleSubmit={this.handleSubmit}
//               update={this.update}
//               formType={this.props.formType}
//             />
//         }
//       </div>
//     );
//   }
// }

// export default SessionForm;