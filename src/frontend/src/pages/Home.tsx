import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { DiamondIcon } from '@/components/DiamondIcon';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/50 bg-card/40 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center tracking-tight bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
            Crystal
          </h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card
            className="group cursor-pointer transition-all duration-300 hover:shadow-glass-lg hover:scale-[1.02] border border-border/50 bg-card/60 backdrop-blur-xl hover:border-primary/50"
            onClick={() => navigate({ to: '/gen4-elc' })}
          >
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <DiamondIcon className="w-8 h-8 text-3xl" />
                  Gen 4
                </div>
                <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </CardTitle>
              <CardDescription className="text-base">Click to see options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/10">
                <div className="text-6xl font-bold text-primary/30">4</div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="group cursor-pointer transition-all duration-300 hover:shadow-glass-lg hover:scale-[1.02] border border-border/50 bg-card/60 backdrop-blur-xl hover:border-primary/50"
            onClick={() => navigate({ to: '/gen5' })}
          >
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <DiamondIcon className="w-8 h-8 text-3xl" />
                  Gen 5
                </div>
                <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </CardTitle>
              <CardDescription className="text-base">Click to see options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/10">
                <div className="text-6xl font-bold text-primary/30">5</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t border-border/50 bg-card/40 backdrop-blur-xl mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Built with love using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'crystal-app'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
