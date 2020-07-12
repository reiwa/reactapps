import React, { Fragment, FunctionComponent, useState } from 'react'

type ColorCode = [string, string, string]

const SQUARE = 16

const App: FunctionComponent = () => {
  const [colors, setColors] = useState<ColorCode>(['00', '00', '00'])
  const colorCode = createColorCode(colors)

  return (
    <Fragment>
      <h1 style={{ color: colorCode }}>{colorCode}</h1>
      <table>
        <tbody>
          {createTable().map(row => (
            <tr key={row.join('')}>
              {row.map(color => (
                <th
                  onClick={() => setColors(color)}
                  key={color.join('')}
                  style={{
                    background: createColorCode(color),
                    height: 16,
                    width: 16,
                  }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

const getNumber = () =>
  ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2)

const getRandomColorCode = (): [string, string, string] => [
  getNumber(),
  getNumber(),
  getNumber(),
]

const createColorCode = ([r, g, b]: ColorCode) => `#${r}${g}${b}`

const createTable = () =>
  new Array(SQUARE)
    .fill(null)
    .map((_, i) => i)
    .map(i =>
      new Array(SQUARE ** 2)
        .fill(null)
        .map((_, i) => i)
        .filter(n => SQUARE * i - 1 < n)
        .filter(n => n < SQUARE * (i + 1))
        .map(_ => getRandomColorCode())
    )

export default App
