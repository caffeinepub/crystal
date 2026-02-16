import { useState } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';

export default function Checkout() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) as { model?: string; from?: string };
  const model = search.model || 'Gen 4';
  const from = search.from || 'gen4-elc';

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDone = () => {
    // Generate random date between 02/25/2026 and 05/25/2026
    const startDate = new Date('2026-02-25');
    const endDate = new Date('2026-05-25');
    const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    const randomDate = new Date(randomTime);
    const arrivalDate = randomDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });

    navigate({ to: '/order-confirmation', search: { model, arrivalDate } });
  };

  const handleBack = () => {
    if (from === 'gen5') {
      navigate({ to: '/gen5' });
    } else {
      navigate({ to: '/gen4-elc' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/50 bg-card/40 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Options
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
            Checkout — {model}
          </h1>
          <p className="text-muted-foreground mt-2">Enter your details to complete your order</p>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto border border-border/50 bg-card/60 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Order Information</CardTitle>
            <CardDescription>Fill in your shipping and payment details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Shipping Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Shipping Address</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    placeholder="123 Main St"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="New York"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      placeholder="NY"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input
                    id="zipCode"
                    placeholder="10001"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Payment Information</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={(e) => handleInputChange('expiry', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button
              className="w-full"
              size="lg"
              onClick={handleDone}
            >
              Done
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
