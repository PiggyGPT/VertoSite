export interface PanelProps {
  isActive: boolean;
  animationState: any;
  setAnimationState: React.Dispatch<React.SetStateAction<any>>;
  onNext: () => void;
}
