import { useEffect } from 'react';
import { instance } from '../../shared/api/instance';
import Market from '../../pagesFsd/market/Market';
import { NextPage } from 'next';

const Home: NextPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/users');
        console.log(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);
  return <Market />;
};

export default Home;
