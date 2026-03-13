import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useState } from "react";

const STANDARD_COLORS = [
  { name: "Green", value: "green", hex: "#22c55e" },
  { name: "Red", value: "red", hex: "#ef4444" },
  { name: "Blue", value: "blue", hex: "#3b82f6" },
  { name: "White", value: "white", hex: "#ffffff" },
  { name: "Purple", value: "purple", hex: "#a855f7" },
];

const NEON_COLORS = [
  { name: "Neon Green", value: "neon-green", hex: "#39ff14" },
  { name: "Neon Red", value: "neon-red", hex: "#ff073a" },
  { name: "Neon Blue", value: "neon-blue", hex: "#04d9ff" },
  { name: "Neon Purple", value: "neon-purple", hex: "#bf00ff" },
  { name: "Neon Orange", value: "neon-orange", hex: "#ff6600" },
  { name: "Neon Yellow", value: "neon-yellow", hex: "#ffff00" },
  { name: "Neon Pink", value: "neon-pink", hex: "#ff10f0" },
];

const BASE_PRICES: Record<string, number> = {
  "Gen 5 E": 700,
  "Gen 5": 1000,
  "Gen 5 Pro": 2500,
  "Gen 5 Racer": 5000,
};

export default function Gen5Customize() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) as { model?: string };
  const model = search.model || "Gen 5";
  const isRacer = model === "Gen 5 Racer";
  const colors = isRacer ? NEON_COLORS : STANDARD_COLORS;

  const [wheels, setWheels] = useState<"normal" | "gls">("normal");
  const [grip, setGrip] = useState<"normal" | "extra">("normal");
  const [srtCare, setSrtCare] = useState<"yes" | "no">("no");
  const [brakes, setBrakes] = useState<"normal" | "racer">("normal");
  const [turning, setTurning] = useState<"normal" | "enhanced">("normal");
  const [color, setColor] = useState(colors[0].value);

  const basePrice = BASE_PRICES[model] ?? 1000;
  const wheelsExtra = wheels === "gls" ? 300 : 0;
  const gripExtra = grip === "extra" ? 100 : 0;
  const srtExtra = srtCare === "yes" ? 50 : 0;
  const brakesExtra = brakes === "racer" ? 750 : 0;
  const turningExtra = turning === "enhanced" ? 1000 : 0;
  const total =
    basePrice + wheelsExtra + gripExtra + brakesExtra + turningExtra;

  const selectedColorObj = colors.find((c) => c.value === color)!;

  const handleCheckout = () => {
    const customSummary = [
      wheels === "gls" ? "Gls Wheels (+$300)" : "Normal Wheels",
      grip === "extra" ? "Extra Grip (+$100)" : "Normal Grip",
      brakes === "racer" ? "Racer Brakes (+$750)" : "Normal Brakes",
      turning === "enhanced" ? "Enhanced Turning (+$1000)" : "Normal Turning",
      srtCare === "yes" ? "SRT Care (+$50/mo)" : "No SRT Care",
      `Color: ${selectedColorObj.name}`,
    ].join(", ");
    navigate({
      to: "/checkout",
      search: {
        model: `${model} — ${customSummary}`,
        from: "gen5",
        totalPrice: String(total),
        srtCare: srtExtra > 0 ? "yes" : "no",
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/50 bg-card/40 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate({ to: "/gen5" })}
            className="mb-4 -ml-2"
            data-ocid="customize.back.button"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
            Customize {model}
          </h1>
          <p className="text-muted-foreground mt-2">Pick your options below</p>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-10 max-w-2xl space-y-6">
        {/* Wheels */}
        <Card className="border border-border/50 bg-card/60 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Wheels</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <button
              type="button"
              onClick={() => setWheels("normal")}
              data-ocid="customize.wheels.normal.button"
              className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${wheels === "normal" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border/50 hover:border-primary/40"}`}
            >
              Normal Wheels
              <div className="text-xs text-muted-foreground mt-1">Included</div>
            </button>
            <button
              type="button"
              onClick={() => setWheels("gls")}
              data-ocid="customize.wheels.gls.button"
              className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${wheels === "gls" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border/50 hover:border-primary/40"}`}
            >
              Gls Wheels
              <div className="text-xs text-muted-foreground mt-1">+$300</div>
            </button>
          </CardContent>
        </Card>

        {/* Grip */}
        <Card className="border border-border/50 bg-card/60 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Grip</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <button
              type="button"
              onClick={() => setGrip("normal")}
              data-ocid="customize.grip.normal.button"
              className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${grip === "normal" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border/50 hover:border-primary/40"}`}
            >
              Normal Grip
              <div className="text-xs text-muted-foreground mt-1">Included</div>
            </button>
            <button
              type="button"
              onClick={() => setGrip("extra")}
              data-ocid="customize.grip.extra.button"
              className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${grip === "extra" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border/50 hover:border-primary/40"}`}
            >
              Extra Grip
              <div className="text-xs text-muted-foreground mt-1">+$100</div>
            </button>
          </CardContent>
        </Card>

        {/* Brakes */}
        <Card className="border border-border/50 bg-card/60 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Brakes</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <button
              type="button"
              onClick={() => setBrakes("normal")}
              data-ocid="customize.brakes.normal.button"
              className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${brakes === "normal" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border/50 hover:border-primary/40"}`}
            >
              Normal Brakes
              <div className="text-xs text-muted-foreground mt-1">Included</div>
            </button>
            <button
              type="button"
              onClick={() => setBrakes("racer")}
              data-ocid="customize.brakes.racer.button"
              className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${brakes === "racer" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border/50 hover:border-primary/40"}`}
            >
              Racer Brakes
              <div className="text-xs text-muted-foreground mt-1">+$750</div>
            </button>
          </CardContent>
        </Card>

        {/* Turning */}
        <Card className="border border-border/50 bg-card/60 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Turning</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <button
              type="button"
              onClick={() => setTurning("normal")}
              data-ocid="customize.turning.normal.button"
              className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${turning === "normal" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border/50 hover:border-primary/40"}`}
            >
              Normal Turning
              <div className="text-xs text-muted-foreground mt-1">Included</div>
            </button>
            <button
              type="button"
              onClick={() => setTurning("enhanced")}
              data-ocid="customize.turning.enhanced.button"
              className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${turning === "enhanced" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border/50 hover:border-primary/40"}`}
            >
              Enhanced Turning
              <div className="text-xs text-muted-foreground mt-1">+$1,000</div>
            </button>
          </CardContent>
        </Card>

        {/* SRT Care */}
        <Card className="border border-border/50 bg-card/60 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>SRT Care</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <button
              type="button"
              onClick={() => setSrtCare("yes")}
              data-ocid="customize.srt.yes.button"
              className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${srtCare === "yes" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border/50 hover:border-primary/40"}`}
            >
              SRT Care
              <div className="text-xs text-muted-foreground mt-1">
                +$50 / Month
              </div>
            </button>
            <button
              type="button"
              onClick={() => setSrtCare("no")}
              data-ocid="customize.srt.no.button"
              className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${srtCare === "no" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border/50 hover:border-primary/40"}`}
            >
              No SRT Care
              <div className="text-xs text-muted-foreground mt-1">Skip</div>
            </button>
          </CardContent>
        </Card>

        {/* Color */}
        <Card className="border border-border/50 bg-card/60 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Color{isRacer ? " (Neon)" : ""}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {colors.map((c) => (
                <button
                  type="button"
                  key={c.value}
                  onClick={() => setColor(c.value)}
                  data-ocid={`customize.color.${c.value}.button`}
                  title={c.name}
                  className={`w-10 h-10 rounded-full border-4 transition-all ${color === c.value ? "border-primary scale-110 shadow-lg" : "border-border/50 hover:scale-105"}`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Selected:{" "}
              <span className="font-medium text-foreground">
                {selectedColorObj.name}
              </span>
            </p>
          </CardContent>
        </Card>

        {/* Price Summary */}
        <Card className="border border-primary/30 bg-primary/5 backdrop-blur-xl">
          <CardContent className="pt-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Base price</span>
              <span>${basePrice.toLocaleString()}</span>
            </div>
            {wheelsExtra > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Gls Wheels</span>
                <span>+${wheelsExtra}</span>
              </div>
            )}
            {gripExtra > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Extra Grip</span>
                <span>+${gripExtra}</span>
              </div>
            )}
            {brakesExtra > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Racer Brakes</span>
                <span>+${brakesExtra}</span>
              </div>
            )}
            {turningExtra > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Enhanced Turning</span>
                <span>+${turningExtra.toLocaleString()}</span>
              </div>
            )}
            {srtExtra > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">SRT Care</span>
                <span>+${srtExtra}/mo</span>
              </div>
            )}
            <div className="border-t border-border/50 pt-2 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">
                ${total.toLocaleString()}
                {srtExtra > 0 ? ` + $${srtExtra}/mo` : ""}
              </span>
            </div>
          </CardContent>
        </Card>

        <Button
          className="w-full"
          size="lg"
          onClick={handleCheckout}
          data-ocid="customize.checkout.primary_button"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Proceed to Checkout
        </Button>
      </main>
    </div>
  );
}
