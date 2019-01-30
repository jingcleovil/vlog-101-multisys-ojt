import React, { Component } from 'react';
import Header from 'Header';
import Nav from 'Nav';
import PostForm from 'PostForm';
import Post from 'Post';
import Service from 'service';

const ROOT = 'https://3803c1f9.ngrok.io';

class App extends Component {
  state = {
    vlog: []
  }

  componentDidMount() {
    const url = `${ROOT}/vlog`; // equivalent to "ROOT + '/vlog'"
    Service.get(url).then(res => {
      this.setState({
        vlog: res.data.data
      });
    });
  }

  handleOnSubmit = (data) => {
    const newVlog = this.state.vlog.concat([ data ]);
    this.setState({
      vlog: newVlog,
    });
    const url = `${ROOT}/vlog`;
    Service.post(url, data).then(res => {
      console.log('success', res);
    });
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
