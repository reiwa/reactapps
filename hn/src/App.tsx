import React, { FunctionComponent, useEffect, useState } from 'react'

type Post = {
  id: number
  title: string
  url?: string
}

const App: FunctionComponent = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getPostIds()
      .then(ids => ids.map(id => getPost(id)))
      .then(promises => Promise.all(promises))
      .then(posts => {
        setPosts(posts)
      })
  }, [])

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <a href={post.url}>{post.title}</a>
        </li>
      ))}
    </ul>
  )
}

const getPostIds = () => {
  const input = 'https://hacker-news.firebaseio.com/v0/newstories.json'

  return fetch(input)
    .then<string[]>(res => res.json())
    .then(ids => ids.filter((_, i) => i < 20))
}

const getPost = async (id: string) => {
  const input = `https://hacker-news.firebaseio.com/v0/item/${id}.json`

  return fetch(input).then<Post>(res => res.json())
}

export default App
