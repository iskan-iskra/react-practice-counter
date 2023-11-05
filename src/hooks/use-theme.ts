import { useEffect, useState } from 'react';
import { TiThemeState, TiUseTheme } from '../types';

export default function useTheme(): TiUseTheme {
  const [theme, setTheme] = useState<TiThemeState>(
    (localStorage.getItem('theme') as TiThemeState) || 'light',
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, []);

  const toggleTheme = (): void => {
    const nextTheme: TiThemeState = theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', nextTheme);

    document.documentElement.setAttribute('data-bs-theme', nextTheme);

    setTheme(nextTheme);
  };

  return { theme, toggleTheme };
}
