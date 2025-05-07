import Image from "next/image";
import AccountDetailItem from "./AccountDetailItem";
import Separator from "../../commons/Separator";
import { FC } from "react";
import NeedsAttentionBanner from "./NeedsAttentionBanner";

type AccountsHeaderProps = {
  name: string;
  broker: string;
};

const AccountsHeader: FC<AccountsHeaderProps> = ({name, broker}) => {
  return (
    <div>
      <p className="text-sm mb-5">
        Dashboard // Accounts // {' '}
          <span className="text-blue-500">
            {name}
          </span>
      </p>
      
      <div className="flex text-white/80">
        <div className="flex items-center gap-2 pb-6 rounded-lg mr-6">
          <div>
            <Image src='/logo.png' alt="Logo" width={125} height={125}/>
          </div>
        
          <div className="grid grid-cols-[auto_1fr]">
            <h1 className="text-3xl font-light mb-2 col-span-2">
              {name}
            </h1>

            <div className="text-sm w-fit pr-3">
              <p>425 Harbor Boulevard, Suite 300</p>
              <p>Seattle, WA 98104</p>
            </div>
        
            <div className="flex items-start">
              <Separator />
              <AccountDetailItem label="EXISTING ACCOUNT" value='54383' />
              <Separator />
              <AccountDetailItem label="BROKER" value={broker} />
              <Separator />
              <AccountDetailItem label="UNDERWRITER" value='Kate Johnson' />
            </div>
          </div>
        </div>

        <NeedsAttentionBanner />
      </div>
    </div>
  )
}

export default AccountsHeader;