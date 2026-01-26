import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/app/components/ui/AlertDialog';
import { Trash2 } from 'lucide-react';

interface DeleteConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sponsorName: string;
  onConfirm: () => void;
}

export function DeleteConfirmDialog({ open, onOpenChange, sponsorName, onConfirm }: DeleteConfirmDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="glass-card border-border/50 neon-border animate-scale-in">
        <AlertDialogHeader>
          <div className="mx-auto w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
            <Trash2 className="w-7 h-7 text-destructive" />
          </div>
          <AlertDialogTitle className="text-center font-display text-foreground text-xl">Delete Sponsor</AlertDialogTitle>
          <AlertDialogDescription className="text-center text-muted-foreground">
            Are you sure you want to delete <span className="font-semibold text-foreground">{sponsorName}</span>? 
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center gap-3">
          <AlertDialogCancel className="bg-muted/50 border-border/50 hover:bg-muted hover:border-border transition-all duration-200">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-200 hover:scale-[1.02]"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
