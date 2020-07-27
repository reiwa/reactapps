import React, { Fragment, FunctionComponent, useEffect, useState } from 'react'

const App: FunctionComponent = () => {
  const [answer] = useState(0)

  const [left, setLeft] = useState(0)

  const [factor, setFactor] = useState(0)

  const [factors, setFactors] = useState<number[]>([])

  const reset = () => {
    const naturalNumbers = getNaturalNumbers(100)
    const numbers = naturalNumbers.filter((n) => 3 < getFactors(n).length)
    const defaultLeft = getRandom(numbers)
    const defaultFactors = getFactors(defaultLeft).filter((n) => 2 < n)
    const defaultFactor = getRandom(defaultFactors)

    setLeft(defaultLeft)
    setFactors(defaultFactors)
    setFactor(defaultFactor)
  }
  const onClick = (n: number) => () => {
    if (n === factor) {
      reset()
    }
  }

  useEffect(() => {
    reset()
  }, [])

  if (!left) {
    return <Fragment />
  }

  return (
    <Fragment>
      <div>
        <span>{left}</span>
        <span>{'x'}</span>
        <span>{answer || '?'}</span>
        <span>{'='}</span>
        <span>{left * factor}</span>
      </div>
      <div>
        {factors.map((factor) => (
          <button key={factor} onClick={onClick(factor)}>
            {factor}
          </button>
        ))}
      </div>
    </Fragment>
  )
}

const getFactors = (n: number) => {
  return new Array(n)
    .fill(null)
    .map((_, i) => i)
    .filter((a) => n % a === 0)
}

const getRandom = (array: number[]) => {
  return array[Math.floor(Math.random() * array.length)]
}

const getNaturalNumbers = (n: number) => {
  return new Array(n).fill(null).map((_, i) => i + 1)
}

export default App
