import React from 'react'
import {Container, makeStyles, Typography} from '@material-ui/core'
import Carousel from './Carousel'

const useStyles = makeStyles(() => ({
    banner:{
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7bc4LdY7rolWK1iK6WV0JbkJ18WuS2Gd1ig&usqp=CAU)'
    },

    bannerContent:{
      height: '400px',
      display: 'flex',
      flexDirection:'column',
      paddingTop: '25px',
      justifyContent: 'space-around'
},
  tagline:{
    display:'flex',
    height: '40%',
    flexDirection:'column',
    textAlign: 'center'

  }

}))


function Banner() {
    const classes = useStyles()
  return (
    <div className= {classes.banner}>
      <Container className = {classes.bannerContent}>
     <div className= {classes.tagline}>
       <Typography
       variant='h2'
       style={{
         fontWeight:'gold',
         marginBottom: '15'
       }}
       >
         CryptoTracker
       </Typography>
       
       <Typography
       variant='subtitle2'
       style={{
         color: 'darkgray',
         textTransform: 'capitalize'
       }}
       >
         Get all th info about your favourite CryptoCurrency
       </Typography>




     </div>
     <Carousel/>
      </Container>
    </div>
  )
}

export default Banner
