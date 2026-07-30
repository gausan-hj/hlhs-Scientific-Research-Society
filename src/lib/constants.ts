export const SITE = {
  name: '科研学会',
  nameEn: 'Research Society',
  description: '科研学会官方网站 — 致力于推动学术研究与科技创新',
  descriptionEn: 'Official website of the Research Society — dedicated to advancing academic research and technological innovation',
  url: 'https://research-society.vercel.app',
  locale: 'zh-CN',
  defaultImage: '/images/og-default.png',
} as const;

export const NAV_LINKS = [
  { href: '/', label: '首页', labelEn: 'Home' },
  { href: '/about', label: '关于我们', labelEn: 'About' },
  { href: '/activities', label: '活动', labelEn: 'Activities' },
  { href: '/announcements', label: '公告', labelEn: 'Announcements' },
  { href: '/memories', label: '回忆簿', labelEn: 'Memories' },
  { href: '/resources', label: '资源', labelEn: 'Resources' },
] as const;

export const ITEMS_PER_PAGE = 9;
