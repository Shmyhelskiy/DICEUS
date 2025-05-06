"use client";
import Button from "../../commons/Button"

const QuickActions = () => {
  const lables = ["New Submission", "Quote Builder", "Risks Models", "Documents Upload"];

  return (
    <div className="p-5">
      <h2 className="text-xl pb-2">
        Quick actions
      </h2>

      <div className="flex flex-col gap-1">
        {lables.map(lable => {
          return <Button 
            key={lable}
            label={lable} 
            className="rounded-full bg-customBlue text-sm hover:bg-blue-600 hover:text-blue-300 p-2" 
            onClick={() => {alert(`Functionality in development`) }} 
            type="button"
          />
        })}

      </div>
    </div>
  )
}

export default QuickActions