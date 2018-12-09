import React from 'react'

class GlossaryTerm extends React.Component {
  state = {
    enabled: true,
    loaded: false,
    termData: {},
  }
  componentDidMount() {
    let { publicURL } = this.props.file

    fetch(publicURL)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          loaded: true,
          termData: data,
        })
      })
  }
  render() {
    let { loaded, termData } = this.state

    return loaded ? (
      <div>
        <p>{termData.name}</p>
        <p>{termData.definition}</p>
      </div>
    ) : (
      <div>Loading Term: {this.props.file.name}</div>
    )
  }
}

export default GlossaryTerm
