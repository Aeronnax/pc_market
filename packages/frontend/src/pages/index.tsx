import { useEffect } from 'react';
import { instance } from '../shared/api/instance';

export default function Page() {
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
  return <h1>Hello, Next.js!</h1>;
}
