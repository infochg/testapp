import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type CollectionDataType = {
  editors: Array<string>
  payment_tokens: Array<object>
  primary_asset_contracts: Array<object>
  traits: object
  stats: object
  banner_image_url: string | null
  chat_url: string | null
  created_date: string | null
  default_to_fiat: boolean
  description: string | null
  dev_buyer_fee_basis_points: string | null
  dev_seller_fee_basis_points: string | null
  discord_url: string | null
  display_data: object
  external_url: string | null
  featured: boolean
  featured_image_url: string | null
  hidden: boolean
  safelist_request_status: string | null
  image_url: string | null
  is_subject_to_whitelist: boolean
  large_image_url: string | null
  medium_username: string | null
  name: string | null
  only_proxied_transfers: boolean
  opensea_buyer_fee_basis_points: string | null
  opensea_seller_fee_basis_points: string | null
  payout_address: string | null
  require_email: boolean
  short_description: string | null
  slug: string | null
  telegram_url: string | null
  twitter_username: string | null
  instagram_username: string | null
  wiki_url: string | null
  is_nsfw: boolean
}

export interface CollectionType {
  data: CollectionDataType
}

const initialState: CollectionType = {
  data: {
    editors: [],
    payment_tokens: [],
    primary_asset_contracts: [],
    traits: {},
    stats: {},
    banner_image_url: '',
    chat_url: '',
    created_date: '',
    default_to_fiat: false,
    description: '',
    dev_buyer_fee_basis_points: '',
    dev_seller_fee_basis_points: '',
    discord_url: '',
    display_data: {},
    external_url: '',
    featured: false,
    featured_image_url: '',
    hidden: false,
    safelist_request_status: '',
    image_url: '',
    is_subject_to_whitelist: false,
    large_image_url: '',
    medium_username: '',
    name: '',
    only_proxied_transfers: false,
    opensea_buyer_fee_basis_points: '',
    opensea_seller_fee_basis_points: '',
    payout_address: '',
    require_email: false,
    short_description: '',
    slug: '',
    telegram_url: '',
    twitter_username: '',
    instagram_username: '',
    wiki_url: '',
    is_nsfw: false,
  },
}

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    setCollection: (state, action: PayloadAction<CollectionDataType>) => {
      state.data = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCollection } = collectionSlice.actions

export default collectionSlice.reducer
