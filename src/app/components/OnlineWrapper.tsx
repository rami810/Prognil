"use client";

import useOnlineStatus from "@/hooks/useOnlineStatus";
import OfflineScreen from "./OfflineScreen";

export default function OnlineWrapper({ children }: { children: React.ReactNode }) {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <OfflineScreen />;
  }

  return <>{children}</>;
}
