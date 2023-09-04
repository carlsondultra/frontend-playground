import Link from 'next/link'
 
export default function Home() {
  return (
    <div>
      <p>Welcome to my front-end playground!</p>
      <p>Click the links to browse front-end techniques i've been playing around with!</p>
      <Link href="/maskeffect">Mask</Link>
    </div>
  )
}
