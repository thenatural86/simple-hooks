import React, { useState, useEffect } from "react"
import axios from "axios"

const useResources = resource => {
  const [resources, setResources] = useState([])

  // anytime component gets rendered/re-rendered to the screen we run inner function
  useEffect(() => {
    ;(async resource => {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/${resource}`
      )

      setResources(response.data)
    })(resource)
  }, [resource])
  return resources
}

const ResourceList = ({ resource }) => {
  const resources = useResources(resource)

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  )
}

export default ResourceList
