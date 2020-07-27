import React, { Fragment, FunctionComponent, useState } from 'react'

const App: FunctionComponent = () => {
  const [closedNumbers, setClosedNumbers] = useState<number[]>([])
  const allNumbers = new Array(64).fill(null).map((_, i) => i)
  const columns = new Array(4)
    .fill(null)
    .map((_, i) => i)
    .map((i) =>
      allNumbers.filter((n) => 16 * i - 1 < n).filter((n) => n < 16 * (i + 1))
    )
  const onClick = () => {
    const remnants = allNumbers.filter((n) => !closedNumbers.includes(n))
    const nextNumber = remnants[Math.floor(Math.random() * remnants.length)]
    setClosedNumbers([...closedNumbers, nextNumber])
  }

  return (
    <Fragment>
      <h1>{closedNumbers[closedNumbers.length - 1] || 'None'}</h1>
      <button
        disabled={allNumbers.length - 1 < closedNumbers.length}
        onClick={onClick}
      >
        run
      </button>
      <table>
        <tbody>
          {columns.map((row) => (
            <tr key={row.join('')}>
              {row.map((number) => (
                <th
                  key={number}
                  style={{
                    color: closedNumbers.includes(number) ? 'red' : 'inherit',
                  }}
                >
                  {number}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default App
