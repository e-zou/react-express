import React, {Component} from 'react';
import axios from 'axios';

export default class GetTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            query: '',
            results : []
        }
    }

    // Calls API to get author
    callGoogleAPI() {
        let link = "/book?title=" + this.state.query;
        axios.get(link).then(
            (res) => {
                console.log(res.data);
                this.setState({
                    results: res.data,
                });
            }
        )
    }

    // Handles change
    updateQuery = (e) => {
        this.setState({ query : e.target.value})
    }

    // Handles submission on click or enter
    submitQuery = (e) => {
        e.preventDefault();
        this.callGoogleAPI();
    }

    render() {
        console.log(this.state.query);
        return (
            <div>
                <h1>Author Search</h1>
                <form onSubmit={this.submitQuery}>
                    <input onChange = {this.updateQuery} value={this.state.query} placeholder="Search..."/>
                    <button onClick = {this.submitQuery}>Button</button>
                </form>
                <img src={this.state.results.image}/>
                <p>{this.state.results.title}</p>
                <p>{this.state.results.author}</p>
                
            </div>

        );
    }
}