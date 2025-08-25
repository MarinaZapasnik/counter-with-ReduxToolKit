import { createAction, createReducer } from "@reduxjs/toolkit"
import { getCountFromLocalStorage } from "../utils/localStorageService"
import { GetValuesAC } from "./values-reducer"


export const SetCountAC = createAction<{minValue: number}> ('count/setCount') 

export const IncrementAC = createAction<{newCount: number}>('count/increment') 

export const ResetAC = createAction<{minValue: number}>('count/reset') 

export const SetSettingsAC = createAction('count/setSettings')


const initialCount = getCountFromLocalStorage()

export const countReducer = createReducer(initialCount, builder => {
    builder 
        .addCase(GetValuesAC, (state) => {
            return state = null
        })
        .addCase(SetCountAC, (state, action) => {
            return state = action.payload.minValue
        })
        .addCase(IncrementAC, (state, action) => {
            return state = action.payload.newCount
        })
        .addCase(ResetAC, (state, action) => {
            return state = action.payload.minValue
        })
        .addCase(SetSettingsAC, (state) => {
            return state = null
        })
})

