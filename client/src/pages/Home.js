import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJerseys } from '../redux/jerseySlice';

const Home = () => {
  const dispatch = useDispatch();
  const { jerseys, status } = useSelector((state) => state.jersey);

  useEffect(() => {
    dispatch(fetchJerseys());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {status === 'loading' && <p>Loading...</p>}
      {jerseys.map(jersey => (
        <div key={jersey._id}>
          <img src={jersey.imageUrl} alt={jersey.name} />
          <h2>{jersey.name}</h2>
          <p>${jersey.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
