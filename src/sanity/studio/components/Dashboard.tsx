import React, { useEffect, useState } from 'react';
import {
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  Spinner,
} from '@sanity/ui';
import {
  Megaphone,
  Calendar,
  BookOpen,
  Camera,
  FileText,
  Plus,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { useClient } from 'sanity';
import { useRouter } from 'sanity/router';

interface CountResult {
  announcements: number;
  activities: number;
  resources: number;
  memories: number;
}

interface RecentItem {
  _id: string;
  _type: string;
  title: string;
  _updatedAt: string;
}

const DOC_TYPE_META: Record<string, { label: string; icon: React.ReactNode; createPath: string }> = {
  announcement: {
    label: '公告',
    icon: React.createElement(Megaphone, { size: 16 }),
    createPath: '/intent/create/template=announcement;type=announcement/',
  },
  activity: {
    label: '活動',
    icon: React.createElement(Calendar, { size: 16 }),
    createPath: '/intent/create/template=activity;type=activity/',
  },
  resource: {
    label: '資源',
    icon: React.createElement(BookOpen, { size: 16 }),
    createPath: '/intent/create/template=resource;type=resource/',
  },
  memoryAlbum: {
    label: '回憶簿',
    icon: React.createElement(Camera, { size: 16 }),
    createPath: '/intent/create/template=memoryAlbum;type=memoryAlbum/',
  },
  teacher: {
    label: '顧問老師',
    icon: React.createElement(FileText, { size: 16 }),
    createPath: '/intent/create/template=teacher;type=teacher/',
  },
  committee: {
    label: '理事',
    icon: React.createElement(FileText, { size: 16 }),
    createPath: '/intent/create/template=committee;type=committee/',
  },
};

const RECENT_TYPE_ORDER = ['announcement', 'activity', 'resource', 'memoryAlbum', 'teacher', 'committee'];

function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return '剛剛';
  if (diffMins < 60) return `${diffMins} 分鐘前`;
  if (diffHours < 24) return `${diffHours} 小時前`;
  if (diffDays < 7) return `${diffDays} 天前`;
  return date.toLocaleDateString('zh-TW');
}

