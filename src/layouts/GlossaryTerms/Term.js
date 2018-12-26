import React from 'react'
import GlossaryTerm from './GlossaryTerm'
import PropTypes from 'prop-types'

let fetchJsonData = (publicURL, callback) => {
  fetch(publicURL)
    .then(response => {
      return response.json()
    })
    .then(callback)
    .catch(error => {
      console.log("Error fetching: "+publicURL);
      console.log(error)
    })
}

class Term extends React.Component {
  state = {
    data: null,
  }

  componentDidMount() {
    let { publicURL } = this.props
    fetchJsonData(publicURL, data => {
      this.setState({
        data: data,
      })
    })
  }
  render() {
    let { data } = this.state

    if (data == null) {
      return <div>Loading term</div>
    }

    let { types } = data
    return types.includes('glossary') ? <GlossaryTerm {...data} /> : null
  }
}

Term.propTypes = {
  publicUrl: PropTypes.string,
}
export default Term
