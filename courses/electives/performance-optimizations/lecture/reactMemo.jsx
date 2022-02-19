import { useState, useCallback, useMemo, memo } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  const onUpdate = useCallback(() => {
    console.log('User was updated')
  }, [])

  const user = useMemo(() => {
    return {}
  }, [])

  return (
    <div className="text-center spacing">
      <h3>Owner (Parent) Component</h3>
      <button className="button" onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <hr />
      <UserProfile user={user} onUpdate={onUpdate} />
    </div>
  )
}

const UserProfile = memo(() => {
  console.log('Render')

  return (
    <div>
      <h3>Child Component</h3>
      <p className="text-small">
        Check the console to see how many times I render when the owner state changes
      </p>
    </div>
  )
})
