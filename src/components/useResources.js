import { useState, useEffect } from "react"
import axios from "axios"

const useResources = (resource) => {
  // initialization of piece of state (resource) and function that to setState (setResources)
  const [resources, setResources] = useState([])

  // anytime component gets rendered/re-rendered to the screen we run inner function
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
