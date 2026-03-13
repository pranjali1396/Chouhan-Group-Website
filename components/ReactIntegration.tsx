import { useEffect } from 'react';

/**
 * Chouhan Group CRM Integration for React (Vite / CRA)
 */

const SOURCE_NAME = 'Chouhan Group Official Website';
const DEFAULT_PROJECT = 'Chouhan Group';

export const CRMIntegration = () => {
    useEffect(() => {
        const handleCapture = async (e: Event) => {
            const form = e.target as HTMLFormElement;
            if (!form || form.tagName !== 'FORM') return;

            const formData = new FormData(form);

            const firstName = (formData.get('firstName') as string) || '';
            const lastName = (formData.get('lastName') as string) || '';
            const combinedName = (firstName + ' ' + lastName).trim();

            const payload = {
                customerName: combinedName || (formData.get('name') as string) || (formData.get('your-name') as string) || 'Website Lead',
                mobile: (formData.get('phone') as string) || (formData.get('your-tel') as string) || (formData.get('mobile') as string) || '',
                email: (formData.get('email') as string) || (formData.get('your-email') as string) || '',
                source: SOURCE_NAME,
                interestedProject: DEFAULT_PROJECT,
                isBroker: (formData.get('broker') as string) || (formData.get('Are you a broker?') as string) || '',
                platform: (formData.get('source') as string) || (formData.get('How did you hear about us?') as string) || '',
                interestedUnit: (formData.get('homeType') as string) || (formData.get('project') as string) || (formData.get('Home type interested in?') as string) || '',
                remarks: 'Captured from React App: ' + window.location.pathname
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
