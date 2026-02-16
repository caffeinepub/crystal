import { Palette } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useColorScheme } from '../hooks/useColorScheme';
import { Button } from '@/components/ui/button';

export function ThemeToggleBar() {
  const { theme, setTheme } = useTheme();
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleTheme = () => {
    if (theme === 'white') {
      setTheme('black');
    } else {
      setTheme('white');
    }
  };

  const toggleColorScheme = () => {
    if (colorScheme === 'purple') {
      setColorScheme('blue');
    } else if (colorScheme === 'blue') {
      setColorScheme('green');
    } else if (colorScheme === 'green') {
      setColorScheme('orange');
    } else if (colorScheme === 'orange') {
      setColorScheme('yellow');
    } else if (colorScheme === 'yellow') {
      setColorScheme('red');
    } else if (colorScheme === 'red') {
      setColorScheme('white');
    } else {
      setColorScheme('purple');
    }
  };

  const getThemeLabel = () => {
    if (theme === 'white') return 'White';
    return 'Black';
  };

  const getColorSchemeLabel = () => {
    if (colorScheme === 'purple') return 'Purple';
    if (colorScheme === 'blue') return 'Blue';
    if (colorScheme === 'green') return 'Green';
    if (colorScheme === 'orange') return 'Orange';
    if (colorScheme === 'yellow') return 'Yellow';
    if (colorScheme === 'red') return 'Red';
    return 'White';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center p-4 pointer-events-none">
      <div className="pointer-events-auto bg-card/80 backdrop-blur-md border border-border rounded-full shadow-glass px-4 py-2 flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className="flex items-center gap-2 hover:bg-accent/50"
          aria-label={`Switch theme. Current: ${getThemeLabel()}. Click to cycle through White and Black themes.`}
        >
          <Palette className="h-4 w-4" />
          <span className="text-sm font-medium">{getThemeLabel()}</span>
        </Button>
        
        <div className="h-6 w-px bg-border" />
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleColorScheme}
            className="flex items-center gap-2 hover:bg-accent/50"
            aria-label="Switch between Purple, Blue, Green, Orange, Yellow, Red, and White color schemes"
          >
            <span className="text-sm font-medium text-foreground">
              {getColorSchemeLabel()}
            </span>
          </Button>
          
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-ring ring-offset-2 ring-offset-background">
            <div className="w-4 h-4 rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </div>
  );
}
