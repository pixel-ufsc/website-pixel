import { SanityDocument } from '@sanity/types';

export interface Information extends SanityDocument {
    data: {
        instagram_url: string;
        facebook_url: string;
        linkedin_url: string;
        tiktok_url: string;
        whatsapp_url: string;
        contact_email: string;
    };
}
