import { DiamondIcon } from "@/components/DiamondIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getMgpErrorMessage } from "@/lib/mgp";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Gen6Options() {
  const navigate = useNavigate();
  const [showPreOrderDialog, setShowPreOrderDialog] = useState(false);
  const [mgpInput, setMgpInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePreOrder = (model: string) => {
    navigate({ to: "/customize", search: { model, from: "gen6" } });
  };

  const handleConfirmMgpId = () => {
    const error = getMgpErrorMessage(mgpInput);
    if (error) {
      setErrorMessage(error);
      return;
    }
    navigate({
      to: "/customize",
      search: { model: "Gen 6 Racer", from: "gen6" },
    });
    handleClosePreOrderDialog();
  };

  const handleClosePreOrderDialog = () => {
    setShowPreOrderDialog(false);
    setMgpInput("");
    setErrorMessage("");
  };

  const handleInputChange = (value: string) => {
    setMgpInput(value);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/50 bg-card/40 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate({ to: "/" })}
            className="mb-4 -ml-2"
            data-ocid="gen6.link"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
            Gen 6 Options
          </h1>
          <p className="text-muted-foreground mt-2">
            Pre-order the next generation
          </p>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Gen 6 */}
          <Card className="flex flex-col border border-border/50 bg-card/60 backdrop-blur-xl hover:border-primary/50 hover:shadow-glass-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <DiamondIcon className="w-6 h-6 text-2xl" />
                Gen 6
              </CardTitle>
              <CardDescription>Base model 0-150 Mph</CardDescription>
              <div className="text-3xl font-bold text-primary mt-2">$1500</div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm border border-primary/10">
                <div className="text-7xl font-bold text-primary/40">6</div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Next-gen features</li>
                <li>• Enhanced performance</li>
                <li>• Future-ready</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                size="lg"
                onClick={() => handlePreOrder("Gen 6")}
                data-ocid="gen6.base.primary_button"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Pre Order
              </Button>
            </CardFooter>
          </Card>

          {/* Gen 6 Pro */}
          <Card className="flex flex-col border border-primary/30 bg-card/60 backdrop-blur-xl hover:border-primary/60 hover:shadow-glass-lg transition-all duration-300 relative">
            <Badge className="absolute top-4 right-4 bg-primary">Popular</Badge>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <DiamondIcon className="w-6 h-6 text-2xl" />
                Gen 6 Pro
              </CardTitle>
              <CardDescription>Pro model 0-250 Mph</CardDescription>
              <div className="text-3xl font-bold text-primary mt-2">$3000</div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="h-48 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm border border-primary/20">
                <div className="text-7xl font-bold text-primary/50">6+</div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Professional features</li>
                <li>• Superior performance</li>
                <li>• Premium build</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                size="lg"
                onClick={() => handlePreOrder("Gen 6 Pro")}
                data-ocid="gen6.pro.primary_button"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Pre Order
              </Button>
            </CardFooter>
          </Card>

          {/* Gen 6 Racer */}
          <Card className="flex flex-col border border-border/50 bg-card/60 backdrop-blur-xl hover:border-accent/50 hover:shadow-glass-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <DiamondIcon className="w-6 h-6 text-2xl" />
                Gen 6 Racer
              </CardTitle>
              <CardDescription>Racer model 0-500 Mph</CardDescription>
              <div className="text-3xl font-bold text-primary mt-2">$7500</div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm border border-accent/10">
                <div className="text-7xl font-bold text-accent/40">6R</div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ultimate performance</li>
                <li>• Track-ready</li>
                <li>• Requires Mgp licence</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                size="lg"
                variant="secondary"
                onClick={() => setShowPreOrderDialog(true)}
                data-ocid="gen6.racer.open_modal_button"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Pre Order
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="border-t border-border/50 bg-card/40 backdrop-blur-xl mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Built with love using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined"
                  ? window.location.hostname
                  : "crystal-app",
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

      {/* Mgp licence Dialog */}
      <Dialog
        open={showPreOrderDialog}
        onOpenChange={handleClosePreOrderDialog}
      >
        <DialogContent
          className="sm:max-w-md bg-card/95 backdrop-blur-xl border-border/50"
          data-ocid="gen6.dialog"
        >
          <DialogHeader>
            <DialogTitle>Enter Mgp licence</DialogTitle>
            <DialogDescription>
              Enter your Mgp licence to proceed for Gen 6 Racer.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mgp-input-gen6">Your Mgp licence</Label>
              <Input
                id="mgp-input-gen6"
                placeholder="Mgp-ABC123"
                value={mgpInput}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleConfirmMgpId();
                }}
                className={errorMessage ? "border-destructive" : ""}
                data-ocid="gen6.input"
              />
              {errorMessage && (
                <p
                  className="text-sm text-destructive"
                  data-ocid="gen6.error_state"
                >
                  {errorMessage}
                </p>
              )}
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={handleClosePreOrderDialog}
                data-ocid="gen6.cancel_button"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmMgpId}
                disabled={!mgpInput.trim()}
                data-ocid="gen6.confirm_button"
              >
                Confirm
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
