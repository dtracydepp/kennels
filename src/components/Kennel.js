import React from "react"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import "./Kennel.css"
import { AnimalProvider } from "./animal/AnimalProvider"
import {AnimalList} from "./animal/AnimalList"
import { Animal } from "./animal/Animal"
import {CustomerList} from "./customer/CustomerList"
import {CustomerProvider} from "./customer/CustomerProvider"
import {EmployeeList} from "./employee/EmployeeList"
import {EmployeeProvider} from "./employee/EmployeeProvider"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <h2>Animals</h2>
        <article className ="animals">
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>
        </article>

        <h2>Employees</h2>
        <article className ="employees">
        <EmployeeProvider>
            <EmployeeList />
        </EmployeeProvider>
        </article>

        <h2>Customers</h2>
        <article className ="customers">
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
        </article>
       
    </>
)