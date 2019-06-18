import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {RoomConsumer} from '../context'
export default function RoomsContainer() {
    return (
        <div>
            <RoomConsumer>
                {value => {
                    const {loading,sortedRooms,rooms} = value
                    return (
                        <>
                        <RoomsFilter rooms={rooms}/>
                        <RoomsList rooms={sortedRooms}/>
                        </>
                    )
                }}
            </RoomConsumer>
         
        </div>
    )
}
