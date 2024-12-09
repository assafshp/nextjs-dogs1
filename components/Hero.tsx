import { PawPrint } from "lucide-react";

export function Hero() {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-2 mb-4">
        <PawPrint className="w-12 h-12 text-primary" />
        <h1 className="text-4xl font-bold">Dog Lovers Unite</h1>
      </div>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Welcome to our community of dog enthusiasts! Here we celebrate our furry friends
        and share the joy they bring to our lives.
      </p>
    </div>
  );
}