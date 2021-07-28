import React, { useState, useLayoutEffect, useEffect } from 'react'
import { RecentBoards } from 'ProjectPlanner/RecentBoards'
import { ActiveUsers } from 'ProjectPlanner/ActiveUsers'
import 'ProjectPlanner/BrowseBoardsSidebar.scss'

type Props = {
  width?: number
}

const useIsomorphicEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

function useMedia(query) {
  const [matches, setMatches] = useState(true) // wrong

  useIsomorphicEffect(() => {
    const media = window.matchMedia(query)
    const listener = () => {
      setMatches(media.matches)
    }

    setMatches(media.matches)

    media.addEventListener('change', listener)
    return () => {
      media.removeEventListener('change', listener)
    }
  }, [query])

  return matches
}

export const BrowseBoardsSidebar: React.FC<Props> = ({ width = 900 }) => {
  const isWide = useMedia(`(min-width: ${width}px)`)
  const darkMode = useMedia(`(prefers-color-scheme: dark)`)

  return isWide ? (
    <aside className="browse-boards-sidebar spacing">
      {darkMode ? 'dark' : 'light'}
      <RecentBoards />
      <ActiveUsers />
    </aside>
  ) : null
}
