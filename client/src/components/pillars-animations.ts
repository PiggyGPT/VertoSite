// CSS for the typing cursor animation
export const cursorStyle = `
  @keyframes blink {
    50% { opacity: 0; }
  }
  .typing-cursor {
    animation: blink 1s step-end infinite;
    width: 4px;
    height: 3rem;
    background-color: #22c55e;
    display: inline-block;
    vertical-align: sub;
    margin-left: 4px;
  }
`;

// Animation timing constants for ExecutiveDistributionFlow
export const DISTRIBUTION_ANIMATION_TIMINGS = {
  initialDashboard: 2000,
  buttonClick: 300,
  popupShow: 500,
  typing: 1500,
  enterClick: 300,
  popupHide: 700,
  voucherPan: 1000,
  voucherWait: 2500,
  walletPan: 1000,
  walletWait: 1000,
} as const;

// Animation timing constants for PolishedPaymentsFlow
export const PAYMENTS_ANIMATION_TIMINGS = {
  cycleInterval: 3500,
  buttonClickDuration: 500,
  panelTransitionDelay: 600,
} as const;

// Panel visibility classes for smooth transitions
export const getPanelClasses = (
  baseClasses: string,
  visibleClasses: string,
  hiddenLeftClasses: string,
  hiddenRightClasses: string,
  isVisible: boolean,
  direction: 'from-left' | 'from-right' | 'both'
): string => {
  if (isVisible) {
    return `${baseClasses} ${visibleClasses}`;
  }
  
  if (direction === 'from-left') {
    return `${baseClasses} ${hiddenLeftClasses}`;
  } else if (direction === 'from-right') {
    return `${baseClasses} ${hiddenRightClasses}`;
  }
  
  return `${baseClasses} ${hiddenLeftClasses}`;
};

// Panel transition classes template
export const PANEL_TRANSITION_CLASSES = {
  base: "absolute inset-0 transition-all duration-1000 ease-in-out",
  visible: "opacity-100 translate-x-0",
  hiddenLeft: "opacity-0 -translate-x-full",
  hiddenRight: "opacity-0 translate-x-full",
} as const;

// Popup transition classes template
export const POPUP_TRANSITION_CLASSES = {
  base: "absolute w-full max-w-lg mx-auto bottom-0 rounded-t-2xl shadow-2xl transition-all duration-500 ease-in-out z-50 transform bg-white dark:bg-slate-800",
  visible: "translate-y-0",
  hidden: "translate-y-full pointer-events-none",
  overlay: "absolute inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300",
} as const;

// Button animation states
export const getButtonStyle = (
  isClicked: boolean,
  accentColor: string,
): React.CSSProperties => {
  return {
    backgroundColor: isClicked ? accentColor + '80' : accentColor,
    opacity: isClicked ? 0.9 : 1,
    transform: isClicked ? 'scale(0.95)' : 'scale(1)',
  };
};

// Distribution flow animation steps
export const DISTRIBUTION_FLOW_STEPS = {
  INITIAL: 0,
  BUTTON_CLICK: 1,
  SHOW_POPUP: 2,
  TYPING: 3,
  ENTER_CLICK: 4,
  HIDE_POPUP: 5,
  PAN_TO_VOUCHER: 6,
  VOUCHER_WAIT: 7,
  PAN_TO_WALLET: 8,
  WALLET_WAIT: 9,
} as const;
