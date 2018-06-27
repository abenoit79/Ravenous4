//import business.css, react and Business.js
import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
//create BusinessList Component
class BusinessList extends React.Component {
  render(){
    return(
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id} />
          })
        }
      </div>
    );
  }
}
//export BusinessList
export default BusinessList;
