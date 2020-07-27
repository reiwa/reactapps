import React, { FunctionComponent, useEffect, useState } from 'react'

const App: FunctionComponent = () => {
  const [[x, y], setPosition] = useState([0, 0])

  useEffect(() => {
    const [KEY_LEFT, KEY_UP, KEY_RIGHT, KEY_DOWN] = [37, 38, 39, 40]
    const listener = (event: any) => {
      if (event.keyCode === KEY_LEFT && 0 < x && x < 5) {
        setPosition([x - 1, y])
      } else if (event.keyCode === KEY_UP && 0 < y && y < 5) {
        setPosition([x, y - 1])
      } else if (event.keyCode === KEY_RIGHT && -1 < x && x < 4) {
        setPosition([x + 1, y])
      } else if (event.keyCode === KEY_DOWN && -1 < y && y < 4) {
        setPosition([x, y + 1])
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [x, y])

  return (
    <table>
      <tbody>
        {createSquares().map((numbers, i) => (
          <tr key={i}>
            {numbers.map((j) => (
              <td
                key={j}
                style={{ background: y === i && x === j ? 'gray' : 'white' }}
              >
                {`${i}${j}`}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const createSquares = () => {
  return new Array(5).fill(null).map(() => [0, 1, 2, 3, 4])
}

export default App
