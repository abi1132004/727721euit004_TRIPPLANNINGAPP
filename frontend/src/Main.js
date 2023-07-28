import React,{useEffect} from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'
import img9 from './assets/img9.jpg'
import img10 from './assets/img10.jpg'
import img11 from './assets/img11.jpg'
import img12 from './assets/img12.jpg'
import img13 from './assets/img13.jpg'
import img14 from './assets/img14.jpg'
import img15 from './assets/img15.jpg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import greenimg from './assets/greenery.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data=[
  {
    id:1,
    imgSrc:img1,
    desTitle:'Maldives',
    location:'Maldives Island',
    grade:'CULTURAL RELAX',
    fees:'Rs.30000',
    description:'The Maldives, officially the Republic of Maldives, is an archipelagic state and country in South Asia, situated in the Indian Ocean. It lies southwest of Sri Lanka and India, about 750 kilometres from the Asian continent mainland.'
  },
  {
    id:2,
    imgSrc:img2,
    desTitle:' Great Barrier Reef',
    location:'Australia',
    grade:'RELAX',
    fees:'Rs.70000',
    description:"Stretching for 2300 kilometres off the east coast of Australia, the Great Barrier Reef is one of nature's greatest marvels. It is officially the biggest structure made by living organisms and can be seen from even outer space!! Blessed with abundant marine flora and fauna,visitors are always enthralled by the sheer beauty of this unique ecosystem."
  },
  {
    id:3,
    imgSrc:img3,
    desTitle:'Phuket',
    location:'Thailand',
    grade:'CULTURAL RELAX',
    fees:'Rs.60000',
    description:'The largest Island in all of Thailand, Phuket has everything Thailand has to offer. Serviced by the Phuket International Airport, the island sees no dearth of travellers during any time of the year. Golden beaches, numerous offshore islands, upbeat markets, a high octane nightlife and thrilling watersports characterise Phuket in a nutshell.'
  },
  {
    id:4,
    imgSrc:img4,
    desTitle:'Bali',
    location:'Indonesia',
    grade:'CULTURAL RELAX',
    fees:'Rs.90000',
    description:"'Indonesia's most famous island, Bali is the best place for any tourist who needs a week of absolute relaxation, fragrant cuisine, scenic beauty and a galore of culture and tradition. With its elaborate temples, endless coastline, scenic coral reefs, waterfalls and retreats, Bali is indeed, a place of leisure and idyll, and simultaneously, a place for the adventurous and the explorers."
  },
  {
    id:5,
    imgSrc:img5,
    desTitle:'Costa Rica',
    location:'Panama',
    grade:'NATURE',
    fees:'Rs.50000',
    description:'Costa Rica, a Catholic country in Central America, shares its borders with Nicaragua and Panama. It has the Pacific Ocean to the west and Carribean Coast to the East. Dominated by Roman Catholics, it is a secular country and respects all religions. Costa Ricans or the people living in the country are called Ticos.'
  },
  {
    id:6,
    imgSrc:img6,
    desTitle:'Santorini',
    location:'Greece',
    grade:'NATURAL RELAX',
    fees:'Rs.200000',
    description:'Santorini is a volcano island just 200 km away from the mainland Greece. The place was formed after a large volcanic eruption that created a caldera. Santorini is famous for its amazing views, beautiful sunsets, destination weddings, and an active volcano.'
  },
  {
    id:7,
    imgSrc:img7,
    desTitle:'San Fransisco',
    location:'USA',
    grade:'STRUCTURAL CITY',
    fees:'Rs.100000',
    description:'San Francisco is one of the most important cities on the West Coast and all of the United States. It has been a major tourist destination since the 1960s, thanks to its wide array of attractions, fantastic views of the San Francisco Bay and brilliant summer weather. '
  },
  {
    id:8,
    imgSrc:img8,
    desTitle:'Mumbai',
    location:'Maharashtra',
    grade:'CITY',
    fees:'Rs.15000',
    description:'Mumbai is a beautifully blended melting pot of cultures and lifestyles. The city soaks in everything into its fabric, making it its very own. From European and Portuguese inhabitants who migrated years ago to the city, to upcoming actors struggling to make it big on the silver screen'
  },
  {
    id:9,
    imgSrc:img9,
    desTitle:'Amalfi',
    location:'Italy',
    grade:'CULTURAL RELAX',
    fees:'Rs.120000',
    description:"With bright and colourful ceramics, finely handcrafted paper and sandals and bewitching fragrances you will be completely spoilt for choice!! Shopping and food aside, Amalfi's top attractions like Saint Andrew's Cathedral and Chiostro del Paradiso are testaments to the architectural influences from the medieval period."
  },
  {
    id:10,
    imgSrc:img10,
    desTitle:'Bangkok',
    location:'Thailand',
    grade:'CULTURAL RELAX',
    fees:'Rs.140000',
    description:'Glittering with lights, a lot of hustle bustle and a little bit of chaos, Bangkok is the capital city of Thailand and is packed with tourist attractions - historical, religious or natural. A haven for shoppers, it attracts people from all over the world to its markets. It is often touted as the party capital of South East Asia.'
  },
  {
    id:11,
    imgSrc:img11,
    desTitle:'Mauritius',
    location:'Mauritius Island',
    grade:'CULTURAL RELAX',
    fees:'Rs.100000',
    description:'Regarded as the perfect destination for the quintessential honeymoon experience, Mauritius is a small country with a big heart. Located off the south-eastern coast of Africa, this island nation is a magnet for enthusiastic lovers and seekers of a tropical haven. Mauritius is no stranger to luxury resorts.'
  },
  {
    id:12,
    imgSrc:img12,
    desTitle:'Dubai',
    location:'UAE',
    grade:'CULTURAL RELAX',
    fees:'Rs.180000',
    description:'A city of many faces, Dubai is one of the most popular tourist destinations in the world. Home to the tallest tower in the world, the Burj Khalifa, this global city is known for its lavish architecture, incredible skylines and a plethora of tourist attractions that break records to be the tallest, longest and biggest.'
  },
  {
    id:13,
    imgSrc:img13,
    desTitle:'Marina Beach',
    location:'Chennai',
    grade:'CULTURAL RELAX',
    fees:'Rs.15000',
    description:"Marina Beach, or simply the Marina, is a natural urban beach in Chennai, Tamil Nadu, India, along the Bay of Bengal. The beach runs from near Fort St. George in the north to Foreshore Estate in the south, a distance of 6.0 km, making it the second longest urban beach in the world, after Cox's Bazar Beach."
  },
  {
    id:14,
    imgSrc:img14,
    desTitle:'Kolkata',
    location:'West Bengal',
    grade:'CULTURAL RELAX',
    fees:'Rs. 30000',
    description:"Kolkata, India's second biggest city, is a perpetually ongoing festival of human existence, concurrently luxurious and squalid, refined and frantic, pointedly futuristic, while beautifully in decay. A vibrant 350-year-old metropolis located on India's Eastern Coast, the capital of West Bengal thrives on contradictions and imposing spectacles; nothing is commonplace in this city."
  },
  {
    id:15,
    imgSrc:img15,
    desTitle:'AngKor Wat',
    location:'Cambodia',
    grade:'CULTURAL RELAX',
    fees:'Rs.100000',
    description:'This archaeological complex is spread around the area of 400 km2. The main attraction here is Angkor Wat, which is counted as one of the most amazing architectures worldwide. Once a Hindu temple and now a testament of prodigious Khmer Empire, the construction of Angkor Wat dates back to 12th century.'
  }
]
const Main = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])
  return (
    <section className='maincontainer section'>
      <div className="sectiontitle">
        <h3 data-aos="fade-right" className="sectitle">Most visited places</h3>
      </div>
      <div className="sectionbody grid">
        {
          Data.map(({id,imgSrc,desTitle,location,grade,fees,description})=>{
              return(
                <div data-aos="fade-up" key={id} className="singleDestination">
                  <div className="imagemain">
                    <img src={imgSrc} className="submainimg" alt={desTitle}/>
                  </div>
                  <div className="cardmain">
                    <h4 className="desTitle">{desTitle}</h4>
                    <span className="continentmain flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="namemain">{location}</span>
                    </span>
                    <div className='feesmain flex'>
                      <div className="grademain">
                        <span>{grade}<small className="smallmain">+..</small></span>
                      </div>
                      <div className="pricemain">
                        <h5>{desTitle}</h5>
                      </div>
                    </div>
                    <div className="descmain">
                        <p>{description}</p>
                    </div>
                    <Link to="/Aboutus"><button className="btnmain flex">
                      DETAILS
                    </button></Link>
                  </div>
                </div>
              )
            })
        }
      </div>
    </section>
  )
}

export default Main