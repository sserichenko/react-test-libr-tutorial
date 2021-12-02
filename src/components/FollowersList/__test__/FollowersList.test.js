import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {

    beforeEach(() => {
        // console.log("RUNS BEFORE EACH TEST")
        jest.mock('axios');
    })

    // beforeAll(() => {
    //     console.log("RUNS ONCE BEFORE ALL TESTS")
    // })

    // afterEach(() => {
    //     console.log("RUNS AFTER EACH TEST")
    // })

    // afterAll(() => {
    //     console.log("RUNS ONCE AFTER ALL TESTS")
    // })

        it('should fetch and render input element', async () => {
            
            const results = [
                {
                    name: {
                        first: "Laith",
                        last: "Harb"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/59.jpg"
                    },
                    login: {
                        username: "ThePhonyGOAT123"
                    }
                },
                {
                    name: {
                        first: "Laith",
                        last: "MIchel"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/59.jpg"
                    },
                    login: {
                        username: "ThePhonyGOAT321"
                    }
                },
            ]

            axios.get.mockImplementationOnce(() => Promise.resolve({data: {results}}))

            render(
                <MockFollowersList />
            );

            expect(axios.get).toHaveBeenCalledTimes(1);
            const followerDivElements = await screen.findAllByTestId("follower-item");
            expect(followerDivElements).toHaveLength(2)

        });
})