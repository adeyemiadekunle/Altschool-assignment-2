import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary'

const Products = () => {
  return (
    <>
      <div className="products">
        <h3>This is Nested Route</h3>
        <div>
       
        </div>

        <div className="productlink">
          <Link to='featured'>Featured</Link>
          <Link to='new'>New</Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Products;
