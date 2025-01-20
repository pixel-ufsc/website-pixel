import { SanityDocument, Image } from '@sanity/types';

export interface Member extends SanityDocument {
    data: {
        name: string;
        role: string;
        is_director: boolean;
        isCurrentMember: boolean;
        // The image prop is set to be a Sanity Image Object. Make sure to handle the image object correctly in the component.
        image: Image;
    };
}

