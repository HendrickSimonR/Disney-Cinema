import React from "react";
import LikeButtonsContainer from '../thumbnail/like_buttons_container';
import WatchlistButtonContainer from '../thumbnail/watchlist_button_container';
import { withRouter } from 'react-router';

class MovieModal extends React.Component {
  constructor(props) {
    super(props);

    this.displayPoster = this.displayPoster.bind(this);
    
    this.state = { 
      mute: 'volume_up', 
      moviePlay: true, 
      movie: null 
    }
  }

  handleMute(id){
    if (this.state.mute === 'volume_up'){
      this.setState({mute: 'volume_off'});
      let vid = document.getElementById(id);
      console.log('id', id)
      if (vid) vid.muted = true;    
    } else {
      this.setState({mute: 'volume_up'});
      let vid = document.getElementById(id);
      if (vid) vid.muted = false;
    }
  }

  replayFeatured(posterId, movieId) {
    this.setState({ moviePlay: !this.state.moviePlay });
    let movie = document.getElementById(movieId);
    let poster = document.getElementById(posterId);
    poster.style.display = 'none';
    movie.style.display = 'inline-block';
    movie.play();
  }

  displayPoster(posterId, movieId) {
    let movie = document.getElementById(movieId);
    let poster = document.getElementById(posterId);
    movie.style.display = 'none';
    poster.style.display = 'inline-block';
    this.setState({ moviePlay: !this.state.moviePlay });
  }
  // componentDidMount() {
  //   this.props.getMovie(this.props.movie);
  //   // console.log('film', film)
  //   // this.setState 
  // }

  render() {
    let film;
    let watchlistId;
    let uniqueId;
    let posterId;

    let moviesArr = Object.values(this.props.movies);
    if (moviesArr.length === 0) {
      return null;
    } else {
      // console.log('WTF')
      for (let i = 0; i < moviesArr.length; i++) {
        let movie = moviesArr[i];
        // debugger
        // console.log('movie', movie);
        // console.log('findmovie', this.props.movie)

        if (this.props.movie === movie.id) {
          film = movie;
          uniqueId = movie.id + 444;
          posterId = movie.id + 777;
          break;
        }
      }

      if (this.props.watchlist) { 
        for (let i = 0; i < this.props.watchlist.length; i++) {
          let watchlistMovie = this.props.watchlist[i];
          if (watchlistMovie.movie_id === film.id) {
            watchlistId = watchlistMovie.id;
            break;
          } 
        } 
      }
    }

    console.log('MODAL PROPS', this.props)
    console.log('MOVIE PROPS ', film)

    return (
      <div className="movie-modal">
        <div className="modal-movie-player">
          <img 
            alt 
            id={posterId}
            src={film.image_url} 
            className='modal-movie' 
            onClick={this.showMovie}
            style={{ display: 'none'}}
          />

          <video 
            id={uniqueId} 
            autoPlay
            playsInline
            className="modal-movie"
            poster={film.image_url} 
            onClick={this.showMovie}
            muted={false}
            onEnded={() => this.displayPoster(posterId, uniqueId)}
          >
            <source src={this.props.test} type="video/mp4" /> 
          </video>

          <div className="modal-movie-shadow"></div>
        </div>

        <div>
          <span onClick={this.props.closeModal} className="material-icons-sharp close-modal">
            cancel
          </span>
          <span onClick={this.props.closeModal} className="material-icons-round" id="close-fill">
            circle
          </span>
        </div>
        
        <div className="movie-modal-details">
          <div className="movie-modal-buttons">
            <div className="movie-modal-buttons-left">
              <div className="movie-modal-play">
                <h1><span className="material-icons-sharp">play_arrow</span></h1>
                <h2>Play</h2>
              </div>
              <WatchlistButtonContainer modalButton={true} movieId={film.id} userId={this.props.user} watchlistId={watchlistId} watchlist={this.props.watchlist} />
              <LikeButtonsContainer modalButton={true} movieId={film.id} user={this.props.user} />
            </div>

            <div className="movie-modal-buttons-right">
              <span 
                className='material-icons-round modal-volume-on' id={uniqueId + 'volume'}
                onClick={this.state.moviePlay === true ? () => this.handleMute(uniqueId) : () => this.replayFeatured(posterId, uniqueId)}
              >
                { this.state.moviePlay === true ? 
                  this.state.mute : 'refresh' 
                }
              </span>
            </div>
          </div>

          <div className="movie-modal-bottom">
            <div className="movie-modal-left">
              <div className="movie-modal-info">
                <h1>100% Match</h1>
                <h3>{film.year}</h3>
                <h2>{film.rating}</h2>
                <h3>{film.runtime}</h3>
              </div>
              <div className="modal-description">
                {film.description}
              </div>
            </div>
            <div className="movie-modal-right">
              <div>Cast: <span>{film.cast}</span></div>
              <div>Genres: <span>{film.tags}</span></div>
              <div>This feature is: <span>{film.topic}</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MovieModal);