export interface InvoicingState {
    // Panel 0
    swipe0: boolean;
    recipientListOpen: boolean;
    recipientSelected: boolean;
    
    // Panel 1
    swipe1: boolean;
    
    // Panel 2
    verifyStep: number;
    
    // Panel 3
    showSettlement: boolean;
    settled: boolean;
}

export interface PanelProps {
    isActive: boolean;
    animationState: InvoicingState;
    setAnimationState: React.Dispatch<React.SetStateAction<InvoicingState>>;
    onNext: () => void;
}
