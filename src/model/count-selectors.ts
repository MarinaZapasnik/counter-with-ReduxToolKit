import { RootState } from "../app/store"
import { CountProps } from "../app/Counter"

export const selectCount = (state: RootState): CountProps => state.count
