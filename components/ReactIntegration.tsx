import { useEffect } from 'react';

/**
 * Chouhan Group CRM Integration for React (Vite / CRA)
 * 
 * INSTRUCTIONS:
 * 1. Copy this component into your components folder.
 * 2. Include <CRMIntegration /> in your main App.tsx file.
 * 3. Update SOURCE_NAME and DEFAULT_PROJECT for each website.
 */

export const CRMIntegration = () => {
    useEffect(() => {
        const handleCapture = async (e) => {
            const form = e.target;
            if (form.tagName !== 'FORM') return;

            const formData = new FormData(form);
            const payload = {
                customerName: formData.get('name') || formData.get('your-name') || formData.get('userName') || 'Website Lead',
                mobile: formData.get('phone') || formData.get('your-tel') || formData.get('mobile') || '',
                email: formData.get('email') || formData.get('your-email') || '',
                source: 'Chouhan Group Website', // CHANGE THIS for each site
                interestedProject: 'General Inquiry', // CHANGE THIS for each site
                remarks: 'Captured from React App: ' + window.location.hostname
            };

            if (payload.mobile || payload.customerName !== 'Website Lead') {
                try {
                    await fetch('https://chouhan-crm-backend-staging.onrender.com/api/v1/webhooks/lead', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    console.log('✅ Lead successfully sent to CRM');
                } catch (err) {
                    console.error('❌ CRM Error:', err);
                }
            }
        };

        document.addEventListener('submit', handleCapture);

        // Cleanup listener when component unmounts
        return () => document.removeEventListener('submit', handleCapture);
    }, []);

    return null; // This component registers the listener and renders nothing
};
