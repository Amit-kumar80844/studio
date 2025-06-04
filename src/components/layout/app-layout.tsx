import * as React from 'react';
import ProfileSection from '@/components/profile-section';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <ProfileSection />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 animated-gradient-bg">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
