import { LikeButton } from '../LikeButton'
import Link from 'next/link'

const fetchPosts = () => {
  // Nota: evitem que generi un contingut static (un html amb les dades del fetch) en el moment
  // de executar npm run build
  // Basicament li estem dient que volem que sigui server-side-rendered
  // Tenim el static, render-side-rendered ({ cache: 'no-store' }) o regenerate cada x temps (next: { revalidate: 60 })
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
