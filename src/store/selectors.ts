import { RootState } from '.'

export const collectionSelector = (state: RootState) => state.collection.data
export const collectionItemsSelector = (state: RootState) => state.collection.items
