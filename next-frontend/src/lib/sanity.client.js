import { createClient } from 'next-sanity';
import { clientConfig } from './sanity.api';
// Queries
import { allDirectorsQuery, allMembersQuery, allSocialInfoQuery } from './sanity.queries';

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
