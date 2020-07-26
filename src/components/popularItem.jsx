import React, { Component } from 'react';
class PopularItem extends Component {
    state = {  }
    render() { 
        return (  
            <div className="item-content">
                <img src={this.props.image} alt=""/>
                <div>

                  <h5>{this.props.name}    {this.props.price}</h5>  
                    
                </div>
            </div>
        );
    }
}
 
export default PopularItem;