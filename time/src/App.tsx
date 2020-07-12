import React, { FunctionComponent, useEffect, useState } from 'react'
import { interval } from 'rxjs'

const App: FunctionComponent = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const subscription = interval(1000).subscribe(() => {
      setDate(new Date())
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <p>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</p>
  )
}

export default App
