import { Hero } from "@/components/Hero";
import { DogCard } from "@/components/DogCard";
import { TimeDisplay } from "@/components/TimeDisplay";

const dogs = [
  {
    name: "Luna",
    breed: "Golden Retriever",
    imageUrl: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&q=80",
    description: "Luna is a friendly and energetic Golden Retriever who loves playing fetch and swimming."
  },
  {
    name: "Max",
    breed: "German Shepherd",
    imageUrl: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80",
    description: "Max is a loyal and intelligent German Shepherd, excellent at learning new tricks."
  },
  {
    name: "Bella",
    breed: "French Bulldog",
    imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80",
    description: "Bella is a charming French Bulldog who loves cuddles and short walks in the park."
  }
];

// This ensures the page is always server-side rendered
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getServerTime() {
  return new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });
}

export default async function Home() {
  const timestamp = await getServerTime();
  
  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <TimeDisplay timestamp={timestamp} />
        <Hero />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogs.map((dog) => (
            <DogCard key={dog.name} {...dog} />
          ))}
        </div>
      </div>
    </main>
  );
}