import React from 'react';

const Stat = ({ icon: Icon, label, value, accent = false }) => {
    return (
        <div
            className={`flex flex-col gap-1.5 p-4 rounded-2xl border ${accent
                    ? 'bg-indigo-600 border-indigo-500 text-white'
                    : 'bg-white border-slate-100 text-slate-700'
                } shadow-sm`}
        >
            <div
                className={`w-8 h-8 flex items-center justify-center rounded-lg ${accent ? 'bg-white/20' : 'bg-indigo-50'
                    }`}
            >
                <Icon className={`w-4 h-4 ${accent ? 'text-white' : 'text-indigo-500'}`} />
            </div>
            <p className={`text-[10px] font-semibold uppercase tracking-widest ${accent ? 'text-indigo-100' : 'text-slate-400'}`}>
                {label}
            </p>
            <p className={`text-base font-extrabold leading-tight ${accent ? 'text-white' : 'text-slate-800'}`}>
                {value}
            </p>
        </div>
    );
};

export default Stat;