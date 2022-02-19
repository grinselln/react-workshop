import { useState, useEffect, useLayoutEffect } from 'react'
import { RecentLessons } from 'course-platform/RecentLessons'

type Props = {
  width?: number
}

function useMedia(query: string) {
  const [matches, setMatches] = useState(false)

  useLayoutEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)
    const listener = () => {
      setMatches(media.matches)
    }
    media.addEventListener('change', listener)
    return () => {
      media.removeEventListener('change', listener)
    }
  }, [query])

  return matches
}

export const AppSidebar: React.FC<Props> = ({ width = 1200 }) => {
  const isWide = useMedia(`(min-width: ${width}px)`)
  const darkMode = useMedia(`(prefers-color-scheme: dark)`)

  return isWide ? (
    <aside className="card w-130">
      {darkMode ? 'dark mode' : 'light mode'}
      <RecentLessons />
    </aside>
  ) : null
}
