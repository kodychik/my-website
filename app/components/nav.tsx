import Link from 'next/link'

const navItems = {
  '#home': {
    name: 'home',
  },
  '#experience': {
    name: 'experience',
  },
  '#projects': {
    name: 'projects',
  }
  // },
  // '/blog': {
  //   name: 'blog',
  // },
}

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full h-16 border-b bg-white/75 dark:bg-[#111010]/75 backdrop-blur">
      <nav className="h-full mx-auto max-w-6xl px-4">
        <div className="flex justify-end items-center h-full">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 px-4 py-2 font-mono"
              >
                {name}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
