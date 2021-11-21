import type { Location } from "types/geolocation";

const axios = require("axios");

export const getCurrentPosition = (
  successCallback: PositionCallback,
  errorCallback: PositionErrorCallback,
  options?: PositionOptions
) => {
  if (
    typeof window !== "undefined" &&
    typeof window.navigator !== "undefined"
  ) {
    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );
  }
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
  console.log("==== getGeocodingReverse process.env ===", process.env);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${process.env.GOOGLE_GEOCODING_API_KEY}`;
  console.log("=== getGeocodingReverse url ===", url);
  try {
    const response = await axios.get(url);
    console.log("=== getGeocodingReverse response ===", response);
    if ("error_message" in response.data) {
      throw new Error(response.data["error_message"]);
    } else if ("results" in response.data) {
      if (response.data.results.length) {
        return response.data.results[0].formatted_address;
      }
    }
  } catch (error) {
    console.log("=== getGeocodingReverse error ===", error);
    console.error(error);
    return null;
  }
};