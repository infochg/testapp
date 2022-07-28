import './Collection.scss'

import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import fetchData from '../../api/fetch'
import CustButton from '../../components/CustButton'
import Preloader from '../../components/Preloader'
import { useAppDispatch, useAppSelector } from '../../store'
import { setCollection, setCollectionItems } from '../../store/collectionSlice'
import { setErrorNotification } from '../../store/notificationsSlice'
import { collectionItemsSelector, collectionSelector } from '../../store/selectors'

function Collection() {
  const dispatch = useAppDispatch()
  const collection = useAppSelector(collectionSelector)
  const collectionItems = useAppSelector(collectionItemsSelector)
  const [curSlug, setCurSlug] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { slug } = useParams()

  useEffect(() => {
    if (slug && slug !== curSlug) {
      setCurSlug(slug)

      const getCollectionItems = () => {
        fetchData({
          link: `/getNftList`,
          method: 'GET',
          onSuccess: (data) => dispatch(setCollectionItems(data.nfts)),
          onError: (data) => dispatch(setErrorNotification(data)),
          showLoader: (bool) => setIsLoading(bool),
        })
      }

      fetchData({
        link: `https://api.opensea.io/api/v1/collection/${slug}`,
        method: 'GET',
        onSuccess: (data) => {
          dispatch(setCollection(data.collection))
          getCollectionItems()
        },
        onError: (data) => dispatch(setErrorNotification(data)),
        showLoader: (bool) => setIsLoading(bool),
      })
    }
  }, [slug, curSlug, dispatch])

  const goToPage = () => {
    window.location.href = collection.external_url as string
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
            <CustButton onClick={goToPage} text='Visit Website' />
          </div>
          <div className='collection-page__items-wrapper'>
            {collectionItems.map((item: { [key: string]: any }) => (
              <div className='collection-page__item' key={item.id}>
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
