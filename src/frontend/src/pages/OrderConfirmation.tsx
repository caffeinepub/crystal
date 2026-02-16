import { useNavigate, useSearch } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Home } from 'lucide-react';

export default function OrderConfirmation() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) as { model?: string; arrivalDate?: string };
  const model = search.model || 'Gen 4';
  const arrivalDate = search.arrivalDate || '02/25/26';

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/50 bg-card/40 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent text-center">
            Order Confirmation
          </h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="max-w-lg w-full border border-border/50 bg-card/60 backdrop-blur-xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl">Order Placed</CardTitle>
            <CardDescription className="text-base">Your {model} is on its way!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center backdrop-blur-sm">
              <p className="text-sm text-muted-foreground mb-2">Arriving</p>
              <p className="text-2xl font-bold text-primary">{arrivalDate}</p>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Thank you for your purchase! We'll send you tracking information once your order ships.</p>
              <p>You'll receive an email confirmation shortly with your order details.</p>
            </div>

            <Button
              className="w-full"
              size="lg"
              onClick={() => navigate({ to: '/' })}
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
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
