import {render} from '@testing-library/react'
import Button from './Button'
import userEvent from '@testing-library/user-event'

const id = 'button'

describe('Button.js', () => {
    test('Render', () => {
        render(<Button />)
    })
    
    test('Class & text', () => {
        const text = 'text'
        const className = 'class'
        const {getByTestId, getByText} = render(
            <Button text={text} className={className} />
        )
        expect(getByText(/text/i)).toBeInTheDocument()
        expect(getByTestId(id)).toHaveClass(className)
    })
    
    test('Snapshot', () => {
        const {container} = render(<Button />)
        expect(container.innerHTML).toMatchSnapshot()
    })
    
    test('onClick', () => {
        const onClickFn = jest.fn()
        const {getByTestId} = render(<Button onClick={onClickFn} />)
        userEvent.click(getByTestId(id))
        expect(onClickFn).toHaveBeenCalled()
    })
})
