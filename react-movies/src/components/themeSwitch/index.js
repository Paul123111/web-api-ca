import React, { useContext } from "react";
import Switch from '@mui/material/Switch';
import { ThemeContext } from "../../contexts/themeContext";

export default function ThemeSwitch() {
  const context = useContext(ThemeContext);
  console.log({...context.theme});

  const handleChange = () => {
    return context.changeTheme;
  };

  return (
    <Switch size="medium" onChange={handleChange}/>
  );
}