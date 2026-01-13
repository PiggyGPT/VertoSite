export interface KeysState {
  // Panel 0: Bank SSO Login
  loginState: 'idle' | 'typing' | 'authenticating' | 'success';
  showSSOKey: boolean;
  
  // Panel 1: Account Reveal (Now Panel 2)
  showExistingAccount: boolean;
  showAlborAccount: boolean;
  showDeviceKey: boolean;
  
  // Panel 2: Key Recovery (Now Panel 1)
  showKeyDiagram: boolean;
  activeKeys: number[]; // Which keys are glowing [0, 1, 2]
  showRecoveryBadge: boolean;
  showWalletAccess: boolean;
  deviceStatus: 'recognizing' | 'unrecognized' | 'authorized';
}

export interface KeysPanelProps {
  isActive: boolean;
  animationState: KeysState;
  setAnimationState: React.Dispatch<React.SetStateAction<KeysState>>;
  onNext: () => void;
}
