import { BikeStation } from './station.types';

export interface Location {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface BikeShare {
  id: string;
  name: string;
  company?: string[];
  location: Location;
  stations: BikeStation[];
  gbfs_href?: string;
  href?: string;
}

export interface BikeSharesResponse {
  bikeShares: BikeShare[];
}
