import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <Alert className="flex items-center justify-center border-destructive/50 bg-destructive/5">
      <AlertDescription className="flex items-center">
      <AlertTriangle className="h-4 w-4 text-destructive" />
        <span className="text-destructive font-medium">{message}</span>
        {onRetry && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onRetry}
            className="ml-4"
          >
            Try Again
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
}