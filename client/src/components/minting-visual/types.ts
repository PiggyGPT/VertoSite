export interface MintingState {
    // Panel 0: Selection (Restored)
    selectedOption: 'fiat' | 'albor' | null;
    isSubmitting: boolean;
    dropdownOpen: boolean;

    // Panel 1: Omnibus Details
    omnibusConfirmed: boolean;

    // Panel 2: Status Screen (Restored)
    statusStep: 'waiting' | 'omnibus_transfer' | 'awaiting_receipt' | 'receipt_confirmed' | 'minting' | 'complete';

    // Panel 3: Reconciliation Report
    reportVisible: boolean;
    reconciled: boolean;
}

export interface MintingPanelProps {
    isActive: boolean;
    animationState: MintingState;
    setAnimationState: React.Dispatch<React.SetStateAction<MintingState>>;
    onNext: () => void;
}
