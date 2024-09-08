import { useEffect } from 'react';
import { instance } from '../shared/api/instance';

export default function Page() {
  useEffect(() => {
    instance.get('/users').then((response) => {
      console.log(response.data);
    });
  }, []);
  return <h1>Hello, Next.js!</h1>;
}
