export function TimeDisplay({ timestamp }: { timestamp: string }) {
  return (
    <div className="text-sm text-muted-foreground text-center mb-8">
      Page rendered at: {timestamp}
    </div>
  );
}