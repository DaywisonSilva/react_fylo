import { render, screen } from '@testing-library/react'
import Button from 'components/atoms/Button'

describe('<Button/>', () => {
  it('should render correctly', () => {
    render(<Button label='Button' />)

    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  it('should be disabled', () => {
    render(<Button label='Button' disabled />)

    expect(screen.getByText('Button')).toBeDisabled()
  })
})
