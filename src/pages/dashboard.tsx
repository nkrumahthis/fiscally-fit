import Sidebar from '@/components/sidebar';
import { useState } from 'react';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1">
        <h1>Dashboard</h1>
        <p>This is the dashboard content.</p>
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
      </div>
    </div>
  );
};

export default Dashboard;
