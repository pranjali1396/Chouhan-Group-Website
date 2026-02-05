
import React, { useEffect, useState } from 'react';
import { Save } from 'lucide-react';

const ToggleSwitch: React.FC<{ checked: boolean; onChange: (checked: boolean) => void; disabled?: boolean }> = ({ checked, onChange, disabled }) => (
    <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => !disabled && onChange(!checked)}
        className={`${checked ? 'bg-amber-500' : 'bg-slate-300'
            } relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        disabled={disabled}
    >
        <span className="sr-only">Toggle switch</span>
        <span
            className={`${checked ? 'translate-x-7' : 'translate-x-1'
                } inline-block h-6 w-6 transform rounded-full bg-white transition duration-200 ease-in-out`}
        />
    </button>
);

const ConsentPreferences: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [preferences, setPreferences] = useState({
        essential: true,
        marketing: false,
        analytics: true,
        functional: false
    });

    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
        // Logic to save preferences to local storage or backend would go here
    };

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 font-sans text-slate-800">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-8">Consent Preferences</h1>
                <div className="h-1 w-24 bg-amber-500 mb-12"></div>

                <p className="text-lg mb-12 leading-relaxed text-slate-600">
                    Chouhan Group respects your privacy. You can manage your privacy preferences below. Essential cookies are always enabled as they are necessary for the website to function properly. You can choose to enable or disable other types of data collection.
                </p>

                <div className="space-y-8 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">

                    {/* Essential */}
                    <div className="flex items-center justify-between gap-8 pb-8 border-b border-slate-200">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Essential Cookies</h3>
                            <p className="text-sm text-slate-500">Necessary for the website to function (e.g., security, network management, and accessibility). You cannot disable these.</p>
                        </div>
                        <ToggleSwitch
                            checked={preferences.essential}
                            onChange={() => { }}
                            disabled={true}
                        />
                    </div>

                    {/* Analytics */}
                    <div className="flex items-center justify-between gap-8 pb-8 border-b border-slate-200">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Analytics Data</h3>
                            <p className="text-sm text-slate-500">Allows us to count visits and traffic sources so we can measure and improve the performance of our site. Data is aggregated and anonymous.</p>
                        </div>
                        <ToggleSwitch
                            checked={preferences.analytics}
                            onChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
                        />
                    </div>

                    {/* Functional */}
                    <div className="flex items-center justify-between gap-8 pb-8 border-b border-slate-200">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Functional Cookies</h3>
                            <p className="text-sm text-slate-500">Enables the website to provide enhanced functionality and personalization based on your interactions.</p>
                        </div>
                        <ToggleSwitch
                            checked={preferences.functional}
                            onChange={(checked) => setPreferences({ ...preferences, functional: checked })}
                        />
                    </div>

                    {/* Marketing */}
                    <div className="flex items-center justify-between gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Marketing & Communications</h3>
                            <p className="text-sm text-slate-500">Used to deliver relevant advertisements and track ad campaign performance. Also governs email marketing preferences.</p>
                        </div>
                        <ToggleSwitch
                            checked={preferences.marketing}
                            onChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
                        />
                    </div>

                </div>

                <div className="mt-12 flex justify-end">
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-amber-500 transition-all shadow-lg hover:shadow-xl"
                    >
                        {saved ? 'Preferences Saved!' : 'Save Preferences'} <Save size={18} />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ConsentPreferences;
