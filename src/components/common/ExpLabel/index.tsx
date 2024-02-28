interface ExpLabelProps {
  label: string;
  value: string;
}

export const ExpLabel: React.FC<ExpLabelProps> = ({ label, value }) => {
  return (
    <div className="px-5 text-white flex items-end justify-between w-full">
      <div className="font-bold text-xl flex items-center gap-1">{label}</div>
      <div className="">{value}</div>
    </div>
  );
};
