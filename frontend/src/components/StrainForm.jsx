import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createStrain } from '../features/strains/strainSlice'

function StrainForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createStrain({ text }))
    setText('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Strain</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>
            Add Strain
          </button>
        </div>
      </form>
    </section>
  )
}

export default StrainForm
