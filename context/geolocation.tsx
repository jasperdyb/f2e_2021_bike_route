import React, { createContext, useContext, useState, useEffect } from "react";
import type { Location } from "types/geolocation";

import { getCurrentPosition, getGeocodingReverse } from "services/geolocation";

export type GeolocationContextType = {
  location: Location;
  setLocation: (l: Location) => void;
  address: string;
  setAddress: (a: string) => void;
  autoAddress: boolean;
  setAutoAddress: (a: boolean) => void;
};

export const initValues = {
  location: {
    latitude: 0,
    longitude: 0,
  },
  setLocation: () => {},
  address: "",
  setAddress: () => {},
  autoAddress: false,
  setAutoAddress: () => {},
};

export const GeolocationContext =
  createContext<GeolocationContextType>(initValues);
export const useGeolocationContext = () => useContext(GeolocationContext);

export const GeolocationContextProvider: React.FC = (props) => {
  // this state will be shared with all components
  const [location, setLocation] = useState(initValues.location);
  const [address, setAddress] = useState(initValues.address);
  const [autoAddress, setAutoAddress] = useState(initValues.autoAddress);

  useEffect(() => {
    console.log("=== autoAddress updated ===");
    if (autoAddress) {
      getCurrentPosition(
        (p) => {
          console.log("=== getCurrentPosition success ===", p);
          setLocation(p.coords);
        },
        (e) => {
          console.log(e.message);
        }
      );
    }
  }, [autoAddress]);

  useEffect(() => {
    const checkAddress = async () => {
      const searchedAddress = await getGeocodingReverse({
        latitude: location.latitude,
        longitude: location.longitude,
      });
      if (searchedAddress) {
        setAddress(searchedAddress);
      }
    };

    checkAddress();
  }, [location]);

  return (
    // this is the provider providing state
    <GeolocationContext.Provider
      value={{
        location,
        setLocation,
        address,
        setAddress,
        autoAddress,
        setAutoAddress,
      }}
    >
      {props.children}
    </GeolocationContext.Provider>
  );
};
