import { CheckIcon, XIcon } from "lucide-react";
import type { ElementType } from "react";

interface NotificationProps {
  icon: ElementType;

  title: string;

  message: string;

  onAccept?: () => void;

  onReject?: () => void;
}

// Bad
export default function Notification({
  icon: Icon,
  title,
  message,
  onAccept,
  onReject,
}: NotificationProps) {
  return (
    <div className="bg-neutral-100 pt-4 pb-4 pr-8 pl-8 w-max rounded-sm flex gap-8 items-center">
      <div className="flex items-center gap-4">
        <Icon className="text-neutral-500 w-6 h-6" />

        <div className="select-none">
          <h2 className="text-l text-neutral-500 font-bold">{title}</h2>

          <p className="text-neutral-500 text-xs">{message}</p>
        </div>
      </div>

      <div className="flex gap-2">
        {onAccept && (
          <button
            className="cursor-pointer bg-green-500 rounded-sm hover:bg-green-600 w-8 h-8 flex items-center justify-center transition delay-10 duration-300 ease-in-out"
            onClick={onAccept}
            title="Accept"
          >
            <CheckIcon className="text-neutral-50" size={16} />
          </button>
        )}

        {onReject && (
          <button
            className="cursor-pointer bg-red-500 rounded-sm hover:bg-red-600 w-8 h-8 flex items-center justify-center transition delay-10 duration-300 ease-in-out"
            onClick={onReject}
            title="Reject"
          >
            <XIcon className="text-neutral-50" size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
