import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon} from '@mui/material'
import './Homepage.css'
import React from 'react'
import HotelIcon from '@mui/icons-material/Hotel';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import {Logout,Settings,PersonAdd} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
function Homepage() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
<div className="hnavbar1">
  <ul classNam="list1">
   <HomeIcon sx={{ fontSize: 35,color:"black" }}className='just'></HomeIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <HotelIcon  sx={{ fontSize:  35 ,color:"black"  }} className='just'></HotelIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <CategoryIcon  sx={{ fontSize: 35 ,color:"black" }} className='just'></CategoryIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <LocalOfferIcon sx={{ fontSize: 35,color:"black"  }} className='just'></LocalOfferIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <RecentActorsIcon sx={{ fontSize: 35,color:"black"  }} className='just'></RecentActorsIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ul>

   <div className='home'>
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            >
            <Avatar sx={{ width: 32, height: 32 ,bgcolor : "black"  }}>A</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
            elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                },
                '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                },
            },
        }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <FavoriteIcon>
            <Settings fontSize="small" />
          </FavoriteIcon>
          &nbsp;&nbsp;&nbsp;Favorites
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
          </div>
          </div>
        <div className="boxes12">
   <div className='sc1'>

   <input type='search' placeholder='Search ....' className='search1'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Button variant="contained" className='homebutton1' sx={{ fontSize: 22 ,bgcolor: "#66FFB2",color:"black"}}>Search</Button><br></br><br></br>
   </div>
   <div className='homecard1'>
  
    <Card sx={{ maxWidth: 345 }}>
      <div>
      <CardMedia
        sx={{ height: 170 }}
        image="https://images.pexels.com/photos/1446624/pexels-photo-1446624.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="paris"
      /></div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         PARIS
        </Typography>
        <Typography variant="body2" color="text.primary">
        Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">To continue</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://images.pexels.com/photos/1714455/pexels-photo-1714455.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Philipines"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         PHILIPPINES
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Philippines, officially the Republic of the Philippines, is an archipelagic country in Southeast Asia. In the western Pacific Ocean, it consists of 7,641 islands which are broadly categorized in three main geographical divisions from north to south: Luzon, Visayas, and Mindanao.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">To continue</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Maldives"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          MALDIVES
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Maldives, officially the Republic of Maldives, is an archipelagic state and country in South Asia, situated in the Indian Ocean. It lies southwest of Sri Lanka and India, about 750 kilometres from the Asian continent's mainland.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">To continue</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=600"
        title="vietnam"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         VIETNAM
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities. Hanoi, the capital, pays homage to the nation’s iconic Communist-era leader, Ho Chi Minh, via a huge marble mausoleum. Ho Chi Minh City (formerly Saigon) has French colonial landmarks, plus Vietnamese War history museums and the Củ Chi tunnels, used by Viet Cong soldiers.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">To continue</Button>
      </CardActions>
    </Card>
   
   </div>
   </div>
    </>
  )
}

export default Homepage