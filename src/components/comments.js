import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import axios from 'axios';

export default class Comments extends React.Component {
  state = {
    id: '',
    name: '',
    email: '',
    title: '',
  }

  handleChange = event => {this.setState({ id: event.target.value });}
  handleChange2 = event => {this.setState({ name: event.target.value });}
  handleChange3 = event => {this.setState({ email: event.target.value });}
  handleChange4 = event => {this.setState({ comment: event.target.value });}

  handleSubmit = event => {
    event.preventDefault();
    var user = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment,

    };
        axios.post(`https://flonxchess.nl/wp-json/wp/v2/posts`,{ user }
    )
      .then(res => {
         this.setState({message: res.data})
      });
      // setTimeout(function(){ window.location.reload()}, 2000 );
  }


  render() {
    return (

      <React.Fragment>
      <h2 className="mb-4">Nieuw artikel</h2>
      <p>{this.state.message}</p>
        <form onSubmit={this.handleSubmit}>
        <input type="hidden" id="id" value="3d9c6f14-e289-5346-8f91-bce05d53bbf4"  onChange={this.handleChange}/>
        <div className="form-group">
          <label className="sr-only" htmlFor="author">Naam</label>
          <input type="text" className="form-control" id="name" name="name" placeholder="naam" onChange={this.handleChange2} />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="email">email</label>
          <input type="text" className="form-control" id="email" name="email" placeholder="eamil" onChange={this.handleChange3} />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="comment">comment</label>
          <textarea rows="10" type="text" className="form-control" id="comment" name="comment" placeholder="comment" onChange={this.handleChange4} />
        </div>
          <input type="submit" className="btn btn-success mb-4"  />
        </form>
      </React.Fragment>
    )
  }
}
