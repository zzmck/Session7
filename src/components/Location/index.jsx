import React from 'react'

export default function location(props) {
  const { data, classComponent} = props;
  return (
    <div data-testid="location-text" className={classComponent? classComponent : ''}>{data}</div>
  )
}