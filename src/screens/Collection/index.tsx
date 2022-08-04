import './Collection.scss'

import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { COLLECTIONDATA } from '../../api/data/collection'
import { COLLECTIONITEMS } from '../../api/data/collectionItems'
import fetchData from '../../api/fetch'
import Preloader from '../../components/Preloader'
import { useAppDispatch, useAppSelector } from '../../store'
import { setCollection, setCollectionItems } from '../../store/collectionSlice'
import { setItem } from '../../store/itemSlice'
import { setErrorNotification } from '../../store/notificationsSlice'
import {
  collectionFiltersSelector,
  collectionItemsSelector,
  collectionSelector,
} from '../../store/selectors'
import { arraysChecker } from '../../utils/helpers'

function Collection() {
  const dispatch = useAppDispatch()
  const collection = useAppSelector(collectionSelector)
  const collectionItems = useAppSelector(collectionItemsSelector)
  const collectionFilters = useAppSelector(collectionFiltersSelector)
  const [curSlug, setCurSlug] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showCollectionItems, setShowCollectionItems] = useState<Array<object> | null>(null)
  const { slug } = useParams()
  const navigate = useNavigate()

  // get collection data
  useEffect(() => {
    if (slug && slug !== curSlug) {
      setCurSlug(slug)

      const getCollectionItems = (address: string) => {
        fetchData({
          link: `https://api.protorapi.com/api/nft/ethereum/${address}/tokens`,
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'x-api-key': process.env.REACT_APP_PROTOR_API,
          },
          // onSuccess: (data) => dispatch(setCollectionItems(data.nfts)),
          // onError: (data) => dispatch(setErrorNotification(data)),
          onSuccess: () => dispatch(setCollectionItems(COLLECTIONITEMS.nfts)),
          onError: () => dispatch(setCollectionItems(COLLECTIONITEMS.nfts)),
          showLoader: (bool) => setIsLoading(bool),
        })
      }

      fetchData({
        link: `https://api.opensea.io/api/v1/collection/${slug}`,
        method: 'GET',
        // onSuccess: (data) => {
        //   dispatch(setCollection(data.collection))
        //   getCollectionItems(data.collection.primary_asset_contracts[0].address)
        // },
        onSuccess: (data) => {
          dispatch(setCollection(COLLECTIONDATA))
          getCollectionItems(data.collection.primary_asset_contracts[0].address)
        },
        onError: (data) => dispatch(setErrorNotification(data)),
        showLoader: (bool) => setIsLoading(bool),
      })
    }
  }, [slug, curSlug, dispatch])

  // set collection items first time
  useEffect(() => {
    if (collectionItems) {
      setShowCollectionItems(collectionItems)
    }
  }, [collectionItems])

  // filter collection items
  useEffect(() => {
    if (collectionItems.length > 0) {
      const filteredCollection: Array<object> = []

      collectionItems.map((item: { [key: string]: any }) => {
        if (arraysChecker(item.attributes, collectionFilters)) {
          filteredCollection.push(item)
        }
        return null
      })

      setShowCollectionItems(filteredCollection)
    }
  }, [collectionFilters, collectionItems])

  const goToPage = (item) => {
    dispatch(setItem(item))
    navigate(`/item?contract=${item.contract_address}&id=${item.token_id}`)
  }

  return (
    <div className='collection-page'>
      {!isLoading ? (
        <>
          <div className='collection-page__header'>
            <Typography variant='h3' component='div' className='collection-page__name' gutterBottom>
              {collection.name}
            </Typography>
            <Typography className='collection-page__description'>
              {collection.description}
            </Typography>
          </div>
          <div className='collection-page__items-wrapper'>
            {showCollectionItems &&
              showCollectionItems.map((item: { [key: string]: any }) => (
                <div
                  className='collection-page__item'
                  key={item.token_id}
                  role='presentation'
                  onClick={() => goToPage(item)}
                >
                  <img src={item.metadata.image} alt='' loading='lazy' />
                </div>
              ))}
          </div>
        </>
      ) : (
        <Preloader />
      )}
    </div>
  )
}

export default Collection
