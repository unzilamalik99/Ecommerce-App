import React  ,{createContext,useState,useEffect} from 'react'
export const ShopContext =createContext();
const ShopProvider = ({children}) => {
    const [Products,setProducts]=useState([])
    useEffect(()=>{
        const fetchProduct = async ()=>{
            const response=await fetch('https://fakestoreapi.com/products');
            const data =await response.json();
            setProducts(data)
        
        };
        fetchProduct();
    },[])
  return <ShopContext.Provider value={{Products}}>
    {children}
  </ShopContext.Provider>
  
}

export default ShopProvider