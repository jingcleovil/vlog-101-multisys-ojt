import React from 'react';

export default class Post extends React.Component {

  static defaultProps = {
    data: [],
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <ul>
            {
              this.props.data.map(item => {
                return (
                  <li>{item.title}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

