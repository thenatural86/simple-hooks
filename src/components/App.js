import React, { useState } from "react"

const App = () => {
  const [resource, setResource] = useState("posts")

  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
        {resource}
      </div>
    </div>
  )
}

export default App
