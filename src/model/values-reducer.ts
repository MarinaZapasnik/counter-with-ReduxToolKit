import { createAction, createReducer } from "@reduxjs/toolkit";
import { ChangeEvent } from "react";
import { SettingsProps } from "../app/Counter";
import { getValuesFromLocalStorage } from "../utils/localStorageService";


export const GetValuesAC = createAction<{
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: SettingsProps}>('values/getValues')

const initialValues = getValuesFromLocalStorage()

export const valuesReducer = createReducer(initialValues, builder => {
    builder
        .addCase(GetValuesAC, (state, action) => {
            return {
                ...state,
                [action.payload.value]: Number(action.payload.event.target.value)
            
            }
            
        })
})
