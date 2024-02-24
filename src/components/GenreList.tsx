import React from 'react'
import useGenres from '../hooks/useGenres'
import useData from '../hooks/useData'

const GenreList = () => {
  const  {data, error, isLoading} = useGenres()
  return (
    <ul>

      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  )
}

export default GenreList