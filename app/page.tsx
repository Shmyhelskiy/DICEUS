import MarketIntelligence from "./components/Dashboard/MarketIntelligence/MarketIntelligence";
import MyAccounts from "./components/Dashboard/MyAccounts/MyAccounts";
import PortfolioGoals from "./components/Dashboard/PortfolioGoals/PortfolioGoals";
import QuickActions from "./components/Dashboard/QuickActions/QuickActions";
import WorkQueue from "./components/Dashboard/WorkQueue/WorkQueue";

export default function DashboardPage() {
  return (
    <main className="grid grid-cols-6 gap-6">
      <section className="col-span-4 rounded-3xl border-1 border-white/10 bg-customGray "> 
        <WorkQueue />
      </section>

      <section className="col-span-1 rounded-3xl border-1 border-white/10  bg-customGray">
        <PortfolioGoals />
      </section>

      <section className="col-span-1 flex flex-col gap-4">
        <div className="bg-customGray h-1/2 rounded-3xl border-1 border-white/10">
          <QuickActions />
        </div>

        <div className="bg-customGray h-1/2 rounded-3xl border-1 border-white/10">
          <MarketIntelligence />
        </div>
      </section>

      <section className="col-span-6 rounded-3xl border-1 border-white/10  bg-customGray mt-3">
        <MyAccounts />
      </section>

    </main>
  );
}
