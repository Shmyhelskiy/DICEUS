import { headers } from 'next/headers';
import AccountDetails from "@/app/components/Accounts/AccountDetails/AccountDetails";
import AccountStatus from "@/app/components/Accounts/AccountStatus/AccountStatus";
import Communication from "@/app/components/Accounts/Communication/Communication";
import ComplianceDocumentation from "@/app/components/Accounts/ComplianceDocumentation/ComplianceDocumentation";
import AccountsHeader from "@/app/components/Accounts/Header/AccountsHeader";
import PerformanceMetricsSection from "@/app/components/Accounts/PerformanceMetrics/PerformanceMetricsSection";
import PoliceisTableContainer from "@/app/components/Accounts/PoliceisTable/PoliceisTableContainer";
import PoliciesSection from "@/app/components/Accounts/Policies/PoliciesSection";
import { AccountData } from "@/app/types/accounts/accounts";

type AccountPageProps = {
  params: Promise<{
    accountId: string;
  }>;
};


async function getAccountData(accountId: string): Promise<AccountData | null> {
  const reqHeaders = await headers();
  const host = reqHeaders.get('host');
  const baseUrl = `https://${host}`;

  
  try {
    const res = await fetch(`${baseUrl}/api/accounts/${encodeURIComponent(accountId)}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) {
        console.warn(`Account with ID ${accountId} not found.`);
        return null;
      }
      throw new Error(`Failed to fetch account data. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching account:", error);
    return null;
  }
}

export default async function AccountPage({ params }: AccountPageProps) {
  const { accountId } = await params;
  const account = await getAccountData(accountId);

  if (!account) {
    return <section>Account not found</section>;
  }

  return (
    <main className="flex flex-col gap-10">
      <AccountsHeader name={account.accountName} broker={account.broker}/>
      <PerformanceMetricsSection  winnability={account.winnability} lossRatio={account.lossRatio}/>
      <PoliciesSection />
      <div className="flex gap-4">
        <div className="w-[60%]">
          <AccountStatus />
        </div>
        <div className="w-[40%]">
          <ComplianceDocumentation />
        </div>
      </div>

         <AccountDetails />
         <Communication />
         <PoliceisTableContainer />
    </main>
  );
}