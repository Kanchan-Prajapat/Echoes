import { Outlet } from "react-router-dom";
import BottomNavigation from "@/components/navigation/BottomNavigation";

const AppLayout = () => {
  return (
    <main className="min-h-screen bg-background">
      <Outlet />
      <BottomNavigation />
    </main>
  );
};

export default AppLayout;