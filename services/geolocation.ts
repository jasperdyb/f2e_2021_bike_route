const axios = require("axios");

export const getCurrentPosition = () => {
  let status = "uninitialized";
  let message = "Navigator not found";

  let location = {
    latitude: 0,
    longitude: 0,
  };

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    status = "success";
    location = {
      latitude,
      longitude,
    };
  };

  const error = () => {
    status = "error";
    message = "Unable to retrieve your location";
  };

  if (
    typeof window !== "undefined" &&
    typeof window.navigator !== "undefined"
  ) {
    if (!navigator.geolocation) {
      status = "error";
      message = "Geolocation is not supported by your browser";
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return {
    status,
    message,
    location,
  };
};

type Location = {
  latitude: number;
  longitude: number;
};

export const getGeocoding = async (address: string) => {
  const url = (location: Location) =>
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address
      .split(" ")
      .join("+")}&key=${process.env.GOOGLE_GEOCODING_API_KEY}`;

  try {
    const response = await axios.get(url);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getGeocodingReverse = async (location: Location) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${process.env.GOOGLE_GEOCODING_API_KEY}`;

  try {
    const response = await axios.get(url);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
