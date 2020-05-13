import React from "react"

import {Route} from "react-router-dom"

import {E_COMMERCE_PRODUCTS_PAGE_PATH} from "../constants/RouteConstants"

import {ProductsPageRoute} from "./ProductsPageRoute"

const productsPageRoutes = [
    <Route key={E_COMMERCE_PRODUCTS_PAGE_PATH} path={E_COMMERCE_PRODUCTS_PAGE_PATH } component={ProductsPageRoute} />
    ]
    
    
export default productsPageRoutes;