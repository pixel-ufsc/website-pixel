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

export const allSocialInfoQuery = groq`
	*[_type == "information"] {
		_createdAt, _id, _rev, _type, _updatedAt,
		"data": {
			instagram_url,
			facebook_url,
			linkedin_url,
			tiktok_url,
			whatsapp_url,
			contact_email,
		}
	}
`;

export const allProjectsPreviewQuery = groq`
	*[_type == "project"] | order(_createdAt desc) {
		_createdAt, _id, _rev, _type, _updatedAt,
		"data": {
			name,
			slug,
			preview_image,
			tags,
		}
	}
`;

export const usefullLinksQuery = groq`
	*[_type == "linksPage"] {
		_createdAt, _id, _rev, _type, _updatedAt,
		"data": {
			links[] {
				title,
				url,
				highlight,
				open_in_new_tab,
			}
		}
	}
`;
