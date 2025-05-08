import SearchAndFilter from "../../commons/SearchAndFilter"
import PoliceisTable from "./PoliceisTable"

const PoliceisTableContainer = () => {
  return (
    <section>
      <h3 className="text-3xl mb-6">
        Policeis
      </h3>

      <article className="bg-customGray p-6 rounded-2xl shadow-xl border-1 border-white/10 flex flex-col gap-6">
        <SearchAndFilter />
        <PoliceisTable />
      </article>

    </section>
  )
}

export default PoliceisTableContainer
