export function getErrorMessage(error) {
  if (error.code === 'ECONNABORTED') {
    return 'Request timed out. Please check if the backend server is responding.';
  }

  if (!error.response) {
    return 'Network error. Please check if backend is running and CORS is enabled.';
  }

  const message = error.response?.data?.message || error.response?.data?.error;

  if (message) {
    return message;
  }

  if (error.response.status >= 500) {
    return 'Server error. Please try again later.';
  }

  return 'Something went wrong. Please try again.';
}
