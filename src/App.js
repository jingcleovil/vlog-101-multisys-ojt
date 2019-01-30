import React, { Component } from 'react';
import Header from 'Header';
import Nav from 'Nav';
import PostForm from 'PostForm';
import Post from 'Post';

class App extends Component {
  state = {
    vlog: []
  }

  handleOnSubmit = (data) => {
    const newVlog = this.state.vlog.concat([ data ]);
    this.setState({
      vlog: newVlog,
    })
  }

  render() {
    console.log(this.state.vlog);
    return (
      <div className="container">
        <Header />
        <Nav />

        <div className="row">
          <div className="col">
            <PostForm
              onSubmit={this.handleOnSubmit}
            />
          </div>
          <div className="col">
            <Post data={this.state.vlog}/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
