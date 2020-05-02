import React, { component } from "react";
import {render} from "@testing-library/react"



/*global expect*/

//import {Add} from "."
import { HelloMessage }from "."

// describe ("add tests", () =>{
//     it("should return sum of two numbers",() => {
//         expect(Add(1,2)).toBe(3);
//     })
    //it("should add only first two arguments")
// })



describe("HelloMessage tests", () => {
    it("should render given message", () => {
        const {getByText, debug } = render(<HelloMessage message="world"/>)
        getByText(/world/i);
        
        debug();
        
        // expiry (queryByText(/world/i)).lemgth(1)
        
    })
})