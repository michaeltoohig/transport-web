// RepositoryFactory.js

import VechilesRepository from './vehiclesRepository';

const repositories = {
  vehicles: VechilesRepository,
  // other
};

export const RepositoryFactory = {
  get: name => repositories[name],
};
