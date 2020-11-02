import React from 'react'
import { useContent } from '../hooks'
import selectionFilter from '../utils/selection-filter'

function Browse() {
  //we need the series and films
  const { series } = useContent('series')
  const { films } = useContent('films')

  //we need slides
  const slides = selectionFilter({ series, films })

  //pass it to the browse container
  console.log(slides)

  return <div>Hello from the browse</div>
}

export default Browse
