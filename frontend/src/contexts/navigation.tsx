import React, { createContext, useState } from 'react';

interface INavigationContext {
  enabled: boolean;
  setEnabled(enabled: boolean): void;
}

const NavigationContext = createContext<INavigationContext>(
  {} as INavigationContext
);

const NavigationProvider: React.FC = ({ children }) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <NavigationContext.Provider
      value={{
        enabled,
        setEnabled,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };
