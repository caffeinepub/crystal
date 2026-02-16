import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useColorScheme } from '../hooks/useColorScheme';
import { Button } from '@/components/ui/button';

export function ThemeToggleBar() {
  const { theme, setTheme } = useTheme();
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleColorScheme = () => {
    if (colorScheme === 'blue') {
      setColorScheme('purple');
    } else if (colorScheme === 'purple') {
      setColorScheme('green');
    } else {
      setColorScheme('blue');
    }
  };

  const getColorSchemeLabel = () => {
    if (colorScheme === 'blue') return 'Blue';
    if (colorScheme === 'purple') return 'Purple';
    return 'Green';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center p-4 pointer-events-none">
      <div className="pointer-events-auto bg-card/80 backdrop-blur-md border border-border rounded-full shadow-glass px-4 py-2 flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className="flex items-center gap-2 hover:bg-accent/50"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <>
              <Moon className="h-4 w-4" />
              <span className="text-sm font-medium">Dark Mode</span>
            </>
          ) : (
            <>
              <Sun className="h-4 w-4" />
              <span className="text-sm font-medium">Light Mode</span>
            </>
          )}
        </Button>
        
        <div className="h-6 w-px bg-border" />
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleColorScheme}
            className="flex items-center gap-2 hover:bg-accent/50"
            aria-label="Switch between Blue, Purple, and Green color schemes"
          >
            <span className="text-sm font-medium text-foreground">
              {getColorSchemeLabel()}
            </span>
          </Button>
          
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </div>
  );
}
