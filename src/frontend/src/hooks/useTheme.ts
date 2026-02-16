import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'theme';

type Theme = 'white' | 'black' | 'orange' | 'yellow';

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'white';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'black' : 'white';
}

function migrateOldTheme(stored: string | null): Theme | null {
  if (!stored) return null;
  if (stored === 'light') return 'white';
  if (stored === 'dark') return 'black';
  if (stored === 'white' || stored === 'black' || stored === 'orange' || stored === 'yellow') {
    return stored as Theme;
  }
  return null;
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'white';
  
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  const migrated = migrateOldTheme(stored);
  
  if (migrated) {
    if (stored !== migrated) {
      localStorage.setItem(THEME_STORAGE_KEY, migrated);
    }
    return migrated;
  }
  
  return getSystemTheme();
}

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return;
  
  document.documentElement.setAttribute('data-theme', theme);
  
  if (theme === 'black') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    applyTheme(newTheme);
  };

  return { theme, setTheme };
}
