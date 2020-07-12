import React, { Fragment, FunctionComponent, useState } from 'react'

const App: FunctionComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  const [month, setMonth] = useState(new Date().getMonth() + 1)

  const calendar = createCalendar(year, month)

  const onClick = (n: number) => () => {
    const nextMonth = month + n
    if (12 < nextMonth) {
      setMonth(1)
      setYear(year + 1)
    } else if (nextMonth < 1) {
      setMonth(12)
      setYear(year - 1)
    } else {
      setMonth(nextMonth)
    }
  }

  return (
    <Fragment>
      <h1>{`tháng ${month} năm ${year}`}</h1>
      <div>
        <button onClick={onClick(-1)}>{'prev'}</button>
        <button onClick={onClick(1)}>{'next'}</button>
      </div>
      <table>
        <tbody>
          {calendar.map((week, i) => (
            <tr key={week.join('')}>
              {week.map((day, j) => (
                <th key={`${i}${j}`}>{day}</th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

const createCalendar = (year: number, month: number) => {
  const first = new Date(year, month - 1, 1).getDay()

  const last = new Date(year, month, 0).getDate()

  return [0, 1, 2, 3, 4, 5].map(weekIndex => {
    return [0, 1, 2, 3, 4, 5, 6].map(dayIndex => {
      const day = dayIndex + 1 + weekIndex * 7
      return day - 1 < first || last < day - first ? null : day - first
    })
  })
}

export default App
