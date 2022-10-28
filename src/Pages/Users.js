import React, { useState } from 'react';
import useFetch from './useFetch';

const Users = () => {
  const [page, setpage] = useState(1);

  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );

  // const { loading, error, data } = useFetch(
  //   `https://randomuser.me/api/?results=200&seed=abc`
  // );


  console.log({ loading, error, data });

  // step1
  const PER_PAGE = 10;
  // step2
  const total = data?.results?.length;
  // step3
  const pages = 20;

  const skip = page * PER_PAGE - PER_PAGE;


  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <div>
      <h2>List of User details</h2>
      {/* List of Data */}
      {/* slice(0, 10) */}

      <input type="search" placeholder="Search User" />

      {data?.results
      //.slice(skip, skip + PER_PAGE)
      .map((each, index) => {
        
        return (
             
          <div  key={index} className='userlist'>

          <li>{`${index + 1}.`}</li>
          <p>{each.name.title}</p>
          <p>{each.name.first}</p>
          <p>{each.name.last}</p>
          </div>

        );
      })}

      <p className="pagination">
        Pages: {page} of {pages}
      </p>

      {/* Previous Button */}
      {
        <button
          disabled={page <= 1}
          onClick={() => setpage((prev) => prev - 1)}
        >
        prev
        </button>
      }

      {/* Next Button */}
      {
        <button
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setpage((prev) => prev + 1)}
        >
          next
        </button>
      }

      {/* another magic here */}
      {Array.from({ length: pages }, (value, index) => index + 1).map(
        (each) => (
          <button onClick={() => setpage(each)}>{each}</button>
        )
      )}
    </div>
  );
};

export default Users;
