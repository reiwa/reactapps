import React, { FunctionComponent, useEffect, useState } from 'react'
import { interval } from 'rxjs'

type Props = { text: string }

const Text: FunctionComponent<Props> = ({ text }) => {
  const alphabets = [
    `Á É Í Ó Ú Ý á é í ó ú ý`,
    `Ä Ë Ï Ö Ü Ÿ ä ë ï ö ü ÿ`,
    `Ç Ş ç ş`,
    `Ã Õ ã õ`,
  ]
    .map(a => a.split(' '))
    .flat()
  const [state, setState] = useState([0, 6])

  useEffect(() => {
    const subscription = interval(20).subscribe(() => {
      setState(([i, c]) => {
        if (text.length - 2 < i && c === 1) {
          subscription.unsubscribe()
        }

        return [c < 1 ? i + 1 : i, c < 1 ? 2 : c - 1]
      })
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const [index, count] = state

  if (index === text.length - 1 && count === 0) {
    return <p>{text}</p>
  }

  const a = alphabets[Math.floor(Math.random() * alphabets.length)]

  return <p>{text.slice(0, index) + a}</p>
}

export default Text
