import { combineReducers } from '@reduxjs/toolkit'


import cartSlicer from '../slicers/cartSlicer'

export const rootReducer = combineReducers({
    
    cartSlicer:cartSlicer
})


export default rootReducer