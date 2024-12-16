import { BikeShare, BikeSharesResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_BASE_URL = 'http://api.citybik.es/v2';

// ========= GET BIKE SHARES =========
// =================================
const getBikeShares = async () => {
  try {
    const response = await axios.get<BikeSharesResponse>(`${API_BASE_URL}/networks`);
    return {
      bikeShares: response.data,
    };
  } catch (error) {
    if (error instanceof Error) throw error;
  }
};

export const useGetBikeSharesQuery = () => {
  return useQuery({
    queryKey: ['bikeShares'],
    queryFn: getBikeShares,
  });
};

// ========= GET BIKE SHARE DETAILS =========
// ========================================
const getBikeShareDetails = async (bikeShareId: string) => {
  try {
    const response = await axios.get<{ network: BikeShare }>(
      `${API_BASE_URL}/networks/${bikeShareId}`,
    );
    const transformedData = {
      ...response.data.network,
      stations: response.data.network.stations.map((station: any) => ({
        ...station,
        available_slots: station.empty_slots,
        available_bikes: station.free_bikes,
        last_updated: station.timestamp,
        extra: {
          ...station.extra,
          has_payment_terminal: station.extra?.banking,
          total_slots: station.extra?.slots,
        },
      })),
    };
    return transformedData;
  } catch (error) {
    if (error instanceof Error) throw error;
  }
};

export const useGetBikeShareDetailsQuery = (bikeShareId: string) => {
  return useQuery({
    queryKey: ['bikeShare', bikeShareId],
    queryFn: () => getBikeShareDetails(bikeShareId),
    enabled: !!bikeShareId,
  });
};
