import React , {Component} from 'react';

export default class Error extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    getDerivedStateFromError(error){
        return {hasError: true};
    }

    render(){
        if (this.state.hasError){
            return (
                <h2>Something went wrong. Please try again.</h2>
            )
        }
        return this.props.children
    }
}