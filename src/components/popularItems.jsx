import React, { Component } from 'react';
import PopularItem from './popularItem';
class PopularItems extends Component {
    state = { 
        popularItems:[
            {id: 1 , name: 'Wheat', price: '$2', image:'wheat.jpg'},
            {id: 2 , name: 'Corn', price: '$2', image:'corn.jpg'},
            {id: 3 , name: 'Rice', price: '$2', image:'rice.jpg'},
            {id: 4 , name: 'Banana', price: '$2', image:'banana.jpg'},
            {id: 5 , name: 'SugarCane', price: '$2', image:'sugarcane.jpg'},
            {id: 6 , name: 'GroundNut', price: '$2', image:'groundnut.jpg'},
        ]
     }
    render() { 
        return (  
            <div>
                <h3 className="popular-title">Popular Right Now</h3>
                <div className="items-list">
                {this.state.popularItems.map(item => 
                <PopularItem 
                key={item.id} 
                name={item.name} 
                price={item.price}
                image={item.image}/>
                )}
                </div>
            </div>
        );
    }
}
 
export default PopularItems;