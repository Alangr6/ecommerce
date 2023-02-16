import { collection, getDocs, query, where } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebase/Firebase'
import { actionTypes } from '../../reducer/Reducer'
import { useStateValue } from '../../reducer/StateProvider'



export const useHandleSignOut = () => {
  const [{ user }, dispatch] = useStateValue()
  const navigate = useNavigate()

  const handleAuthSignOut = async () => {
    if (user) {
      auth.signOut()

      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      })
      navigate('/login')
      setTimeout(() => {
        window.location.reload()
      }, 1)
    }
  }

  return handleAuthSignOut
}

