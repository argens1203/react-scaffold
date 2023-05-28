export const BASE_URL = process.env.REACT_APP_API_URL;
export const IS_TEST = process.env.NODE_ENV === 'test';
export const IS_MOCK_API =
    process.env.REACT_APP_MOCK_API?.toLowerCase() === 'true';
