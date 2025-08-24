import { RootState } from "../app/store";
import { ValuesProps } from "../app/Counter";


export const selectValues = (state: RootState): ValuesProps=> state.values