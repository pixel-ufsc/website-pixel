import { groq } from 'next-sanity';

export const allMembersQuery = groq`
	*[_type == "member"] | order(is_director desc, name asc) {
		_createdAt, _id, _rev, _type, _updatedAt,
		"data": {
			name,
			role,
			image,
			is_director,
		}
	}
`;

export const allDirectorsQuery = groq`
	*[_type == "member" && is_director == true] | order(name asc) {
		_createdAt, _id, _rev, _type, _updatedAt,
		"data": {
			name,
			role,
			image,
			is_director,
		}
	}
`;