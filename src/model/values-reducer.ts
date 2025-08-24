import { ChangeEvent } from "react";
import { SettingsProps, ValuesProps } from "../app/Counter";
import { getValuesFromLocalStorage } from "../utils/localStorageService";



export type GetValuesActionType = {
    type: 'get_values',
    payload: {
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        value: SettingsProps
    }
}

const initialValues = getValuesFromLocalStorage()


export const valuesReducer = (values: ValuesProps = initialValues, action: GetValuesActionType ): ValuesProps => {
    
    switch (action.type) {
        case 'get_values':
            return {...values, [action.payload.value]: Number(action.payload.event.target.value)}
    
    default:
        return values
}
}


export const GetValuesAC = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        value: SettingsProps
    ) => ({
            type: 'get_values',
            payload: {
                event,
                value
            }
        } as const)