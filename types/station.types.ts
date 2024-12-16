export interface BikeStation {
  id: string;
  name: string;
  available_slots: number;
  available_bikes: number;
  latitude: number;
  longitude: number;
  last_updated: string;
  extra?: {
    address?: string;
    status?: STATION_STATUS;
    has_payment_terminal?: boolean;
    total_slots?: number;
  };
}

export enum STATION_STATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  MAINTENANCE = 'MAINTENANCE',
}
