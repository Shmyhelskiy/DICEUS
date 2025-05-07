import { FC } from "react";

type AccountDetailItemProps = {
  label: string;
  value: string | number;
}


const AccountDetailItem:FC<AccountDetailItemProps> = ({ label, value }) => {
  return (
    <div className="pr-7">
      <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
      <p className="text-sm text-white">{value}</p>
    </div>
  );
};

export default AccountDetailItem;