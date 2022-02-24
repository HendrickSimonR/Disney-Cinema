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

1) On hovering a movie thumbnail, styling changes display functional buttons, as well as a preview of the movie.

2) Like and Dislike movies.

3) Play buttons render a full screen view of the chosen movie.

4) Watchlist: Add and remove movies from a Watchlist. Watchlist is updated in real-time on both the Home page and Watchlist page, and will be stored in the database.

5) Movie Modal: Clicking on the down arrow on the thumbnail opens a modal featuring more information about the movie (Cast, Blurb, Genres).

6) URLs sorting movies by brand (Disney, Pixar, Marvel, Star Wars, National Geographic), featuring styling as they appear on Disney Plus.

7) Search: search for movies based on title, genre, cast, keywords, and more.
 
8) Avatars: select your favorite Disney Plus character. If not there, shuffle using the button below the displayed avatars and see who else pops up!

9) Interactive styling provides an exciting experience for users, while the theme adds a touch of nostalgia

10) Users can access the live site on both Desktop and Mobile.


# Code

## Scroll Functionality

Using JavaScript, I developed the functionality of a row moving once an arrow is clicked. Once clicked, the arrow is removed, and the arrow on the opposite side of the row is revealed, allowing the row to scroll back. The following snippet is an abridged version, showcasing the effects caused by clicking the left arrow on the Disney row of movies.

### JS Function
```javascript
handleScroll = (direction, brand) => {
    if (direction === 'left') {
      if (brand === 'disney') {
        this.disney.current.style.transform = 'translateX(0px)';
        
        let mid = document.getElementsByClassName("thumbnail-container middle disney swiped");
        mid[0].classList.remove('swiped');

        let leftArrow = document.getElementsByClassName("material-icons left-arrow disney");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow disney hidden");

        leftArrow[0].classList.add('hidden');
        rightArrow[0].classList.remove('hidden');
      }
    }
```

### React 
``` javascript
<div className="scroll-arrows">
  <span 
   className="material-icons left-arrow disney hidden" 
   onClick={() => this.handleScroll('left', 'disney')} 
  >
   arrow_back_ios
  </span>
  
  <span 
   className="material-icons right-arrow disney"  
   onClick={() => this.handleScroll('right', 'disney')}
  >
   arrow_forward_ios
  </span>
</div>
```

## Modal

Clicking the down arrow button on a thumbnail or clicking the About Me link on the dropdown menu will initiate the function below.
The function takes in an input and a callback which closes the modal. The input is either one of two things:

#### - Movie ID 
The movie ID is taken as a string and converted to an integer. The integer is provided as a prop to the Movie Modal Container, which is used to find the matching data in the movie's slice of state, finally rendering the information onto the component.

#### - About
About is a string 'about', which simply renders the About Me component to the page.

#### Other Info
e.stopPropagation() prevents the modal from closing when a user interacts with the component.
closeModal applied to the parent container (onClick) allows the user to close the modal when they click outside of the child component.
Based on what the URL is during a User's experience, conditions will change the class name of the components, resulting in different styling.

``` javascript
const Modal = ({ input, closeModal }) => {
  if (!modal) return null;

  let about;
  let movieId;
  let modalComponent;
  let url = window.location.href;

  if (modal.includes('about')) {
    about = true;
    modalComponent = <AboutContainer />;
  } else {
    movieId = parseInt(modal);
    modalComponent = <MovieModalContainer movie={movieId} />
  }

  return (
    <div 
      onClick={closeModal}
      className={ url.includes('home') ? "modal-background" 
        : url.includes('watchlist') ? "modal-background watchlist" 
        : url.includes('search') ? "modal-background search" 
        : "modal-background brand"} 
    >
      
      <div 
        className={about ? "modal-child about" : "modal-child"} 
        onClick={e => e.stopPropagation()}
      >
        { modalComponent }
      </div>
    </div>
  );
}
```
