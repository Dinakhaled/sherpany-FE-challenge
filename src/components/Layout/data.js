import React from "react";
import AccountBox from "@material-ui/icons/AccountBox";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";

export const SIDE_MENU = [
  {
    id: 1,
    text: "Users",
    slug: "/",
    icon: <AccountBox />,
  },
  {
    id: 2,
    text: "settings",
    slug: "/settings",
    icon: <SettingsApplicationsIcon />,
  },
];
