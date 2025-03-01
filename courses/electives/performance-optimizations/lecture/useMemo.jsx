import { useState, useMemo } from 'react'
import slowFunction from './utils/slowFunction'

export function App() {
  const [count, setCount] = useState(0)

  const input = count >= 5 // Let's change the input to the slow function

  console.time()
  const x = useMemo(() => slowFunction(input), [input])
  console.timeEnd()

  return (
    <div className="text-center spacing">
      <button className="button" onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <p>
        Notice the delay when we click!
        <br />
        <code>slowFunction</code> loops to {x}
      </p>
    </div>
  )
}
