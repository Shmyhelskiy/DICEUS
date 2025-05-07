import { ArrowRight } from "lucide-react"
import CustomLink from "../../commons/CustomLink"
import StatusIcon from "../AccountStatus/StatusIcon";

const data = [
  { id: 1, title: 'KYC verification' },
  { id: 2, title: 'Required Documentation' },
  { id: 3, title: 'Regulatory approval' },
  { id: 4, title: 'Financial Verification' },
];

const ComplianceDocumentation = () => {
  return (
    <section>
      <div className="flex mb-6">
        <h3 className="text-3xl">
          Compliance & Documentation
        </h3>

      <CustomLink
        path='/'
        title='See history'
        className="text-sm group text-blue-500 hover:text-blue-600"
      >
        <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </CustomLink>
      </div>

      <div className="bg-customGray px-15 pt-6 pb-7 rounded-2xl border border-white/10 w-full">
      <div className="grid grid-cols-2 gap-y-4">
        {data.map((item) => (
          <div key={item.id} className="flex gap-2 items-center">
            <StatusIcon size={16} color="text-green-400" />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default ComplianceDocumentation