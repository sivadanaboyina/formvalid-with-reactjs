import React from "react";
import { Link } from 'react-router-dom';
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            home:'Home',
            about:'About',
            contact:'Contact',
            more:'More'


        }

    }

    render(){
        return(
            <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link class="navbar-brand" to="/Home">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item ">
                            <Link class="nav-link" to="/Home">{this.state.home}</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/About">{this.state.about}</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/Contact">{this.state.contact}</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to="/More">{this.state.more}</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
            </div>
        )
    }
}

export default Header;