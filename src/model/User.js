'use strict';

import axios from '../../node_modules/axios/dist/axios.min.js';
import config from '../config.js';

export default class User {
  constructor() {

  }

  static async getCurrent() {
    const response = await axios.get(`${config.serviceUrl}user`, { withCredentials:true });
    return response.data;
  }
}