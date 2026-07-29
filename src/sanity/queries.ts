// ==================== Home ====================
export const HOME_PAGE_QUERY = `*[_type == "homepage"][0]{
  title,
  heroTitle,
  heroSubtitle,
  heroImage,
  heroButtonText,
  heroButtonLink,
  aboutTitle,
  aboutText,
  aboutImage,
  features[]{
    icon,
    title,
    description,
  },
  ctaTitle,
  ctaText,
  ctaButtonText,
  ctaButtonLink,
}`;

// ==================== Announcements ====================
export const ANNOUNCEMENTS_QUERY = `*[_type == "announcement" && defined(slug.current)] | order(featured desc, publishedAt desc) [$start...$end]{
  _id,
  title,
  slug,
  publishedAt,
  category,
  coverImage,
  excerpt,
  featured,
  order,
}`;

export const ANNOUNCEMENTS_COUNT_QUERY = `count(*[_type == "announcement" && defined(slug.current)])`;

export const ANNOUNCEMENTS_BY_CATEGORY_QUERY = `*[_type == "announcement" && defined(slug.current) && category == $category] | order(featured desc, publishedAt desc) [$start...$end]{
  _id,
  title,
  slug,
  publishedAt,
  category,
  coverImage,
  excerpt,
  featured,
  order,
}`;

export const ANNOUNCEMENTS_BY_CATEGORY_COUNT_QUERY = `count(*[_type == "announcement" && defined(slug.current) && category == $category])`;

export const ANNOUNCEMENT_BY_SLUG_QUERY = `*[_type == "announcement" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  category,
  coverImage,
  excerpt,
  body,
  featured,
  order,
  seo,
}`;

export const LATEST_ANNOUNCEMENTS_QUERY = `*[_type == "announcement" && defined(slug.current)] | order(featured desc, publishedAt desc) [0...3]{
  _id,
  title,
  slug,
  publishedAt,
  category,
  coverImage,
  excerpt,
}`;

// ==================== Activities ====================
export const ACTIVITIES_QUERY = `*[_type == "activity" && defined(slug.current)] | order(featured desc, date desc) [$start...$end]{
  _id,
  title,
  slug,
  date,
  endDate,
  location,
  coverImage,
  excerpt,
  featured,
  order,
}`;

export const ACTIVITIES_COUNT_QUERY = `count(*[_type == "activity" && defined(slug.current)])`;

export const ACTIVITY_BY_SLUG_QUERY = `*[_type == "activity" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  date,
  endDate,
  location,
  coverImage,
  excerpt,
  body,
  gallery,
  featured,
  order,
  seo,
}`;

export const LATEST_ACTIVITIES_QUERY = `*[_type == "activity" && defined(slug.current)] | order(featured desc, date desc) [0...3]{
  _id,
  title,
  slug,
  date,
  endDate,
  location,
  coverImage,
  excerpt,
}`;

// ==================== Committee ====================
export const COMMITTEE_QUERY = `*[_type == "committee" && defined(slug.current)] | order(term desc, order asc){
  _id,
  name,
  slug,
  role,
  term,
  photo,
  bio,
  order,
}`;

// ==================== Teachers ====================
export const TEACHERS_QUERY = `*[_type == "teacher" && defined(slug.current)] | order(order asc){
  _id,
  name,
  slug,
  title,
  photo,
  bio,
  order,
}`;

// ==================== Gallery ====================
export const GALLERY_QUERY = `*[_type == "gallery" && defined(slug.current)] | order(order asc){
  _id,
  title,
  slug,
  group,
  images,
  order,
}`;

export const LATEST_GALLERY_QUERY = `*[_type == "gallery" && defined(slug.current)] | order(order asc) [0...6]{
  _id,
  title,
  slug,
  group,
  images,
  order,
}`;

// ==================== Resources ====================
export const RESOURCES_QUERY = `*[_type == "resource" && defined(slug.current)] | order(order asc){
  _id,
  title,
  slug,
  type,
  file,
  externalUrl,
  coverImage,
  description,
  order,
}`;

// ==================== Sitemap ====================
export const ALL_SLUGS_QUERY = `
{
  "announcements": *[_type == "announcement" && defined(slug.current)].slug.current,
  "activities": *[_type == "activity" && defined(slug.current)].slug.current,
}
`;
