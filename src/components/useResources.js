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
  useEffect(() => {
    ;(async (resource) => {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/${resource}`
      )

      setResources(response.data)
    })(resource)
  }, [resource])
  return resources
}

export default useResources
