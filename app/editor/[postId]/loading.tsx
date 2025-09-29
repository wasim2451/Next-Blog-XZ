export default function Loading() {
  return (
    <div className="p-10 flex flex-col gap-4 animate-pulse min-h-screen">
      <div className="h-10 w-2/3 bg-gray-300 rounded"></div>
      <div className="h-64 bg-gray-200 rounded"></div>
      <div className="h-10 w-1/4 bg-gray-300 rounded"></div>
    </div>
  );
}