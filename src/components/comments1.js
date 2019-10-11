import React, { Component } from 'react';
import { navigate } from 'gatsby';


const ACTION_URL = "https://www.flonxchess.nl/wp-json/wp/v2/comments";

class Comments extends Component {
  constructor() {
    super();

    this.state = {
      formIsSubmitting: false,
      formSubmittedSuccessfully: false,
      formSubmittedFailed: false,
      formErrorMessage: null,
      textAreaValue: '',
    };
  }

  render() {
    const {
      formIsSubmitting,
      formSubmittedSuccessfully,
      formSubmittedFailed,
      formErrorMessage,
      textAreaValue,
    } = this.state;


    const submitButtonMarkup = formIsSubmitting ? (
      <input type="submit" value="Submitting comment..." disabled />
    ) : (
        <input type="submit" value="Post comment!" />
      );

    const successMessageMarkup = formSubmittedSuccessfully ? (
      <p>
        Thanks for your comment! It will appear once approved.
      </p>
    ) : null;

    const errorMessageMarkup = formSubmittedFailed && formSubmittedSuccessfully === false ? (
      <p>
        test
      </p>
    ) : null;

    return (
      <div>
        <h2 id="CommentsHeading">Post a comment</h2>
        {successMessageMarkup}
        {errorMessageMarkup}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="hidden" id="postId" value={this.props.wpId} />
          <div>
            <label htmlFor="name">Name*</label>
            <input id="name" type="text" required disabled={formIsSubmitting} />
          </div>
          <div>
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              type="email"
              disabled={formIsSubmitting}
            />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input id="website" type="text" disabled={formIsSubmitting} />
          </div>
          <div>
            <label htmlFor="comment">Comment*</label>
            <textarea
              id="comment"
              rows="10"
              required
              disabled={formIsSubmitting}
              onChange={evt => {
                this.setState({ textAreaValue: evt.target.value });
              }}
              value={textAreaValue}
            />
          </div>
          <div className="test">{submitButtonMarkup}</div>
        </form>
      </div>
    );
  }

  handleSubmit(evt) {
    evt.preventDefault();


setTimeout(function(){ window.location.reload()}, 20 );

    const [postId, name, email, website, comment] = evt.target.elements;
    const sendData = JSON.stringify({
      post: postId.value,
      author_name: name.value,
      author_url: website.value,
      author_email: email.value,
      content: comment.value,
    });

    fetch(ACTION_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: sendData,
    })
      .then((response) => {
        if (response.ok === true) {
          this.setState({
            formIsSubmitting: false,
            formSubmittedSuccessfully: true,
            textAreaValue: '',
          });
        }

        return response.json();
      })
      .then((object) => {
        this.setState({
          formIsSubmitting: false,
          formSubmittedFailed: true,
          formErrorMessage: object.message,
        });
      })
      .catch(error => console.error('Error:', error));
  }
}

export default Comments;
