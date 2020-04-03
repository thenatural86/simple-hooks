import React, { useState } from "react"
import ResourceList from "./ResourceList"

const App = () => {
  // array destructuring
  // useState will return an array with two elements inside of it. Take the first element out of array and assign it to resource and second element inside of array is assigned to setResource

  // [resource] = contains the present value of this piece of state - this.state.resource
  // [setResource] = setter function to  call when we update our state and re-render - this.setState({resources: 'posts'})
  // useState = function from react
  // ('posts') === (initial value) = starting value for this piece of state.
  //  similar to when we initialize our state object - state = {resources: 'posts'}
  const [resource, setResource] = useState("posts")

  console.log(useState)
  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
        <ResourceList resource={resource} />
      </div>
    </div>
  )
}

export default App
