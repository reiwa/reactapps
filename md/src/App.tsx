import marked from 'marked'
import React, { Fragment, FunctionComponent, useState } from 'react'

const App: FunctionComponent = () => {
  const [text, setText] = useState('')

  return (
    <Fragment>
      <textarea
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <div dangerouslySetInnerHTML={{ __html: marked(text) }} />
    </Fragment>
  )
}

export default App
