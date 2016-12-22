/**
 * Created by yyj on 19/12/2016.
 */
import axios from 'axios';

export default function fetchComponentData(token = 'token') {
  const promises = [
    axios.get('http://localhost:3000/api/recipes'),
    axios.get(`http://localhost:3000/api/authenticate?token=${token}`),
  ];
  return Promise.all(promises);
}
