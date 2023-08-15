import { LikeButton } from '../../LikeButton'
import Link from 'next/link'

// NOTES (next 12 to 13)
// getStaticProps (genera static content)
// return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

// getServerSideProps (server-side-rendered)
// return fetch('https://jsonplaceholder.typicode.com/posts', cache: 'no-store').then(res => res.json())

// incremental static regeneration (regenerate cada x temps)
// return fetch('https://jsonplaceholder.typicode.com/posts', next: { revalidate: 60 }).then(res => res.json())

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}
export default async function ListOfPosts () {
  const posts = await fetchPosts()

  return (
    posts.slice(0, 5).map(post => (
      <article key={post.id}>
        <Link href='/posts/[id]' as={`/posts/${post.id}`}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <LikeButton id={post.id} />
        </Link>
      </article>
    ))
  )
}
