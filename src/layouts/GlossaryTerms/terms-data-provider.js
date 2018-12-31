import React, { Component } from 'react'

let fetchJsonData = (publicURL, callback) => {
  fetch(publicURL)
    .then(response => {
      return response.json()
    })
    .then(callback)
    .catch(error => {
      console.log('Error fetching: ' + publicURL)
      console.log(error)
    })
}

class TermsDataProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      termsData: props.termsData,
    }
  }

  componentDidMount() {
    this.props.termFiles.forEach(element => {
      let { publicURL } = element.file
      fetchJsonData(publicURL, data => {
        let dataWrapper = {}
        dataWrapper[publicURL] = data
        this.setState({
          termsData: Object.assign({}, this.state.termsData, dataWrapper),
        })
      })
    })
  }

  render() {
    return (
      <>
        {this.props.render({
          termFiles: this.props.termFiles,
          termsData: this.state.termsData,
        })}
      </>
    )
  }
}

export default TermsDataProvider
