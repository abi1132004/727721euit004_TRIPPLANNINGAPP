import React, { useContext } from 'react'
import { HotelDetail, HotelRoomDetail } from './HotelDetail'
import { Card } from './Slider'
import WrapperContainer from './WrapperContainer'
import SearchRooms from './SearchRooms'
import { Link } from 'react-router-dom'
import Contex from './Contex'
import './cat.css'
const CategoryPage = () => {

  const {Room, Guest, PriceRange} = useContext(Contex)

  let detail = HotelRoomDetail
  if (Room !== '.' && Room !== 'All') {
    detail = HotelRoomDetail.filter(item => item.type === Room);
  }
  if (Guest !== '') {
    detail = detail.filter(item => item.capacity === Guest);
  }
  if (PriceRange !== '') {
    detail = detail.filter(item => item.price === PriceRange);
  }

  return (
    <div className="bg-[#d27548]">
      <Link to="/Mainpage"><button class="button-15" role="button">Back</button></Link>
      <WrapperContainer>
      <SearchRooms />
      <div id="showcase-Section" className="flex flex-wrap flex-col md:flex-row justify-between items-center pt-8">
        {detail.map(detail => (
        <Link to={`/SingleHotelView/${detail.id}`}><Card detail={detail} key={detail.id}/></Link>
        ) )}
      </div>
      </WrapperContainer>
    </div>
  )
}

export default CategoryPage;
