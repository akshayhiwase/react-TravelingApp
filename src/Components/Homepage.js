import React from 'react'
import classes from './Homepage.module.css'



const Homepage = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.infoSection}>


                <div className={classes.infoDetail}>
                    <p>BX1225</p>
                </div>
                <div className={classes.flatDetail}>
                    <i class="fas fa-home"></i>
                    <p>House <br />2BHK</p>
                </div>
                <div className={classes.journeyDetail}>
                    <p>order Date July 9 at 9 pm</p>
                </div>
            </div>
            <div className={classes.travelingSection}>
                <div className={classes.travelFrom}>
                    <h4>Bengaluru</h4>
                    <p>Hsr Layout</p>
                </div>
                <div>
                    <div className={classes.travelTime}>
                        <p>Jul 18, at 08:00 AM</p>
                    </div>
                    <div className={classes.directionDiv}>
                        <i className="fas fa-arrow-right direction"></i>
                    </div>
                    <div className={classes.detailsBtn}>
                        <button>View More Details</button>
                    </div>
                </div>
                <div className={classes.travelingTo}>
                    <h4>Hydrabad</h4>
                    <p>MehendiPatnam</p>
                </div>
            </div>
            <div className={classes.travelInfo}>
                <h1>In Transit</h1>
                <p></p>
                <button></button>
            </div>

        </div>
    )

}

export default Homepage;