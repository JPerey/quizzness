import React from "react";

const Header = ({ handlePrevious, handleSplash }) => {

    return (
        <div>
                
<nav class="navbar is-fixed-top">
  <div class="container">
    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
            <img src= {window.location.origin + '/quizlogo.png'} alt="Logo" className = "logo"/>
            
            
          <button onClick={ handlePrevious } className="navbar-item button is-medium is-ghost">Previous Quizzes</button>
          <button onClick={ handleSplash } className="navbar-item button is-medium is-ghost">Create a Quiz</button>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-dark" >Github </a>
            <a class="button is-link">Download</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
      <section className= "section is-small">
        <p className= "title is-primary">Quizzness</p>
        <p>where multiple choice is <strong>life</strong></p>
      </section>
            

        </div>
        
    )
    }

    export default Header;