import React from 'react'
import style from './text.module.css'

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
    if(this.props.changeHandler)
      this.props.changeHandler(event.target.value)
  }

  render() {
    return (
      <div className={style.filter}>
        <input
          className={style.textInput}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Text
