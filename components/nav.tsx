import Link from 'next/link'

const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <nav className="fixed h-full">
      <ul>
        <li>Blog</li>
        <li>Codepen</li>
      </ul>
    </nav> 
  )
}
