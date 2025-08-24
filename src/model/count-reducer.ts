import { createAction, createReducer } from "@reduxjs/toolkit"
import { ChangeEvent } from "react"
import { SettingsProps } from "../app/Counter"
import { getCountFromLocalStorage } from "../utils/localStorageService"

export const GetValuesAC = createAction<{
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: SettingsProps}>('count/getValues')

export const SetCountAC = createAction<{minValue: number}> ('count/setCount') 

export const IncrementAC = createAction<{newCount: number}>('count/increment') 

export const ResetAC = createAction<{minValue: number}>('count/reset') 

export const SetSettingsAC = createAction('count/setSettings')


const initialCount = getCountFromLocalStorage()

export const countReducer = createReducer(initialCount, builder => {
    builder 
        .addCase(GetValuesAC, (state) => {
            return null
        })
        .addCase(SetCountAC, (state, action) => {
            return action.payload.minValue
        })
        .addCase(IncrementAC, (state, action) => {
            return action.payload.newCount
        })
        .addCase(ResetAC, (state, action) => {
            return action.payload.minValue
        })
        .addCase(SetSettingsAC, (state) => {
            return null
        })
})

//2/29