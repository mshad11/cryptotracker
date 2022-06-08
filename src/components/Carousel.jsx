import React, { useEffect, useState } from 'react'
import { TrendingCoins } from '../Api'
import { CryptoState } from '../CryptoContext'
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel'




function Carousel() {
    const[trending, setTrending] = useState([]);
    const {currency, symbol} = CryptoState()

const useStyles = makeStyles(() => ({
    carousel:{
        height: '50%',
        display:'flex',
        alignItems:'center'
    },

    carouselItem:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        cursor:'pointer',
        color: 'white',
        textTransform:'uppercase'



    }

}))

const classes = useStyles()

const items = trending?.map((coin) =>{
    let profit = coin?.price_change_percentage_24h >0;
    return(
        <p className= {classes.carouselItem}>
            <img 
            src={coin.image}
            alt={coin.name}
            height = '80'
            style={{marginBottom:10}}
            />
            <span>{coin?.symbol}</span>
            <span
            style={{
                color:profit > 0 ? 'green' : 'red',
                fontweight: '500'
             }}>
                {profit && "+"}
                {coin?.price_change_percentage_24h?.toFixed(2)} %</span>
                <span style={{fontSize: 22, fontWeight:500 }}>{symbol}</span>
                <span style={{fontSize: 22, fontWeight:500 }}>{symbol} {coin?.price_change_24h}</span>
        </p>
    )
})

    const fetchTrendingCoins = async () => {
        const{data} = await axios.get(TrendingCoins(currency))
        console.log(data);
        setTrending(data);
    };
    useEffect(() => {
        fetchTrendingCoins()
    },[currency])

//this is for responsive in AliceCarousel if 0px 0r greater them items diaplay 2
//if 512 px or greater items display 4
const responsive ={
    0:{
        items:2
    },
    512:{
        items:4
    }
}


  return (
    <div className= {classes.carousel}>
      <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration= {1500}
      disableButtonsControls
      disableDotsControls
      responsive={responsive }
      items={items}
      autoPlay
      >

      </AliceCarousel>
    </div>
  )
}

export default Carousel
