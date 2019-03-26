// usersRepository.js

import Repository from './Reporistory';

const resource = '/users';
export default {
  get() {
    return Repository.get(`${resource}`);
  },

  getVehicle(plate) {
    return Repository.get(`${resource}/${plate}`);
  },

  createVehicle(payload) {
    return Repository.post(`${resource}`, payload);
  }
};