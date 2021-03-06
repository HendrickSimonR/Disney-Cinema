import { connect } from 'react-redux';
import { getMovie } from '../../actions/movie_actions';
import { closeModal } from '../../actions/modal_actions';
import MovieModal from './movie_modal';

const mSTP = (state) => {
  return {
    movies: state.movies,
    likes: state.likes,
    dislikes: state.dislikes,
    watchlist: state.watchlist,
    user: state.session.id
  }
}

const mDTP = (dispatch) => {
  return {
    getMovie: movieId => dispatch(getMovie(movieId)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(MovieModal)