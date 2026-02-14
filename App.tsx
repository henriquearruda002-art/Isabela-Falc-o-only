
import React, { useState, useEffect } from 'react';
import AgeGate from './components/AgeGate';
import ProfilePage from './components/ProfilePage';

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Verifica o estado de verificação no armazenamento local
    const verified = localStorage.getItem('ageVerified') === 'true';
    setIsVerified(verified);
    
    // Pequeno delay para evitar flickering na carga inicial
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleVerify = () => {
    setIsVerified(true);
  };

  const handleReset = () => {
    localStorage.removeItem('ageVerified');
    setIsVerified(false);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#00aff0] border-t-transparent rounded-full animate-spin"></div>
          <h1 className="text-[#00aff0] text-2xl font-bold">OnlyFans</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {isVerified ? (
        <ProfilePage onBack={handleReset} />
      ) : (
        <AgeGate onVerify={handleVerify} />
      )}
    </div>
  );
};

export default App;
