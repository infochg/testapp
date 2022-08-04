import './Item.scss'

import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import fetchData from '../../api/fetch'
import CustButton from '../../components/CustButton'
import Preloader from '../../components/Preloader'
import { useAppDispatch, useAppSelector } from '../../store'
import { setItem } from '../../store/itemSlice'
import { setErrorNotification } from '../../store/notificationsSlice'
import { collectionSelector, itemSelector } from '../../store/selectors'

function Item() {
  const dispatch = useAppDispatch()
  const item = useAppSelector(itemSelector)
  const collection = useAppSelector(collectionSelector)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const contract = queryParams.get('contract')
    const id = queryParams.get('id')

    if (item.token_id === '' && contract && id) {
      fetchData({
        link: `https://api.protorapi.com/api/nft/ethereum/${contract}/token/${id}`,
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'x-api-key': process.env.REACT_APP_PROTOR_API,
        },
        onSuccess: (data) => dispatch(setItem(data.data)),
        onError: (data) => dispatch(setErrorNotification(data)),
        showLoader: (bool) => setIsLoading(bool),
      })
    }
  }, [dispatch, location, item.token_id])

  const goBack = () => navigate(-1)

  return (
    <div className='item-page'>
      {!isLoading && item ? (
        <>
          {collection.slug !== '' && (
            <div className='item-page__top-line'>
              <CustButton text='Back' onClick={goBack} />
            </div>
          )}
          <div className='item-page__image'>
            {item.metadata.image && <img src={item.metadata.image} alt='' />}
          </div>
          <div className='item-page__params-wrapper'>
            <div className='item-page__param'>
              <div className='item-page__param-name'>Attributes</div>
              <div className='item-page__param-value'>{item.attributes.length}</div>
            </div>
            {item.attributes.length > 0 &&
              item.attributes.map((attr: { trait_type: string; value: string }) => (
                <div className='item-page__param' key={attr.trait_type}>
                  <div className='item-page__param-name'>{attr.trait_type}</div>
                  <div className='item-page__param-value'>{attr.value}</div>
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

export default Item
