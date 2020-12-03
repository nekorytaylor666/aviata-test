import results from '@/data/results.json';
import { Flight } from '../interface/Data/DataInterfaces';

export const getAirlines = () => {
  return results.airlines;
};

export const getAllFlights = (): Flight[] => {
  const res = (results.flights as unknown) as Flight[];
  console.log(res);
  return res;
};
