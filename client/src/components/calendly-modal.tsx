import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { InlineWidget } from "react-calendly";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function CalendlyModal({ isOpen, onClose, title = "Schedule a Consultation" }: CalendlyModalProps) {
  // Effects for body overflow and escape key can remain the same
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative flex flex-col w-full max-w-4xl h-[90vh] bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-slate-500 dark:text-slate-400" />
          </button>
        </div>

        {/* Calendly Widget */}
        {/* The InlineWidget takes care of the iframe and provides a better loading UI */}
        <div className="flex-grow overflow-y-auto">
          <InlineWidget
            url="https://calendly.com/nileshkhaitan/30min?month=2024-07"
            styles={{ height: '100%', width: '100%' }}
            // You can pass prefill values or UTM parameters here
            pageSettings={{
                hideGdprBanner: true,
                backgroundColor: 'ffffff',
                textColor: '1a1a1a',
            }}
          />
        </div>
      </div>
    </div>
  );
}

// The useCalendlyModal hook remains unchanged and works perfectly with this.
export function useCalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
    CalendlyModal: (props: Omit<CalendlyModalProps, 'isOpen' | 'onClose'>) => (
      <CalendlyModal {...props} isOpen={isOpen} onClose={closeModal} />
    )
  };
}