export function Dashboard() {
  const client = useClient({ apiVersion: '2026-03-01' });
  const router = useRouter();
  const [counts, setCounts] = useState<CountResult | null>(null);
  const [recent, setRecent] = useState<RecentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [countResult, recentResult] = await Promise.all([
          client.fetch<CountResult>(
            `{
              "announcements": count(*[_type == "announcement" && defined(slug.current)]),
              "activities": count(*[_type == "activity" && defined(slug.current)]),
              "resources": count(*[_type == "resource" && defined(slug.current)]),
              "memories": count(*[_type == "memoryAlbum" && defined(slug.current)])
            }`,
          ),
          client.fetch<RecentItem[]>(
            `*[_type in ["announcement", "activity", "resource", "memoryAlbum", "teacher", "committee"]] | order(_updatedAt desc) [0...8] {
              _id,
              _type,
              title,
              _updatedAt
            }`,
          ),
        ]);
        setCounts(countResult);
        setRecent(recentResult);
      } catch (err) {
        console.error('Dashboard fetch error:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [client]);

  const statCards = counts
    ? [
        { count: counts.announcements, label: '公告', icon: React.createElement(Megaphone, { size: 24 }), color: '#3b6aee' },
        { count: counts.activities, label: '活動', icon: React.createElement(Calendar, { size: 24 }), color: '#7c3aed' },
        { count: counts.resources, label: '資源', icon: React.createElement(BookOpen, { size: 24 }), color: '#16a34a' },
        { count: counts.memories, label: '回憶簿', icon: React.createElement(Camera, { size: 24 }), color: '#ea580c' },
      ]
    : [];

  const quickCreateItems = ['announcement', 'activity', 'resource', 'memoryAlbum', 'teacher', 'committee'] as const;

  if (loading) {
    return (
      <Flex align="center" justify="center" padding={8} height="fill">
        <Spinner />
      </Flex>
    );
  }

  return (
    <Container width={4} padding={[4, 5, 6]}>
      <Stack space={[5, 6, 7]}>
        {/* ── Header ── */}
        <Box>
          <Heading as="h1" size={4} weight="bold">
            歡迎回來 👋
          </Heading>
          <Text size={2} muted style={{ marginTop: 8 }}>
            這裡是科研學會內容管理系統的概覽
          </Text>
        </Box>

        {/* ── 統計卡片 ── */}
        <Grid columns={[2, 2, 4]} gap={[3, 4, 4]}>
          {statCards.map((card) => (
            <Card
              key={card.label}
              padding={[4, 4, 5]}
              radius={4}
              shadow={1}
              style={{}}
            >
              <Flex align="center" gap={3}>
                <Flex
                  align="center"
                  justify="center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: `${card.color}14`,
                    color: card.color,
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </Flex>
                <Stack space={1}>
                  <Text size={4} weight="bold">
                    {card.count}
                  </Text>
                  <Text size={1} muted>
                    {card.label}
                  </Text>
                </Stack>
              </Flex>
            </Card>
          ))}
        </Grid>

        {/* ── 快速新增 ── */}
        <Card padding={[4, 4, 5]} radius={4} shadow={1}>
          <Stack space={4}>
            <Flex align="center" gap={2}>
              <Plus size={18} style={{ opacity: 0.6 }} />
              <Heading as="h2" size={2} weight="semibold">
                快速新增
              </Heading>
            </Flex>
            <Grid columns={[2, 3, 6]} gap={2}>
              {quickCreateItems.map((type) => {
                const meta = DOC_TYPE_META[type];
                return (
                  <Button
                    key={type}
                    mode="ghost"
                    tone="default"
                    fontSize={1}
                    padding={3}
                    style={{ borderRadius: 12 }}
                    onClick={() => router.navigateUrl({ path: meta.createPath })}
                  >
                    <Flex align="center" gap={2}>
                      {meta.icon}
                      <Text size={1}>{meta.label}</Text>
                    </Flex>
                  </Button>
                );
              })}
            </Grid>
          </Stack>
        </Card>

        {/* ── 最近更新 ── */}
        <Card padding={[4, 4, 5]} radius={4} shadow={1}>
          <Stack space={4}>
            <Flex align="center" gap={2}>
              <Clock size={18} style={{ opacity: 0.6 }} />
              <Heading as="h2" size={2} weight="semibold">
                最近更新
              </Heading>
            </Flex>
            <Stack space={1}>
              {recent.map((item, idx) => {
                const meta = DOC_TYPE_META[item._type];
                // Link to the document editor
                const docPath = `/intent/edit/id=${item._id};type=${item._type}/`;
                return (
                  <Button
                    key={item._id}
                    mode="bleed"
                    tone="default"
                    fontSize={1}
                    padding={3}
                    style={{
                      borderRadius: 10,
                      width: '100%',
                      justifyContent: 'flex-start',
                    }}
                    onClick={() => router.navigateUrl({ path: docPath })}
                  >
                    <Flex align="center" gap={3} style={{ width: '100%' }}>
                      <Text size={1} muted style={{ minWidth: 48 }}>
                        {formatRelativeTime(item._updatedAt)}
                      </Text>
                      <Flex
                        align="center"
                        justify="center"
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 8,
                          backgroundColor: 'var(--card-badge-default-bg)',
                          flexShrink: 0,
                        }}
                      >
                        {meta?.icon}
                      </Flex>
                      <Text size={1} weight="medium" style={{ flex: 1 }}>
                        {item.title || '(無標題)'}
                      </Text>
                      <Text size={0} muted>
                        {meta?.label}
                      </Text>
                      <ArrowRight size={14} style={{ opacity: 0.3 }} />
                    </Flex>
                  </Button>
                );
              })}
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
