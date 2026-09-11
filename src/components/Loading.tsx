import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="relative mx-auto w-16 h-16 mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-primary-200" />
          <div className="absolute inset-0 rounded-full border-4 border-primary-600 border-t-transparent animate-spin" />
          <Loader2 className="absolute inset-0 m-auto w-8 h-8 text-primary-600 animate-spin" />
        </div>
        <p className="text-neutral-600 font-medium">Chargement...</p>
      </div>
    </div>
  );
}