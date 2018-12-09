import React from 'react'

const ScrimStyle = {
  top: 0,
  position: 'fixed',
  width: '100%',
  height: '100%',
  backgroundColor: '#000000',
  opacity: '.4',
}

class Scrim extends React.Component {
  render() {
    let mergedStyle = Object.assign(
      {
        display: this.props.enabled ? 'block' : 'none',
      },
      ScrimStyle
    )
    return (
      <div
        tabIndex="0"
        style={mergedStyle}
        onClick={event => {
          event.preventDefault()
        }}
      />
    )
  }
}

export default Scrim
