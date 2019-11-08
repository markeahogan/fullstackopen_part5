import React, { useState, useImperativeHandle } from 'react'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const show = { display: '' }
  const hide = { display: 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <>
      <div style={visible ? hide : show}>
        <button onClick={() => setVisible(true)}>{props.buttonLabel}</button>
      </div>
      <div style={visible ? show : hide}>
        {props.children}
        <button onClick={() => setVisible(false)}>cancel</button>
      </div>
    </>
  )
})

export default Togglable;