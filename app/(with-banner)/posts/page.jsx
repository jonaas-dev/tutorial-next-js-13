import ListOfPosts from './ListOfPosts.jsx'
import { Suspense } from 'react'
export default async function PostsPage ({ params }) {
  return (
    <section>
      <Suspense fallback={<p>Loading...</p>} />
      <ListOfPosts />
    </section>
  )
}
