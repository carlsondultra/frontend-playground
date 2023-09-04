import Link from 'next/link'
import './styles.css'
import Navbar from './components/navbar/navbar' 

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
      <p>Welcome to my front-end playground!</p>
      <p>Click the links to browse front-end techniques i've been playing around with!</p>
    </div>
    </div>
  )
}
