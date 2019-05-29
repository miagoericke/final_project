import React from 'react';

/* Create a new component called Category that displays all the images within a category*/
class Navbar extends React.Component {
    constructor(props) {
     super(props);
     this.handleClick = this.handleClick.bind(this);
    }

    // Set the state of the App of the App component to the selecte category
    handleClick(event) {
     event.preventDefault();
     let category = event.target.id;
     this.setActiveLink(category); // Hightlight the selected category
     this.props.onCategoryChange(category); // Set the state 
    }

    // Highlight active links
    setActiveLink(category) {
      // Remove preveously selected active link
      document.getElementById("li_reptiles").className -= "active";
      document.getElementById("li_mammals").className -= "active";
      document.getElementById("li_birds").className -= "active";
        
     // Now make active the link for the selected category
     if (category === "reptiles"){
         document.getElementById("li_reptiles").className += " active";
     } else if (category === "mammals") {
         document.getElementById("li_mammals").className += " active";
     } else if (category === "birds"){
         document.getElementById("li_birds").className += " active";
     }
    }

    // Render the navigation bar
    render(){
     return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
              {/* Navbar header */}            
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                    <span className="glyphicon glyphicon-menu-hamburger"></span>
                </button>
                <a className="navbar-brand" href="" id="animals" onClick={this.handleClick} >Animals</a>
              </div>
              {/* Navbar list */}  
              <div className="collapse navbar-collapse" id="navbar">
                <ul className="nav navbar-nav">
                    <li id="li_reptiles" className=""><a href="" id="reptiles" onClick={this.handleClick}>Reptiles</a></li>
                    <li id="li_mammals" className=""><a href="" id="mammals" onClick={this.handleClick}>Mammals</a></li>
                    <li id="li_birds" className=""><a href="" id="birds" onClick={this.handleClick}>Birds</a></li> 
                </ul>
              </div>
            </div>
        </nav>
        );
    }
}

/* Export the Category component */
export default Navbar;