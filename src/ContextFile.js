import React, { useState, useEffect } from 'react'

const contextVariable = React.createContext()

function ContextProviderComponent(props) {
    const [allphotos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url).then(res => res.json()).then(res => setPhotos(res))
        console.log('some')
    }, [])

    function toggleFavoriteFunc(id) {
        const updatedArr = allphotos.map(eachPic => {
            if (eachPic.id === id) {
                // console.log(eachPic.id)
                // console.log(!eachPic.isFavorite)
                return { ...eachPic, isFavorite: !eachPic.isFavorite }
            }
            return eachPic
        })
        setPhotos(updatedArr)
    }

    function pushingCart(item) {
        setCartItems((prevItem) => [...prevItem, item])
    }
    function filterItemFromCart(item) {
        const updatedFilteredArray = cartItems.filter(i => i.id !== item.id)
        setCartItems(updatedFilteredArray)
    }

    // console.log(cartItems)
    return (
        <contextVariable.Provider value={{ allphotos, toggleFavoriteFunc, pushingCart, cartItems, filterItemFromCart }}>
            {props.children}
        </contextVariable.Provider>
    )
}
export { ContextProviderComponent, contextVariable }
