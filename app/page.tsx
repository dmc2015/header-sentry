import HeaderChecker from './components/header-checker'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
      <div className="z-10 max-w-5xl w-full items-center justify-between">
        <HeaderChecker />
      </div>
    </main>
  )
}