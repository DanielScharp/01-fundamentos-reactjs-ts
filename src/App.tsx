import { Post } from './components/Post.jsx'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { PostType } from './components/Post'

import styles from './App.module.css'
import './global.css'

const posts:PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DanielScharp.png',
      name: 'Daniel Scharp',
      role: 'Programador Junior'
    },
    content: [
      {type: 'paragraph', content: 'eae'},
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'link', content: '#salve'},
      {type: 'paragraph', content: '<3'},

    ],
    publishedAt: new Date('2023-07-02 16:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/DanielScharp.png',
      name: 'Diego Maia',
      role: 'Programador Pleno'
    },
    content: [
      {type: 'paragraph', content: 'Fala'},
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'link', content: '#Fala galera'},
      {type: 'paragraph', content: 'Fala galeraa'},

    ],
    publishedAt: new Date('2023-06-02 16:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

