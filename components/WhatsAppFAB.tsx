
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Building2, Car, Coffee, Home, X } from 'lucide-react';

const WhatsAppFAB: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const divisions = [
        {
            name: "Real Estate",
            number: "919511121113", // Updated verified number
            icon: <Building2 size={20} />,
            color: "bg-amber-500"
        },
        {
            name: "Hospitality",
            number: "917566660048",
            icon: <Coffee size={20} />,
            color: "bg-purple-600"
        },
        {
            name: "Automobiles",
            number: "917222910019",
            icon: <Car size={20} />,
            color: "bg-blue-600"
        },
        {
            name: "Rentals / Leasing",
            number: "919511121113",
            icon: <Home size={20} />,
            color: "bg-emerald-600"
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4" ref={menuRef}>

            {/* Menu Options */}
            <div className={`flex flex-col gap-3 transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8 pointer-events-none'}`}>
                {divisions.map((div, idx) => (
                    <a
                        key={idx}
                        href={`https://wa.me/${div.number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white pl-4 pr-2 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all group border border-slate-100"
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="text-sm font-bold text-slate-700 uppercase tracking-wide group-hover:text-slate-900">{div.name}</span>
                        <div className={`w-10 h-10 ${div.color} text-white rounded-full flex items-center justify-center shadow-md`}>
                            {div.icon}
                        </div>
                    </a>
                ))}
            </div>

            {/* Main Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-4 py-3 rounded-full text-white font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${isOpen ? 'bg-slate-800 pr-3' : 'bg-[#25D366] hover:bg-[#20bd5a]'}`}
            >
                <span className={`transition-all duration-300 ${isOpen ? 'max-w-0 opacity-0 overflow-hidden' : 'max-w-xs opacity-100'}`}>
                    WhatsApp Support
                </span>
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <MessageCircle
                        size={24}
                        className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                    />
                    <X
                        size={24}
                        className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
                    />
                </div>
            </button>
        </div>
    );
};

export default WhatsAppFAB;
