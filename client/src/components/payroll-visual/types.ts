
export interface PayrollState {
    // Panel 0 - Employee Selection
    showWorkers: boolean;
    selectedWorkerIndex: number; // -1 means none selected
    
    // Panel 1 - Confirmation
    swipe1: boolean;
    
    // Panel 2 - Verification/Processing
    showVerification: boolean;
    verifyStep: number; // 0: none, 1: registering, 2: discounting, 3: routing, 4: complete
    
    // Panel 3 - Settlement/Receipt
    showSettlement: boolean;
    settled: boolean;
}

export interface PanelProps {
    isActive: boolean;
    animationState: PayrollState;
    setAnimationState: React.Dispatch<React.SetStateAction<PayrollState>>;
    onNext: () => void;
    selectedWorker?: {
        name: string;
        bank: string;
        amount: number;
        id: string;
        alborId: string;
    };
}
