/*global jest*/
/*global expect*/

import React from "react"
import { render, fireEvent, waitFor } from "@testing-library/react"

import {Router , Route ,withRouter} from "react-router-dom"
import { Provider } from "mobx-react"
import { createMemoryHistory } from "history"


import AuthService from "../../services/AuthService/index.api.js"
import AuthStore from "../../store/AuthStore"

import { E_COMMERCE_PRODUCTS_PAGE_PATH } from "../../../ProductsPageModule/constants/RouteConstants"
import { SIGN_IN_PATH } from "../../constants/RouteConstants"

import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json"

import SignInRoute from "./SignInRoute"



const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));




describe("sign in route", ()=>{
    
    let authAPI
    let authStore
    
    
    beforeEach(() => {
        authAPI = new AuthService();
        authStore = new AuthStore(authAPI)
    })
    
    
    afterEach(() =>{
        jest.resetAllMocks()
    })
    
    
    it("should render username an empty error message", () => {
        
        const {getByText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore}/>
            </Router>
            )
            
            
        const signInButton = getByRole("button", {Name:"sign in"})
        
        
        fireEvent.click(signInButton)
        
        getByText(/please enter username/i)
    })
    
    
    it("should render password an empty password error message", () => {
        const { getByText , getByPlaceholderText , getByRole } = render(
            
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore} />
            </Router>
            )
        
        const username = "test-user"
        
        const usernameField = getByPlaceholderText("Username")
        
        const signInButton = getByRole("button", {Name:"Sign in"})
        
        fireEvent.change(usernameField, {target : {value : username} })
    
        fireEvent.click(signInButton)
        
        getByText(/please enter password/i)
        
    })
    
    
    
    
    
    it("should sign in when on click sign in button", () => {
        
        const {getByLabelText,debug, getByPlaceholderText, getByText, getByRole} = render(
            <Router history = {createMemoryHistory()}>
                <SignInRoute authStore={authStore} />
            </Router>
            )
        
        
        const username = "test-user"
        const password = 'test-password'
        
        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", {Name: "Sign in"});
        
        
        fireEvent.change(usernameField, {target: {value: username}})
        fireEvent.change(passwordField, {target: {value: password}})
        fireEvent.keyPress(signInButton, { key:"Enter", code:"Enter"})
        waitFor(() => getByLabelText("audio-loading"))
    })
    
    
    
    
    
    it("should render signin route loading state", async() => {
        
    const username = "test-user";
    const password = "test-password";
    
    const { getByLabelText, getByRole, getByPlaceholderText} = render(
        <Router history={createMemoryHistory()}>
            <SignInRoute authStore={authStore} />
        </Router>
        )
        
        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", {Name:"Sign in"})
        
        const mockLoadingPromise = new Promise(function(resolve,reject){});
        
        const mockSigninAPI = jest.fn()
        
        mockSigninAPI.mockReturnValue(mockLoadingPromise);
        
        authAPI.signInAPI = mockSigninAPI;
    
        fireEvent.change(usernameField, {target :{value : username}});
        fireEvent.change(passwordField, {target :{value : password}});
        fireEvent.click(signInButton)
        
        //   getByLabelText("audio-loading");
        
         getByRole("button", {disabled:true});
    })
    
    
                  
    it("should render sign in success state", async () => {
        const history = createMemoryHistory()
        const route = SIGN_IN_PATH
        history.push(route)
        
        const { 
            getByRole,
            queryByRole,
            getByPlaceholderText,
            queryByLabelText,
            getByTestId , debug} = render(
                <Provider authStore={authStore}>
                    <Router history={history}>
                        <Route path={SIGN_IN_PATH}>
                            <SignInRoute/>
                        </Route>
                        
                        <Route path={E_COMMERCE_PRODUCTS_PAGE_PATH}>
                            <LocationDisplay />
                        </Route>
                    </Router>
                </Provider>
                );
            
            const username = "test-user";
            const password = "test-password";
            
            
            const usernameField = getByPlaceholderText("Username");
            const passwordField = getByPlaceholderText("Password");
            const signInButton = getByRole("button", {Name:"Sign in"})
            
            const mockSuccessPromise = new Promise(function(resolve,reject){
                resolve(getUserSignInResponse)
            }) 
            
            const mockSigninAPI = jest.fn()
            mockSigninAPI.mockReturnValue(mockSuccessPromise)
            
            authAPI.signInAPI = mockSigninAPI;
            
            fireEvent.change(usernameField, {target : {value : username}})
            fireEvent.change(passwordField, {target : {value : password}})
            fireEvent.click(signInButton)
            
            
            
            waitFor(() => {
             //   debug()
               expect(
                    queryByRole("button", {Name:"Sign in"})
                    ).not.toBeInThDocument();
                expect(getByTestId("location-display")).toHaveTextContent(E_COMMERCE_PRODUCTS_PAGE_PATH);
            })
            
        
    })    
    

    
    
    it("should render  signInRoute Failure state",()=>{
        const { getByText, getByPlaceholderText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore}/>
            </Router>
            )
        const username = "test-user"
        const password = "test-password"
        
        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const SignInButton = getByRole("button" ,{Name : "Sign in"})
        
        const mockFailurePromise = new Promise(function(resolve, reject){
            reject (new Error("error"));
            
        }).catch(() => {});
        
        const mockSigninAPI =jest.fn()
        
        mockSigninAPI.mockReturnValue(mockFailurePromise)
        
        authAPI.signInAPI = mockSigninAPI
        
        fireEvent.change(usernameField, {target: {value : username}})
        fireEvent.change(passwordField, {target: {value : password}})
        fireEvent.click(SignInButton)

        waitFor(() =>{
            getByText(/server-error/i)
        })
    })
})

