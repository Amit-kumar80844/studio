import * as React from 'react';
import ProfileSection from '@/components/profile-section';
import Image from 'next/image';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <ProfileSection />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 relative">
        <Image
          src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Abstract technology background"
          fill
          className="object-cover -z-10"
          priority
          data-ai-hint="abstract technology"
        />
        <div className="relative z-0">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
