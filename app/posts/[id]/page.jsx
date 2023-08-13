export default function Post ({ params }) {
  const { id } = params
  return (
    <div> Esto es un post {id} </div>
  )
}
