import clsx from "clsx";
import { Paperclip } from "lucide-react";
import { FC } from "react";
import Button from "../../commons/Button";

interface CommunicationCardProps {
  status?: 'NEW' | 'Responded';
  title: string;
  sender: string;
  date: string;
  snippet: string;
  attachments?: number;
  onReply?: () => void;
  special: boolean;
}

const CommunicationCard:FC<CommunicationCardProps> = ({
  status,
  title,
  sender,
  date,
  snippet,
  attachments,
  onReply,
  special,
}) => {
  return (
    <div 
      className={clsx('h-fit bg-insideGray p-4 rounded-3xl shadow-md flex flex-col', special ? 'border-1 border-blue-500' : '')}
    >
      <div className="flex items-center mb-2">
        {status && (
          <span
            className='px-2 py-0.5 rounded-full mr-2 bg-blue-600'
          >
            {status}
          </span>
        )}
        <h2 className="text-xl flex-1">{title}</h2>
      </div>
      <p className="text-gray-500 mb-2">
        {`${sender} // ${date}`}
      </p>
      <p className="text-ms mb-3 text-gray-300">
        {snippet}
      </p>

      {attachments && 
        <div className="flex flex-col  justify-between mt-auto w-1/4 gap-2">
            <div className="bg-green-600/30 text-green-300 px-2.5 py-1 text-ms rounded-full flex justify-center items-center">
              <Paperclip size={14} className="mr-1.5" />
              {attachments} attachments
            </div>

          {onReply && (
            <Button 
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-ms font-medium py-1.5 px-4 w-40 rounded-full"
              label="Reply"
              onClick={onReply}
            />
          )}
        </div>
      }
    </div>
  );
};

export default CommunicationCard