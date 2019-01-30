import React from 'react';

export default class PostForm extends React.Component {

  state = {
    title: '',
    body: '',
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      title: '',
      body: '',
    })
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {

    return (
      <div className="card">
        <form onSubmit={this.handleOnSubmit}>
          <div className="card-body">
              <div className="form-group">
                <label>Title</label>
                <input
                  required
                  value={this.state.title}
                  onChange={this.handleOnChange}
                  name="title"
                  type="text"
                  className="form-control"
                  />
              </div>
              <div className="form-group">
                <label>Body</label>
                <textarea
                  required
                  value={this.state.body}
                  onChange={this.handleOnChange}
                  name="body"
                  rows={10}
                  type="text"
                  className="form-control" />
              </div>
          </div>
          <div className="card-footer text-right">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
