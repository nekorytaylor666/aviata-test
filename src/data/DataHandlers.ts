import results from '@/data/results.json';
import { Flight } from '../interface/Data/DataInterfaces';

export const getAirlines = () => {
  return results.airlines;
};

export const getAllFlights = (): Flight[] => {
  return (results.flights as unknown) as Flight[];
};
