import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
      <p className="mt-4">This is a simple blog built with Next.js and Tailwind CSS.</p>
      <button className="btn btn-neutral">Neutral</button>
      <Button variant={'outline'}>Hello world</Button>
    </div>
  );
}
