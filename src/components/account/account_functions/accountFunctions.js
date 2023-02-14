import { collection, getDocs, query, where } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebase/Firebase'
import { actionTypes } from '../../reducer/Reducer'
import { useStateValue } from '../../reducer/StateProvider'

export const getOrders = async (uid) => {
  const collectionRefOrders = collection(db, `customers/${uid}/payments`)
  const paidOrders = query(
    collectionRefOrders,
    where('status', '==', 'succeeded')
  )
  const snaps = await getDocs(paidOrders)
  const payments = snaps.docs.map((snap) => snap.data())
  return payments
}

export const HandleSignOut = () => {
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
