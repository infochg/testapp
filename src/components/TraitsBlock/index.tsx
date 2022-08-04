import './TraitsBlock.scss'

import { arraysChecker, capitalizeFirstLetter } from '../../utils/helpers'
import ErrorBoundary from '../ErrorBoundary'

interface TraitsBlockProps {
  traitType: string
  traits: object
  addFilterValue: (a: string) => void
  collectionFilters: Array<object>
}

function TraitsBlock({ traitType, traits, addFilterValue, collectionFilters }: TraitsBlockProps) {
  try {
    return (
      <div className='trait'>
        {Object.keys(traits).map((item: string) => {
          const capitalizedItem = capitalizeFirstLetter(item)
          const filter = () => {
            addFilterValue(capitalizedItem)
          }
          return (
            <div
              key={item}
              className={`trait__parameter ${
                arraysChecker(collectionFilters, [{ value: capitalizedItem, 'trait_type': traitType }])
                  ? 'trait__parameter--active'
                  : ''
              }`}
              role='presentation'
              onClick={filter}
            >
              <div className='trait__key'>{capitalizedItem}</div>
              <div className='trait__value'>{traits[item]}</div>
            </div>
          )
        })}
      </div>
    )
  } catch (e) {
    return <ErrorBoundary error={e} />
  }
}

export default TraitsBlock
