import Notification from "./components/notification/Notification";
import { BellIcon } from "lucide-react";

export default function App() {
  return (
    <div>
      <Notification
        icon={BellIcon}
        title="Lorem ipsum"
        message="Lorem ipsum dolor sit amet"
        onAccept={() => console.log("Accept")}
        onReject={() => console.log("Reject")}
      />
    </div>
  );
}
