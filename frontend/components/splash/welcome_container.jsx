import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import Welcome from './welcome';

const mDTP = dispatch => ({
  signin: user => dispatch(signin(user))
});

export default connect(null, mDTP)(Welcome);