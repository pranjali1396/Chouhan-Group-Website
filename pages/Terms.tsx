
import React, { useEffect } from 'react';

const Terms: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 font-sans text-slate-800">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-8">Terms & Conditions</h1>
                <div className="h-1 w-24 bg-amber-500 mb-12"></div>

                <div className="space-y-8 text-lg leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
                        <p>
                            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Chouhan Group ("we," "us" or "our"), concerning your access to and use of the Chouhan Group website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Intellectual Property Rights</h2>
                        <p>
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Property Information</h2>
                        <p>
                            The information provided on this website regarding real estate projects, layouts, plans, and specifications is for general information purposes only. While we strive for accuracy, all details are subject to change without prior notice. The visuals, images, and renderings are artistic impressions and may not represent the actual deliverables. We recommend verifying all details directly with our sales team before making any purchase decisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. User Representations</h2>
                        <p>
                            By using the Site, you represent and warrant that:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
                            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
                        <p>
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and defined following the laws of India. Chouhan Group and yourself irrevocably consent that the courts of Chhattisgarh shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
                        <p>
                            To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        </p>
                        <div className="mt-4 p-6 bg-slate-50 rounded-lg border border-slate-200">
                            <p className="font-bold">Chouhan Group</p>
                            <p>Ground Floor, Chouhan Estate, Beside Chandra Maurya Talkies,</p>
                            <p>NH53, Bhilai, Chhattisgarh - 490001</p>
                            <p className="mt-2">Phone: +91 91091 04005</p>
                        </div>
                    </section>

                    <p className="text-sm text-slate-500 mt-12 pt-8 border-t border-slate-200">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
