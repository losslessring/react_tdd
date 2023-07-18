import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

import AwesomeCounter from './AwesomeCounter'

test("Counter should have the correct initial value when set to 7", () => {
    act(() => render(<AwesomeCounter initialValue={7} />))
    const count = screen.queryByText(7)
    expect(count).toBeVisible()
})

test("Counter should have a default initial value of 0", () => {
    act(() => render(<AwesomeCounter />))
    const count = screen.queryByText(0)
    expect(count).toBeVisible()
})

test("Counter should increase the value correctly when add is clicked once", async () => {
    act(() => {
        render(<AwesomeCounter initialValue={1} />)
    })
    
    const addButton = screen.getByText("Add")
    await act(async () => {
        await userEvent.click(addButton)
    })
    
    
    const count = screen.queryByText(2)
    expect(count).toBeVisible()
    
})

test("Counter should increase the value correctly when add is clicked twice", async () => {
    act(() => render(<AwesomeCounter initialValue={1} />))
    const addButton = screen.getByText("Add")
    await act(async () => {
        await userEvent.click(addButton)
        await userEvent.click(addButton)
    })
    const count = screen.queryByText(3)

    expect(count).toBeVisible()
    
})

test("Counter should decrease the value by 1 when remove is clicked once", async () => {
    act(() => render(<AwesomeCounter initialValue={5} />))
    const removeButton = screen.getByText("Remove")
    await act(async () => {
        await userEvent.click(removeButton)
    })
    const count = screen.queryByText(4)

    expect(count).toBeVisible()
    
})

test("Counter should decrease the value by 2 when remove is clicked twice", async () => {
    act(() => render(<AwesomeCounter initialValue={5} />))
    const removeButton = screen.getByText("Remove")
    await act(async () => {
        await userEvent.click(removeButton)
        await userEvent.click(removeButton)
    })
    const count = screen.queryByText(3)

    expect(count).toBeVisible()
    
})

test("Counter should not allow a negative number when the initial value is 0 and remove is clicked", async () => {
    act(() => render(<AwesomeCounter initialValue={0} />))
    const removeButton = screen.getByText("Remove")
    await act(async () => {
        await userEvent.click(removeButton)
    })
    const count = screen.queryByText(0)

    expect(count).toBeVisible()
    
})

test("Counter should not allow a negative number when the initial value is 2 and remove is clicked 3 times", async () => {
    act(() => render(<AwesomeCounter initialValue={2} />))
    const removeButton = screen.getByText("Remove")
    await act(async () => {
        await userEvent.click(removeButton)
        await userEvent.click(removeButton)
        await userEvent.click(removeButton)
        
    })
    const count = screen.queryByText(0)

    expect(count).toBeVisible()
    
})