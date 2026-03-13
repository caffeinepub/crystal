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
import { ArrowLeft, ChevronRight } from "lucide-react";

const GENS = [
  {
    label: "Gen 1",
    number: "1",
    models: [
      {
        name: "Gen 1",
        price: 200,
        desc: "The original — reliable and lightweight.",
      },
      {
        name: "Gen 1 Pro",
        price: 400,
        desc: "Upgraded internals with improved durability.",
      },
      {
        name: "Gen 1 Racer",
        price: 800,
        desc: "First competitive racing build.",
        needsMgp: true,
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
      },
      {
        name: "Gen 2 Pro",
        price: 650,
        desc: "Enhanced power delivery and control.",
      },
      {
        name: "Gen 2 Racer",
        price: 1200,
        desc: "High-torque racing platform.",
        needsMgp: true,
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
      },
      {
        name: "Gen 3 Pro",
        price: 850,
        desc: "Pro-tuned suspension and braking system.",
      },
      {
        name: "Gen 3 Racer",
        price: 1600,
        desc: "Pre-Gen 4 racing benchmark.",
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
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate({ to: "/" })}
            className="mb-4 -ml-2"
            data-ocid="past-gens.cancel_button"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
            Past Gens
          </h1>
          <p className="text-muted-foreground mt-2">
            Legacy models — Gen 1 through Gen 3
          </p>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-10 space-y-10 max-w-4xl">
        {GENS.map((gen, gi) => (
          <section key={gen.label}>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <DiamondIcon className="w-6 h-6" />
              {gen.label}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {gen.models.map((m, mi) => (
                <Card
                  key={m.name}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-glass-lg hover:scale-[1.02] border border-border/50 bg-card/60 backdrop-blur-xl hover:border-primary/50"
                  onClick={() =>
                    navigate({
                      to: "/customize",
                      search: { model: m.name, from: "past-gens" },
                    })
                  }
                  data-ocid={`past-gens.item.${gi * 3 + mi + 1}`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DiamondIcon className="w-5 h-5" />
                        {m.name}
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </CardTitle>
                    <CardDescription>{m.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        ${m.price.toLocaleString()}
                      </span>
                      {m.needsMgp && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20">
                          Mgp ID required
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
