export interface RouterState {
  // Panel 0: Authorization
  showBankNodes: boolean;
  authStep: 'idle' | 'request_sent' | 'bank_b_signing' | 'authorized';
  showDirectConnection: boolean;
  
  // Panel 1: Settlement
  showLedger: boolean;
  confirmations: number;
  showSyncStatus: boolean;
  
  // Panel 2: Fee Distribution
  showBreakdown: boolean;
  feesDistributed: boolean;
  showSuccess: boolean;
}

export interface RouterPanelProps {
  isActive: boolean;
  animationState: RouterState;
  setAnimationState: React.Dispatch<React.SetStateAction<RouterState>>;
  onNext: () => void;
}
