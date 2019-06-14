import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
const Rooms = () => {
    return (
        <div>
        <Hero hero="defaultHero">
<Banner title="our rooms" subtitle="deluxe rooms starting at $299">
<Link to="/" className="btn btn-primary">Return Home</Link>
</Banner>
</Hero>
    </div>
    )
}

export default Rooms
