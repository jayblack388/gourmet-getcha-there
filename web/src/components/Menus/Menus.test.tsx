import { render } from '@redwoodjs/testing/web'

import Menus from './Menus'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Menus', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Menus />)
    }).not.toThrow()
  })
})
