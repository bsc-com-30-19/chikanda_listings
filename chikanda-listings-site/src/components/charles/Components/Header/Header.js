import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoomAvailability from '../../Room';
import ToiletTypes from '../../Toilet';

const Header = () => {
  return (
    

<BrowserRouter>
<Routes>
  <Route path="/" element={<HostelName />}>
    <Route index element={<HostelName />} />
   
   
  </Route>
</Routes>
</BrowserRouter>
  )
}

export default Header;