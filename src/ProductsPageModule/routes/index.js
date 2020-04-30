import React from "react"

import {Route} from "react-router-dom"

import {PRODUCTS_PAGE_PATH} from "../constants/RouteConstants"

import {ProductsPageRoute} from "./ProductsPageRoute"

const productsPageRoutes = [
    <Route key={PRODUCTS_PAGE_PATH} path={PRODUCTS_PAGE_PATH } component={ProductsPageRoute} />
    ]
    
    
export default productsPageRoutes;