import { useState } from "react";
import { PopToken } from "store/types";

export interface ChartButtonProps {
  id: PopToken;
  popId: PopToken;
  Icon: React.ReactElement;
  color: PopToken;
  label: string;
  onClick: (id: PopToken) => void;
}

const buttonConfig = {
  BTC: {
    hoverBorder: "hover:border-btc",
    border: "border-btc",
    color: "text-btc",
  },
  ETH: {
    hoverBorder: "hover:border-eth",
    border: "border-eth",
    color: "text-eth",
  },
  BNB: {
    hoverBorder: "hover:border-bnb",
    border: "border-bnb",
    color: "text-bnb",
  },
  SOLANA: {
    hoverBorder: "hover:border-sol",
    border: "border-sol",
    color: "text-sol",
  },
};

export const ChartButton: React.FC<ChartButtonProps> = ({
  id,
  popId,
  Icon,
  color,
  label,
  onClick,
}) => {
  const [state, setState] = useState(false);
  return (
    <div className="flex flex-col items-center group">
      <button
        className={`w-16 h-16 p-1 bg-land rounded-full transition-colors border-2 border-transparent ${
          popId === id
            ? buttonConfig[color].border
            : buttonConfig[color].hoverBorder
        }`}
        style={{ borderColor: color }}
        onClick={() => onClick(id)}
        onMouseOver={() => setState(true)}
        onMouseLeave={() => setState(false)}
      >
        {Icon}
      </button>
      <span
        className={`transition ${
          popId === id
            ? buttonConfig[color].color
            : state
            ? buttonConfig[color].color
            : "text-transparent"
        }`}
      >
        {label}
      </span>
    </div>
  );
};
