import React, { Component } from 'react'
import {useStoreState} from 'easy-peasy'
export default class FeaturedRooms extends Component {

render() {
const todos = useStoreState(state => state.rooms.items);

        return (
            <div>
                
            </div>
        )
    }
}
