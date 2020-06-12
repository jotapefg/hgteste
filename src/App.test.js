import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

describe('testing rendering', () => {
  it('should be render the application', () => {
    const { asFragment } = render(<App />)
    
    expect(asFragment(<App />)).toMatchSnapshot()
  })
})