import { createClient } from 'next-sanity';
import { clientConfig } from './sanity.api';
// Queries
import { allDirectorsQuery, allMembersQuery } from './sanity.queries';

const sanityClient = createClient(clientConfig);

export async function getAllMembers() {
    return await sanityClient.fetch(allMembersQuery);
}

export async function getAllDirectors() {
    return await sanityClient.fetch(allDirectorsQuery);
}
