import { useState, useEffect } from "react"
import axios from "axios"

const useResources = (resource) => {
  // initialization of piece of state (resource) and function that to setState (setResources).
  // initialize value state to an empty array.
  // have access to that state on the variable resources.
  // have ability to change that piece of state using the setResources function.
  const [resources, setResources] = useState([])

  // make a fetch request inside functional component to get resources
  // also used to update resources
  // gets called with a function that is ran anytime the component is initially rendered to the screen and anytime the component gets
  // updated
  // also gets called with an array as a second argument
  useEffect(() => {
    // asynchronous network request
    // resource (state.resource) passed down on props from App
    ;(async (resource) => {
      // network request saved to response variable
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/${resource}`
      )
      // call to setResources (setState) function with the response from network request passed in
      setResources(response.data)
      // asynchronous function immediately invoked with resource argument
    })(resource)
    // piece of state resource passed in as an array. If resource has different value between renders than the anonymous function that gets passed into useEffect gets called again.
    // same as if(prevProps.resource !== this.props.resource)
  }, [resource])
  // return resources piece of state
  return resources
}

export default useResources
