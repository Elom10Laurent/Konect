import { BellIcon } from '@heroicons/react/24/outline'

export default function DashBar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b border-border">
      <div className=" max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Titre */}
          <h1 className="text-xl font-bold">Hello  {"User"}  </h1>

          {/* Bouton notifications */}
          <div className="flex items-center">
            <button
              type="button"
              className="relative rounded-full p-2 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
