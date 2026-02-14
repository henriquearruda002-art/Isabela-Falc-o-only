
import React, { useState } from 'react';
import { isAdult } from '../utils/ageValidator';

interface AgeGateProps {
  onVerify: () => void;
}

const AgeGate: React.FC<AgeGateProps> = ({ onVerify }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [age, setAge] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleConfirmAccess = () => {
    const ageNum = parseInt(age);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);

    if (!age || !month || !year || isNaN(ageNum) || isNaN(monthNum) || isNaN(yearNum)) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Using a simple logic based on the birth year for better UX matching the visual
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - yearNum;

    if (calculatedAge >= 18 && ageNum >= 18) {
      localStorage.setItem('ageVerified', 'true');
      onVerify();
    } else {
      setError('Você deve ter mais de 18 anos.');
    }
  };

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  if (step === 1) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0091ff] px-6">
        <div className="bg-white rounded-[40px] shadow-2xl p-10 max-w-sm w-full text-center flex flex-col items-center">
          <div className="mb-10 mt-4">
            <h1 className="text-[#0091ff] text-5xl font-extrabold italic tracking-tighter">OnlyFans</h1>
            <div className="h-0.5 w-16 bg-gray-100 mx-auto mt-2"></div>
          </div>
          
          <h2 className="text-xl font-black text-[#1a1a1a] leading-tight mb-8 px-4">
            VERIFICAÇÃO DE<br />SEGURANÇA EXCLUSIVA
          </h2>

          <div className="w-full flex flex-col gap-4 mb-12">
            <button
              onClick={() => setStep(2)}
              className="w-full bg-[#0091ff] hover:bg-[#007edb] text-white font-bold py-5 rounded-2xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 group"
            >
              SOU MAIOR DE IDADE 
              <i className="fa-solid fa-chevron-right text-sm mt-0.5 group-hover:translate-x-1 transition-transform"></i>
            </button>

            <button
              onClick={() => alert("Você não pode acessar este conteúdo.")}
              className="w-full bg-white border border-gray-100 text-[#9ca3af] font-bold py-5 rounded-2xl hover:bg-gray-50 transition-all"
            >
              SOU MENOR DE IDADE
            </button>
          </div>

          <p className="text-[11px] font-bold text-[#b0b3b8] tracking-[0.1em] mb-4">
            ACESSO RESTRITO A MAIORES DE 18 ANOS
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0091ff] px-6">
      <div className="bg-white rounded-[40px] shadow-2xl p-8 max-w-sm w-full flex flex-col items-center relative overflow-hidden">
        
        {/* Back Button */}
        <button 
          onClick={() => setStep(1)}
          className="absolute top-8 left-8 text-[#b0b3b8] font-bold text-sm flex items-center gap-1 hover:text-gray-600 transition-colors"
        >
          <i className="fa-solid fa-arrow-left text-xs"></i> Voltar
        </button>

        <div className="mt-12 mb-6 flex justify-center">
          <div className="w-16 h-16 bg-[#f0f7ff] rounded-2xl flex items-center justify-center">
            <i className="fa-regular fa-calendar-check text-[#0091ff] text-2xl"></i>
          </div>
        </div>

        <h2 className="text-xl font-black text-[#1a1a1a] mb-1">CONFIRME SEUS DADOS</h2>
        <p className="text-[#b0b3b8] text-sm font-medium mb-8">Insira sua data de nascimento real</p>

        <div className="w-full space-y-4 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-[#b0b3b8] tracking-widest uppercase ml-1">IDADE</label>
              <input
                type="number"
                placeholder="21"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="bg-[#f8f9fa] border-none rounded-2xl p-4 text-center font-bold text-[#d1d5db] focus:ring-2 focus:ring-[#0091ff] focus:text-[#1a1a1a] outline-none transition-all placeholder:text-[#e5e7eb]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-[#b0b3b8] tracking-widest uppercase ml-1">MÊS</label>
              <div className="relative">
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="bg-[#f8f9fa] border-none rounded-2xl p-4 w-full text-center font-bold text-[#1a1a1a] focus:ring-2 focus:ring-[#0091ff] outline-none transition-all appearance-none pr-8"
                >
                  <option value="" disabled>Mês</option>
                  {months.map((m, idx) => (
                    <option key={m} value={idx + 1}>{m}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300">
                   <i className="fa-solid fa-caret-down text-xs"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-[#b0b3b8] tracking-widest uppercase ml-1">ANO DE NASCIMENTO</label>
            <input
              type="number"
              placeholder="2000"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="bg-[#f8f9fa] border-none rounded-2xl p-4 text-center font-bold text-[#d1d5db] focus:ring-2 focus:ring-[#0091ff] focus:text-[#1a1a1a] outline-none transition-all placeholder:text-[#e5e7eb]"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-xs font-bold mb-4">{error}</p>
        )}

        <button
          onClick={handleConfirmAccess}
          className="w-full bg-[#0091ff] hover:bg-[#007edb] text-white font-bold py-5 rounded-2xl transition-all duration-200 shadow-lg shadow-blue-100 uppercase tracking-wide text-sm mb-4"
        >
          CONFIRMAR ACESSO
        </button>
      </div>
    </div>
  );
};

export default AgeGate;
