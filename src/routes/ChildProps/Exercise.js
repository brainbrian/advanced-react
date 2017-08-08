import React from 'react';

/*
*  In GetData, Use the API.getData() method to simulate an API call.
*  Return the data in the this.props.children() method of the GetData component.
*/

const data = ['amanda', 'nicole', 'john', 'amy', 'jani', 'ken'];

const API = {
  getData: () => new Promise(resolve => {
    return setTimeout(() => resolve(data), 2000)
  })
}

class GetData extends React.Component {
  state = {
    data: [],
    loading: true,
  }

  componentDidMount() {
    API.getData().then(data => {
      this.setState(() => ({ data: data, loading: false }));
    });
  }

  render() {
    return this.props.children(this.state)
  }
}

export default () => (
  <GetData>
      {
        ({ data, loading }) => (
          loading ? <p>Loading...</p> : <div>
            {
              data.map((item, index) => (
                <p key={index}>{item}</p>
              ))
            }
          </div>
        )
      }
  </GetData>
)
