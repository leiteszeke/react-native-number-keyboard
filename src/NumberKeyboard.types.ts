export type NumberKeyboardProps = {
  customStyles?: {
    background?: string;
    color?: string;
  };
  keyboardType?: NumberKeyboardType;
  onClear?: () => void;
  onDelete?: () => void;
  onKeyPress?: (key: string) => void;
  showDot?: boolean;
  showLetters?: boolean;
};

export enum NumberKeyboardType {
  DECIMAL = 'decimal',
  NUMBER = 'number',
}

export type NumberKeyboardKey = {
  number: string;
  letters: string;
};

export type NumberKeyboardRow = NumberKeyboardKey[];
