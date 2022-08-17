import { getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { colRef } from "../firebase/Firebase"


const [products, setProducts] = useState([])

  useEffect(() => {
   const getUsers = async () => {
    const data = await getDocs(colRef)
    setProducts(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    
  }
   getUsers()
  }, [])

  export {products}

