import { ChangeEvent } from "react";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  name: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SliderComponent: React.FC<SliderProps> = ({ ...props }) => {
  return (
    <div className="w-full py-2 px-5 text-white border-l-4 border-lightGreen">
      <label>{props.label}:{props.value}</label>
      <div className="flex justify-between">
        <span>{props.min}</span>
        <span>{props.max}</span>
      </div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        name={props.name}
        step={props.step}
        value={props.value}
        onChange={props.onChange}
        className="slider appearance-none w-full h-1 bg-white rounded-lg outline-none"
      />
    </div>
  );
};
