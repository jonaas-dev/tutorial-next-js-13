// NOTES (next 12 to 13)
// getStaticProps (genera static content)
// return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

// getServerSideProps (server-side-rendered)
// return fetch('https://jsonplaceholder.typicode.com/posts', cache: 'no-store').then(res => res.json())

// incremental static regeneration (regenerate cada x temps)
// return fetch('https://jsonplaceholder.typicode.com/posts', next: { revalidate: 60 }).then(res => res.json())

import Link from 'next/link'

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Post ({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}
