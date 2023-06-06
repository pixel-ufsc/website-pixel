import { createClient } from 'next-sanity';
import { clientConfig } from './sanity.api';
// Queries
import {
    allDirectorsQuery,
    allMembersQuery,
    allProjectsPreviewQuery,
    allProjectsQuery,
    allSocialInfoQuery,
    usefullLinksQuery,
} from './sanity.queries';

export const sanityClient = createClient(clientConfig);

export async function getAllMembers() {
    return await sanityClient.fetch(allMembersQuery);
}

export async function getAllDirectors() {
    return await sanityClient.fetch(allDirectorsQuery);
}

export async function getAllSocialInfo() {
    return await sanityClient.fetch(allSocialInfoQuery);
}

export async function getAllProjectsPreview() {
    return await sanityClient.fetch(allProjectsPreviewQuery);
}

export async function getAllProjects() {
    return await sanityClient.fetch(allProjectsQuery);
}

export async function getLinksPageData() {
    return await sanityClient.fetch(usefullLinksQuery);
}
