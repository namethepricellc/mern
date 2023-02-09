import { useDispatch } from 'react-redux'
import { deleteStrain } from '../features/strains/strainSlice'

function StrainItem({ strain }) {
  const dispatch = useDispatch()

  return (
    <div className='strain'>
      <div>{new Date(strain.createdAt).toLocaleDateString('en-US')}</div>
      <h2>{strain.text}</h2>
      <button onClick={() => dispatch(deleteStrain(strain.id))}>Delete</button>
    </div>
  )
}

export default StrainItem
