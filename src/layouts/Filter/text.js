import React from 'react'
import style from './text.module.css'

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.runChangeHandler = this.runChangeHandler.bind(this)
    this.resetTimeout = this.resetTimeout.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
    this.resetTimeout()
  }

  resetTimeout() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId)
    }

    this.timeoutId = window.setTimeout(this.runChangeHandler, 500)
  }

  runChangeHandler() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId)
    }
    this.props.changeHandler(this.state.value)
  }

  render() {
    return (
      <div className={style.filter}>
        <input
          className={style.textInput}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search glossary"
        />
      </div>
    )
  }
}

export default Text
