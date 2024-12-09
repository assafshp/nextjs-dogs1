'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useState } from "react";

interface DogCardProps {
  name: string;
  breed: string;
  imageUrl: string;
  description: string;
}

export function DogCard({ name, breed, imageUrl, description }: DogCardProps) {
  const [likes, setLikes] = useState(0);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={`${breed} dog named ${name}`}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
          <button
            onClick={() => setLikes(prev => prev + 1)}
            className="flex items-center gap-2 text-red-500 hover:scale-110 transition-transform"
          >
            <Heart className={likes > 0 ? "fill-current" : ""} />
            <span>{likes}</span>
          </button>
        </div>
        <CardDescription className="text-lg font-medium">{breed}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}