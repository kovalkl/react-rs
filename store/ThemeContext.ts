'use client';

import { createContext } from 'react';

const initialTheme = {
  isDarkTheme: false,
  toggleTheme: () => {},
};

export const ThemeContext = createContext(initialTheme);
