import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="font-heading text-9xl font-bold text-primary-200 mb-4">404</h1>
        <h2 className="font-heading text-3xl font-bold text-primary-900 mb-6">
          Page Not Found
        </h2>
        <p className="text-text-muted mb-8 text-lg">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link href="/">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}