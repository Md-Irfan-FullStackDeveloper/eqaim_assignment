import React from 'react'
import { Route, Routes } from 'react-router'
import Blogpost from '../pages/Blogpost'
import Homepage from '../pages/Homepage'
import NewBlogpost from '../pages/NewBlogpost'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/:blogId' element={<Blogpost />} />
        <Route path='/newBlogpost' element={<NewBlogpost />} />
    </Routes>
  )
}

export default AllRoutes