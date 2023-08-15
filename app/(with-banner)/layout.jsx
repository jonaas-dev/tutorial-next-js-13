export default function PostsLayout ({ children }) {
  return (
    <div>
      <marquee style={{ color: 'purple' }}>Some text</marquee>
      {children}
    </div>
  )
}
