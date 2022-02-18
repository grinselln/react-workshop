import { useState, useRef } from 'react'
import { Heading } from 'course-platform/Heading'

export function AddStudentForm() {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [autoUsername, setAutoUsername] = useState(false)

  const fullNameRef = useRef<HTMLInputElement>(null!);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    console.log({
      fullName,
      username,
    });
    setFullName("");
    setUsername("");
    fullNameRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit} className="card spacing">
      <Heading>Add Student</Heading>
      <div className="field-wrap">
        <label htmlFor="full-name">Full Name</label>
        <input id="full-name" type="text" className="form-field" value={fullName} 
        onChange={(e) => {
            setFullName(e.target.value)
            autoUsername && setUsername(e.target.value.toLowerCase().replaceAll(/\s/g, ''))
          }
        }
        ref={fullNameRef} required />
      </div>

      <div className="field-wrap">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" className="form-field" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        disabled={autoUsername}
        required
        autoComplete="off" />
      </div>

      <div>
        <label className="vertical-middle horizontal-spacing">
          <input type="checkbox" checked={autoUsername} onChange={(e) => { 
            setAutoUsername(!autoUsername);
            !autoUsername && setUsername(fullName.toLowerCase().replaceAll(/\s/g, ''));
            }} />
          <span>Auto Username</span>
        </label>
      </div>

      <hr />
      <button type="submit" className="button">
        Add Student
      </button>
    </form>
  )
}
