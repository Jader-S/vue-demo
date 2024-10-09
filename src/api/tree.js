// import request from './request.js';
import axios from 'axios';

export function getTreeApi() {
  return axios.get('/api/tree');
}
