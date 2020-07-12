import React, { ChangeEvent, FunctionComponent, useState } from 'react'

const App: FunctionComponent = () => {
  const [cells, setCells] = useState([
    { code: 'zh', name: 'Chinese', nameJa: '中国語' },
    { code: 'ru', name: 'Russian', nameJa: 'ロシア語' },
    { code: 'en', name: 'English', nameJa: '英語' },
  ])

  const onChangeCell = (index: number, key: string) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const _cells = [...cells]
    _cells[index] = { ..._cells[index], [key]: event.target.value }
    setCells(_cells)
  }

  return (
    <table>
      <thead>
        <tr>
          <td>{'code'}</td>
          <td>{'name'}</td>
          <td>{'nameJa'}</td>
        </tr>
      </thead>
      <tbody>
        {cells.map((cell, i) => (
          <tr key={i}>
            <td>
              <input onChange={onChangeCell(i, 'code')} value={cell.code} />
            </td>
            <td>
              <input onChange={onChangeCell(i, 'name')} value={cell.name} />
            </td>
            <td>
              <input onChange={onChangeCell(i, 'nameJa')} value={cell.nameJa} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default App
