
import React, { useState, useEffect } from 'react';

interface ProfilePageProps {
  onBack?: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onBack }) => {
  const profileImageUrl = "https://i.ibb.co/BKTM91T0/IMG-20260212-215348.jpg";
  const coverImageUrl = "https://i.ibb.co/LzZfPNqd/IMG-20260212-225508.jpg";
  const firstVideoThumb = "https://i.ibb.co/LX8tkn1M/by-PKOFs-Telegram-0073.jpg";
  const secondVideoThumb = "https://i.ibb.co/wNTnChxL/by-PKOFs-Telegram-0007.jpg";
  const thirdVideoThumb = "https://i.ibb.co/n91v8Zd/by-PKOFs-Telegram-0041.jpg";
  const fourthVideoThumb = "https://i.ibb.co/BD01bGm/by-PKOFs-Telegram-0076.jpg";
  const telegramLink = "https://t.me/+egEzuuMN3D5jYjBh";
  const subscribeBotLink = "https://t.me/isabelaonly_bot";
  
  const [activeTab, setActiveTab] = useState<'tudo' | 'videos' | 'favoritos'>('tudo');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleShare = async () => {
    const shareData = {
      title: 'Isabela Falcão 🌸 - OnlyFans',
      text: 'Confira o perfil exclusivo da Isabela Falcão!',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setToastMessage('Link copiado!');
        setShowToast(true);
      }
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        await navigator.clipboard.writeText(window.location.href);
        setToastMessage('Link copiado!');
        setShowToast(true);
      }
    }
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const faqs = [
    {
      q: "É sigiloso? Vai aparecer no meu extrato o nome do pix?",
      a: "Sim, é totalmente sigiloso. No seu extrato aparecerá apenas um nome genérico de processamento de pagamentos, sem qualquer menção ao conteúdo ou site."
    },
    {
      q: "Como recebo o acesso?",
      a: "Após a confirmação do pagamento via Pix ou Cartão, você recebe o link de acesso instantaneamente no seu e-mail ou via bot do Telegram."
    },
    {
      q: "Por quanto tempo tenho acesso?",
      a: "O acesso é vitalício ou por assinatura mensal, dependendo do plano escolhido no momento da compra."
    }
  ];

  const mediaItems = [
    { likes: "67.4K", comments: "1.9K", id: 1, thumb: firstVideoThumb },
    { likes: "89.8K", comments: "7.1K", id: 2, thumb: secondVideoThumb },
    { likes: "55.3K", comments: "8.4K", id: 3, thumb: thirdVideoThumb },
    { likes: "42.1K", comments: "3.2K", id: 4, thumb: fourthVideoThumb },
    { likes: "31.5K", comments: "1.1K", id: 5, thumb: profileImageUrl },
    { likes: "94.2K", comments: "12K", id: 6, thumb: coverImageUrl },
  ];

  return (
    <div className="max-w-xl mx-auto bg-white min-h-screen shadow-lg flex flex-col pb-20 relative overflow-x-hidden">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors active:scale-90"
            aria-label="Voltar"
          >
            <i className="fa-solid fa-arrow-left text-gray-700"></i>
          </button>
          <div>
            <h1 className="font-bold text-lg flex items-center gap-1">
              Isabela Falcão 🌸 <i className="fa-solid fa-circle-check text-[#00aff0] text-sm"></i>
            </h1>
            <p className="text-gray-500 text-xs">1.1K fotos • 320 vídeos</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={handleShare} className="w-8 h-8 flex items-center justify-center rounded-full active:scale-90">
            <i className="fa-solid fa-share-nodes text-gray-700"></i>
          </button>
          <i className="fa-solid fa-ellipsis text-gray-700"></i>
        </div>
      </div>

      {/* Profile Section */}
      <div className="h-48 relative bg-gray-200">
        <img src={coverImageUrl} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute -bottom-12 left-4">
          <img src={profileImageUrl} alt="Profile" className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-sm" />
        </div>
      </div>

      <div className="mt-16 px-4 pb-4">
        <h2 className="font-bold text-xl flex items-center gap-1">Isabela Falcão 🌸 <i className="fa-solid fa-circle-check text-[#00aff0] text-sm"></i></h2>
        <p className="text-gray-500 text-sm">@isabelafalcao • Disponível agora</p>
        <p className="mt-4 text-sm text-gray-800 leading-relaxed">
          Assine agora e vem aproveitar meus conteúdos explícitos🔥
        </p>
      </div>

      {/* Buttons */}
      <div className="px-4 flex flex-col gap-4">
        <a href={subscribeBotLink} target="_blank" rel="noopener noreferrer" className="w-full bg-[#00aff0] text-white font-black py-5 rounded-2xl text-center uppercase tracking-widest shadow-lg shadow-blue-100 active:scale-[0.98] transition-transform">
          ASSINAR AGORA
        </a>
        <div className="bg-white rounded-3xl p-6 border border-gray-50 shadow-sm flex flex-col items-center">
          <h3 className="font-black text-lg uppercase">GRUPO DE PRÉVIAS</h3>
          <p className="text-gray-400 font-bold text-[10px] tracking-widest mb-4">GRÁTIS</p>
          <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="w-full bg-[#0d141e] text-white font-black py-4 rounded-full text-center text-sm uppercase active:scale-[0.98] transition-transform">ENTRAR NO GRUPO</a>
        </div>
      </div>

      {/* Online Status */}
      <div className="px-4 mt-8 flex justify-center">
        <div className="bg-[#f8f9fb] rounded-full px-10 py-5 flex flex-col items-center border border-gray-100">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#48dfa2] rounded-full animate-pulse"></span>
            <span className="font-black text-sm text-[#222b45]">141 pessoas online agora</span>
          </div>
          <p className="text-[#b0b3b8] font-bold text-[9px] uppercase tracking-widest">+1.400 MEMBROS</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 border-b border-gray-100 bg-white">
        <div className="flex">
          {(['tudo', 'videos', 'favoritos'] as const).map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest relative ${activeTab === tab ? 'text-[#00aff0]' : 'text-[#b0b3b8]'}`}
            >
              <i className={`fa-solid ${tab === 'tudo' ? 'fa-camera' : tab === 'videos' ? 'fa-video' : 'fa-star'} text-lg`}></i>
              {tab === 'tudo' ? 'TUDO' : tab === 'videos' ? 'VÍDEOS' : 'FAVORITOS'}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00aff0]"></div>}
            </button>
          ))}
        </div>
      </div>

      {/* Dark Section - Media Grid & FAQ */}
      <div className="bg-[#0f0f0f] pt-1 pb-16">
        {/* Media Grid */}
        <div className="grid grid-cols-2 gap-3 p-3">
          {mediaItems.map((item) => (
            <div key={item.id} className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-zinc-900 group">
              <img 
                src={item.thumb} 
                alt="Locked Content" 
                className="w-full h-full object-cover blur-[6px] opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:opacity-70"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/30 active:scale-90 transition-transform">
                  <i className="fa-solid fa-play text-2xl ml-1"></i>
                </div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 text-white font-bold text-[11px] bg-black/20 backdrop-blur-sm p-2 rounded-xl">
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-heart text-white/80"></i>
                  {item.likes}
                </div>
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-comment text-white/80"></i>
                  {item.comments}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="px-6 mt-12 mb-10">
          <h2 className="text-2xl font-black text-white mb-8">Perguntas Frequentes</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#1a1a1a] rounded-2xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left group"
                >
                  <span className="text-white font-bold text-sm leading-relaxed pr-4">
                    {faq.q}
                  </span>
                  <i className={`fa-solid fa-chevron-down text-zinc-600 text-xs transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}></i>
                </button>
                
                {openFaq === idx && (
                  <div className="px-5 pb-5 animate-fadeIn">
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Toast Feedback */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-black/90 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl border border-white/10">
            {toastMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
