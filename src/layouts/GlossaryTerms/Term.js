import React from 'react'
import GlossaryTerm from './GlossaryTerm'
import PropTypes from 'prop-types'
import styles from './GlossaryTerm.module.css'

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
    anchorId: this.props.anchorId
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
      return <div id={this.state.anchorId} className={styles.loading}>Loading term</div>
    }

    let { types } = data
    return types.includes('glossary') ? <GlossaryTerm anchorId={this.state.anchorId} styles={styles} {...data} /> : null
  }
}

Term.propTypes = {
  publicUrl: PropTypes.string,
}
export default Term
