import { FC, useEffect } from 'react';
import { instance } from '../../shared/api/instance';
import MainTemplate from '../../widgets/template/MainTemplate/MainTemplate';
import ProductItemModule from '../../widgets/market/ProductItemModule/ProductItemModule';

const Market: FC = () => {
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

  return (
    <MainTemplate>
      <ProductItemModule />
    </MainTemplate>
  );
};

export default Market;
