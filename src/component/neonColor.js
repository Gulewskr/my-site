import * as React from 'react'

const Colors = {
    "blue" : "#3219a3",
    "pink" : "#fc499f",
    "purple" : "#9110db",
    "red" : "#ff1010",
    "yellow" : "#b6a614",
    "green" : "#49af0d",
    "glb": "#19a36e",
    "rd": "#a3195b",
    "dark" : "#000000",
}

export const ThemeContext = React.createContext();

function getColorFromCookies(){
  if (typeof window !== `undefined`) {
    let cookies = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
    return cookies['color'] === undefined ? "blue" : cookies['color'];
  }else{
    return "blue";
  }
}

function ThemeContextProvider({ children }){
    const [color, changeColor] = React.useState(getColorFromCookies());
    
    const setColor = (v) => {
      changeColor(v);
      if (typeof window !== `undefined`) {
        document.cookie = "color=" + v;
      }
    }

    const value = React.useMemo(
      () => ({
        color,
        setColor
      }),
      [color, setColor],
    );

    return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    );
};


const useColor = () => {
    const {color, setColor} = React.useContext(ThemeContext);
    const c = Colors[color];
    return(
        {c, setColor}
    );
}

export {Colors, useColor}
export default ThemeContextProvider;