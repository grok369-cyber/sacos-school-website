export const latestNewsQuery = `*[_type == "newsPost" && defined(publishedAt)] | order(publishedAt desc)[0...12]{_id,title,slug,excerpt,coverImage,publishedAt,category}`;
export const latestGalleryQuery = `*[_type == "galleryAlbum"] | order(_createdAt desc)[0...12]{_id,title,coverImage,caption}`;
export const staffQuery = `*[_type == "staffMember"] | order(order asc, name asc){_id,name,position,department,photo,bio}`;
export const eventsQuery = `*[_type == "event"] | order(date asc)[0...12]{_id,title,date,location,excerpt,coverImage}`;
export const schoolSettingsQuery = `*[_type == "schoolSettings"][0]{name,motto,phone,email,address,about,vision,mission,heroImage}`;
