import {render, screen} from "@testing-library/react";
import App from "./App";
import { BrowserRouter} from "react-router-dom"

test("Render App component", () => {
    render(<BrowserRouter>
                <App />
            </BrowserRouter>);
    const appComponent = screen.getByTestId('app-component')
    expect(appComponent).toBeInTheDocument()
})
