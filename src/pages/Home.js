import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import StyledHero from '../components/StyledHero'
const Home = () => {
    return (
        <div>
            <Hero hero="defaultHero">
<Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
    <Link to="/rooms" className="btn btn-primary">Rooms</Link>
</Banner>
</Hero>
<Services/>
<FeaturedRooms/>
<StyledHero>hello</StyledHero>
        </div>
    )
}

export default Home
