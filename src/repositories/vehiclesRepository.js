// vehiclesRepository.js

import Repository from './Reporistory';

const resource = '/vehicles';
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