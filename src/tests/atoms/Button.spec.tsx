import { render, screen } from '@testing-library/react'
import Button from 'components/atoms/Button'

describe('<Button/>', () => {
  it('should render correctly', () => {
    render(<Button label='Button' />)

    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})
