import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import StrainForm from '../components/StrainForm'
import StrainItem from '../components/StrainItem'
import Spinner from '../components/Spinner'
import { getStrains, reset } from '../features/strains/strainSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
 
  const { user } = useSelector((state) => state.auth)
  const { strains, isLoading, isError, message } = useSelector((state) => state.strains)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getStrains())

    return () => {
      // cleanup
      dispatch(reset())
    }
  }, [user, navigate, dispatch, isError, message])

  if (isLoading) {
    return <Spinner />
  }

  return <>
    <section className="heading">
      <h1>Welcome {user && user.name}</h1>
      <p>Dashboard</p>    
    </section>

    <StrainForm />

    <section className="content">
      {strains.length > 0 ? (
        <div className="strains">
          {strains.map((strain) => (
            <StrainItem key={strain._id} strain={strain} />
          ))}
        </div>
      ) : (
        <h3>No Strains</h3>
      )}
    </section>

  </>
}

export default Dashboard