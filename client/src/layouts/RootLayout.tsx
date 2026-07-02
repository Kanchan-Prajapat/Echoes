import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Outlet />
    </div>
  );
};

export default RootLayout;