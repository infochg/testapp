import { RootState } from '.'

export const collectionSelector = (state: RootState) => state.collection.data
export const collectionItemsSelector = (state: RootState) => state.collection.items
export const collectionFiltersSelector = (state: RootState) => state.collection.filters
export const itemSelector = (state: RootState) => state.item.data
