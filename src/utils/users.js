import React from "react";
import { LocationCityOutlined, PhoneAndroidOutlined } from "@material-ui/icons";

export const getUserDetails = (user) => {
  return [
    {
      icon: <LocationCityOutlined />,
      text: `Street: ${user.location.street.name}`,
    },
    {
      icon: <LocationCityOutlined />,
      text: `City: ${user.location.city}`,
    },
    {
      icon: <LocationCityOutlined />,
      text: `State: ${user.location.state}`,
    },
    {
      icon: <LocationCityOutlined />,
      text: `Postcode: ${user.location.postcode}`,
    },
    {
      icon: <PhoneAndroidOutlined />,
      text: `Postcode: ${user.phone}`,
    },
    {
      icon: <PhoneAndroidOutlined />,
      text: `Cell: ${user.cell}`,
    },
  ];
};
