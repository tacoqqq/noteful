import React, {Component} from 'react';
import './NoteSidebar.css';
import { withRouter } from 'react-router-dom';


class NoteSidebar extends Component{

    onClickGoBack = () => {
        this.props.history.push('/')
    }

    render(){
        return(
            <aside className="sidebar">
                <div className="button-container">
                    <button className='go-back-button' onClick={this.onClickGoBack}>Go Back</button>
                    <p>{this.props.folder.name}</p>
                </div>
            </aside>
        )
    }
}

export default withRouter(NoteSidebar);