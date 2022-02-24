<p align="center">
 <img src="https://github.com/HendrickSimonR/Disney-Cinema/blob/main/app/assets/images/logo.png?raw=true" width="300">
</p>

<h1 align="center">
 https://disney-cinema.herokuapp.com
</h1>

<p align="center">
 <img src="https://github.com/HendrickSimonR/Disney-Cinema/blob/main/app/assets/images/screen_capture.gif?raw=true" />
</p>
 
### Disney Cinema is a "hybrid-clone", combining the UX/UI of Netflix and Disney Plus. With this app, user's can view classic Disney (and Disney-owned properties) scenes all in one place! 

Disclaimer: I do not own any rights to these characters, images, or video clips, and this website is not-for-profit!

## Languages & Frameworks
- Back-End: Ruby on Rails
- Front-End: React-Redux
- Database: PostgreSQL
- Data Transfer: Amazon Web Services S3
- Styling: SCSS
- Babel, Webpack, GitHub, HTML5

# Features

1) Preview playback and more information on hovering the movie's thumbnail.

2) Like and Dislike movies.

3) Watchlist: Add and remove movies from a watchlist. Watchlist is updated in real-time on both the Home page and Watchlist page.

4) Movie Modal: Clicking on the down arrow on the thumbnail opens a modal featuring more information about the movie (Cast, Blurb, Genres).

5) URLs sorting movies by brand (Disney, Pixar, Marvel, Star Wars, National Geographic), featuring styling as they appear on Disney Plus.

6) Search: search for movies based on title, genre, cast, keywords, and more.
 
7) Avatars: select your favorite Disney Plus character. If not there, shuffle using the button below the displayed avatars and see who else pops up!


Using React, Javascript and SCSS, a movie will expand and play a preview when moused over by the user. CSS rules make this all possible, while JavaScript handles the rendering of the videos. The homepage also allows a user to add movies to a watchlist, which updates in real time.

## JAVASCRIPT

`````


`````

## REACT
`````
        <div className="movie-index">
          {this.props.watchlist.includes('No watchlists!') && this.props.watchlist.length === 1 
        
          ? <div>
                <h1 className="row-header">Watchlist</h1>
                <ul className="movie-row" id="watchlist-movies-row" ref={this.watchlist}>
                  <li className="thumbnail-container" onMouseOver={event => this.hoverPlay(event)} onMouseOut={event => event.target.load()}>
                    <img src={window.placeholder} className="thumbnail" id="placeholder" ></img>
                  </li>
                </ul>
            </div>
        
          
          : <div>
            <h1 className="row-header">Watchlist</h1>
            <span className="material-icons left-arrow" onClick={() => this.handleScroll('left', 'watchlist')}>
              arrow_back_ios
            </span>
            <span className="material-icons right-arrow" onClick={() => this.handleScroll('right', 'watchlist')}>
              arrow_forward_ios
            </span>
            <ul className="movie-row" id="watchlist-movies-row" ref={this.watchlist}>
              {this.watchlistMovies.map((movie) => (
                <Thumbnail user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie} />
              ))}
            </ul>
          </div> }

`````
