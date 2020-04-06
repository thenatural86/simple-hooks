import React from "react"
import useResources from "./useResources"

// destructure out resource from props object passed down from from App

const ResourceList = ({ resource }) => {
  const resources = useResources(resource)
  // map over resources and render a list of records
  return (
    <ul>
      {resources.map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  )
}

export default ResourceList
