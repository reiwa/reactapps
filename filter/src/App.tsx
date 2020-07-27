import React, { Fragment, FunctionComponent, useState } from 'react'

const items = new Array(240)
  .fill(null)
  .map(() => Math.random().toString(36).slice(-8))

const App: FunctionComponent = () => {
  const [text, setText] = useState('')

  return (
    <Fragment>
      <input onChange={(event) => setText(event.target.value)} value={text} />
      <ul>
        {items
          .filter((item) => item.includes(text))
          .map((item) => (
            <li key={item}>{item}</li>
          ))}
      </ul>
    </Fragment>
  )
}

export default App
