import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
if(!room){
  return(
    <div className="error">
       <h3>Room Not found.</h3>
       <Link to="/rooms" className="btn btn-primary">Return to rooms</Link>

    </div>  
  )
}
const {name,description,price,size,capacity,extras,pets,images} = room
      return (
     <div>
       <StyledHero img={images[0]}>
<Banner title={name} subtitle={`$${price}`}>
    <Link to="/rooms" className="btn btn-primary">Rooms</Link>
</Banner>
</StyledHero>  
<section className="single-room">
<div className="single-room-images">
  {images.map((image,index) => 
    <img key={index} src={image} alt={name}/> )}
</div>
<div className="single-room-info">
  <article className="desc">
    <h3>Details</h3>
  <p>{description}</p>

  </article>
  <article className="info">
    <h3>Info</h3>
    <h6>Price : ${price}</h6>
    <h6>Size : {size}</h6>
    <h6>Max Capacity : {capacity}</h6>
    <h6>Pets : {pets ? 'Pets Allowed':'No pets allowed'}</h6>

  </article>
</div>
</section>
<section className="room-extras">
  <h6>Extras</h6>
<ul className="extras">
  {extras.map((extra,index) => 
    <li key={index}>{extra}</li>
  )}
</ul>
</section>
   </div>
  );
  }
}