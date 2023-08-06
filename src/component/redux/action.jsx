export const Data = 'Data';

export const sendJsonData = (jsonData) => ({
  type: Data,
  payload: jsonData,
});
