import React from 'react'
import './PriceingStyls.css'


const Pricing = () => {
  return (
    <div>
        <div className='pricing'>
            <div className='card-container'>
        <div className='card'>
            <h3>-BEGINNER-</h3>
            <span className='bar'></span>
            <p className='btc'>$19.95
            / user / month</p>
            <p> - Daily Quant Scores for 3,500 U.S. stocks -</p>
            <p> -  Daily BUY/SELL signals on 3,500 U.S. stocks- </p>
            <p>-Email alerts on the stocks in your Watchlist - </p>
            <p>-Up to 15 stocks in the Watchlist - </p>
            <button type='button' className='btn_beginner btn'>BUY NOW</button>
           
       </div>
       <div className='card'>
            <h3>-MAIN-</h3>
            <span className='bar'></span>
            <p className='btc'>$39.95
            / user / month</p>
            <p> - Twitter Analytics -</p>
            <p> - Up to 50 stocks in the Watchlist- </p>
            <p>-Stock & Model Detailed Analytics - </p>
            <p>-Stock Smart Search - </p>
            <p>- Company News Intelligence - </p>
            <button type='button' className='btn_main btn'>BUY NOW</button>
          
       </div>
       <div className='card'>
            <h3>-PRO-</h3>
            <span className='bar'></span>
            <p className='btc'>$79.00
            / user / month</p>
            <p> - Unlimited stocks in the Watchlist-</p>
            <p> - Stock Smart Search- </p>
            <p>- Business Analytics - </p>
            <p>-API access to scores and signals - </p>
            <p>- Company Basic Information - </p>   
            <button type='button' className='btn_pro btn'>BUY NOW</button>          
            
       </div>
       <div className='card'>
            <h3>-VIP-</h3>
            <span className='bar'></span>
            <p className='btc'>$345.00
            / user / month</p>
            <p> - Daily Quant Scores for 3,500 U.S. stocks -</p>
            <p> - Stock Smart Search- </p>
            <p>-Business Analytics - </p>
            <p>-API access to scores and signals - </p>
            <p> - Ability to integrate your - </p>
            <button type='button' className='btn_vip btn'>BUY NOW</button>
      </div>

    </div>

</div>

    </div>
  )
}

export default Pricing