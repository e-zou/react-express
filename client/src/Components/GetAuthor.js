import React, {Component} from 'react';
import axios from 'axios';

export default class GetTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            query: '',
        }
    }

    getAuthor = (title) => {
        axios.get('/book/' + title).then(
            res => {
            this.setState({author : res.data})
            console.log(res.data)
        }) // requests info from server.js
        this.updateQuery(this.state.query);
    }

    updateQuery = (input) => {
        this.setState({ query : input})
    }

    submitQuery = (event) => {
        event.preventDefault();
        this.updateQuery(this.state.query);
    }

    // getMessage = () => {
    //     axios.get('http://localhost:5000/hello').then(
    //         res => {
    //         this.setState({message : res.message})
    //         console.log(res)
    //     })
    // }

    render() {
        console.log(this.state.query);
        return (
            <div>
                <form onSubmit={this.submitQuery}>
                    <input onChange = {(e) => {this.updateQuery(e.target.value)}} value={this.state.query} placeholder="Find the author of a book..."/>
                    <button onClick = {() => this.getAuthor(this.state.query)}>Button</button>
                </form>
                <p>{this.state.author}</p>
            </div>

        );
    }
}