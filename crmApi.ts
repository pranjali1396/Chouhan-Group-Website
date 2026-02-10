
export interface LeadData {
    customerName: string;
    mobile: string;
    email?: string;
    interestedProject?: string;
    interestedUnit?: string;
    remarks?: string;
    city?: string;
    budget?: string;
    purpose?: string;
    platform?: string;
    source?: string;
}

export const submitLead = async (leadData: LeadData) => {
    // Default to the user's CRM URL if not specified in env
    const API_URL = import.meta.env.VITE_CRM_API_URL || 'https://chouhan-group.vercel.app/api/v1/webhooks/lead';

    console.log('Using API URL:', API_URL);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...leadData,
                source: leadData.source || 'Website Enquiry',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || 'Failed to submit lead to CRM');
        }

        return await response.json();
    } catch (error) {
        console.error('CRM Submission Error:', error);
        throw error;
    }
};
