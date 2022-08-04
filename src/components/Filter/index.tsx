import './Filter.scss'

import { Typography } from '@mui/material'

import { useAppDispatch, useAppSelector } from '../../store'
import { clearCollectionFilters, setCollectionFilters } from '../../store/collectionSlice'
import { collectionFiltersSelector, collectionSelector } from '../../store/selectors'
import CustButton from '../CustButton'
import ErrorBoundary from '../ErrorBoundary'
import TraitsBlock from '../TraitsBlock'

function Filter() {
  const dispatch = useAppDispatch()
  const collection = useAppSelector(collectionSelector)
  const collectionFilters = useAppSelector(collectionFiltersSelector)

  const addCollectionFilter = ({ value, trait_type }) => {
    dispatch(setCollectionFilters({ value, trait_type }))
  }

  const clearFilter = () => {
    dispatch(clearCollectionFilters())
  }

  try {
    return (
      <div className='filter'>
        {collectionFilters.length > 0 && (
          <div className='filter__clear'>
            <CustButton text={`Clear ${collectionFilters.length} filters`} onClick={clearFilter} />
          </div>
        )}
        {Object.keys(collection.traits).map((item: string) => {
          const addFilterValue = (value: string) => {
            addCollectionFilter({ value, trait_type: item })
          }

          return (
            <div key={item} className='filter__trait-wrapper'>
              <Typography variant='h6'>{item}</Typography>
              <TraitsBlock
                traitType={item}
                traits={collection.traits[item]}
                addFilterValue={addFilterValue}
                collectionFilters={collectionFilters}
              />
            </div>
          )
        })}
      </div>
    )
  } catch (e) {
    return <ErrorBoundary error={e} />
  }
}

export default Filter
