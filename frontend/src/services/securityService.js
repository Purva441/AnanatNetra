import axiosInstance from './axiosInstance';

export async function analyzeFinding(payload) {
  const response = await axiosInstance.post('/api/v1/analyze', payload);
  return response.data?.data || response.data;
}

export async function getHistory() {
  const response = await axiosInstance.get('/api/v1/history');
  return response.data?.data || response.data || [];
}
