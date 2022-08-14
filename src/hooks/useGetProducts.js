import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetProducts = (API) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const axiosNotes = async () => {
      const response = await axios(API)
      setProducts(response.data)
    }
    axiosNotes()
  }, [API])
  return {
    products,
  }
}

export default useGetProducts
