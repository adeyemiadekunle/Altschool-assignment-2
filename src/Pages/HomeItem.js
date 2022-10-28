import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';



const HomeIndex = () => {
  
  return (
    <div className="homeitem">
      <div>
        Please click the Arrow to navigate to Products Page{' '}
        <Link to="/product">
          <FaArrowRight className="ArrowLink" />
        </Link>{' '}
      </div>
    </div>
  );
};

const HomeItem = () => {
  const [explode, setExplode] = React.useState(false);
  return (
    <>
      <div>
        <HomeIndex />
        
      </div>
    </>
  );
};

export default HomeItem;
