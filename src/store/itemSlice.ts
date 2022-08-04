import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ItemDataType {
  token_id: string
  contract_address: string
  attributes: Array<{ trait_type: string; value: string }>
  metadata: {
    image: string | null
  }
}

export interface ItemType {
  data: ItemDataType
}

const initialState: ItemType = {
  data: {
    token_id: '',
    contract_address: '',
    attributes: [],
    metadata: {
      image: null,
    },
  },
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<ItemDataType>) => {
      state.data = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setItem } = itemSlice.actions

export default itemSlice.reducer
