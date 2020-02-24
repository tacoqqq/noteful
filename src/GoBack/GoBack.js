import React, {Component} from 'react';
import './GoBack.css'

export default class GoBack extends Component {

    handleGoBack(e){
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="button-container">
                <button className="go-back-button" onClick={ (e) => this.handleGoBack(e)}>&lt; Go Back</button>
            </div>
        )
    }
}