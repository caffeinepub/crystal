import { DiamondIcon } from "@/components/DiamondIcon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

const GENS = [
  {
    label: "Gen 1",
    number: "1",
    models: [
      {
        name: "Gen 1",
        price: 200,
        desc: "The original — reliable and lightweight.",
        speed: "58 mph",
      },
      {
        name: "Gen 1 Pro",
        price: 400,
        desc: "Upgraded internals with improved durability.",
        speed: "64 mph",
      },
      {
        name: "Gen 1 Racer",
        price: 800,
        desc: "First competitive racing build.",
        speed: "72 mph",
      },
    ],
  },
  {
    label: "Gen 2",
    number: "2",
    models: [
      {
        name: "Gen 2",
        price: 300,
        desc: "Smoother ride with refined frame design.",
        speed: "62 mph",
      },
      {
        name: "Gen 2 Pro",
        price: 650,
        desc: "Enhanced power delivery and control.",
        speed: "70 mph",
      },
      {
        name: "Gen 2 Racer",
        price: 1200,
        desc: "High-torque racing platform.",
        speed: "82 mph",
      },
    ],
  },
  {
    label: "Gen 3",
    number: "3",
    models: [
      {
        name: "Gen 3",
        price: 400,
        desc: "Significant handling improvements over Gen 2.",
        speed: "65 mph",
      },
      {
        name: "Gen 3 Pro",
        price: 850,
        desc: "Pro-tuned suspension and braking system.",
        speed: "80 mph",
      },
      {
        name: "Gen 3 Racer",
        price: 1600,
        desc: "Pre-Gen 4 racing benchmark.",
        speed: "95 mph",
        needsMgp: true,
      },
    ],
  },
];

export default function PastGens() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/50 bg-card/40 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center tracking-tight bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
            Past Gens
          </h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {GENS.map((gen, gi) => (
            <Card
              key={gen.label}
              className="border border-border/50 bg-card/60 backdrop-blur-xl"
              data-ocid={`past-gens.gen.${gi + 1}.card`}
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <DiamondIcon className="w-8 h-8 text-3xl" />
                  {gen.label}
                </CardTitle>
                <CardDescription className="text-base">
                  Legacy models
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/10 mb-4">
                  <div className="text-6xl font-bold text-primary/30">
                    {gen.number}
                  </div>
                </div>
                {gen.models.map((m, mi) => (
                  <button
                    key={m.name}
                    type="button"
                    onClick={() =>
                      navigate({
                        to: "/customize",
                        search: { model: m.name, from: "past-gens" },
                      })
                    }
                    data-ocid={`past-gens.item.${gi * 3 + mi + 1}`}
                    className="w-full group rounded-lg border border-border/50 bg-card/40 p-3 text-left transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.01]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DiamondIcon className="w-4 h-4" />
                        <span className="font-semibold text-sm">{m.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 ml-6">
                      {m.desc}
                    </p>
                    <div className="flex items-center justify-between mt-2 ml-6">
                      <span className="text-sm font-bold text-primary">
                        ${m.price.toLocaleString()}
                      </span>
                      <div className="flex items-center gap-2">
                        {(m as { speed?: string }).speed && (
                          <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-0.5 rounded-full border border-accent/20">
                            {(m as { speed?: string }).speed}
                          </span>
                        )}
                        {(m as { needsMgp?: boolean }).needsMgp && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20">
                            Mgp ID required
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="gap-2 border-border/60 bg-card/60 backdrop-blur-xl hover:border-primary/50 hover:bg-primary/10 text-foreground"
            onClick={() => navigate({ to: "/" })}
            data-ocid="past-gens.cancel_button"
          >
            Back to Home
          </Button>
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
    </div>
  );
}
