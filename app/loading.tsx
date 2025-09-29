export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Simple spinner */}
      <div className="h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="ml-3 text-sm text-gray-500">Loading blogs...</p>
    </div>
  );
}