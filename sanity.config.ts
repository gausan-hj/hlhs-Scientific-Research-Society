import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { LayoutDashboard } from 'lucide-react';
import { schemaTypes } from './src/sanity/schemas';
import { structure } from './src/sanity/studio/structure';
import { theme } from './src/sanity/studio/theme';
import { Dashboard } from './src/sanity/studio/components/Dashboard';
import './src/sanity/studio/studio.css';

export default defineConfig({
  name: 'research-society',
  title: '科研學會 CMS',
  projectId: 'zbnhj067',
  dataset: 'production',
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  theme,
  tools: [
    {
      name: 'dashboard',
      title: '首頁儀表板',
      icon: LayoutDashboard,
      component: Dashboard,
    },
  ],
});
