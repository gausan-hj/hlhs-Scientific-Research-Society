import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('內容管理')
    .items([
      S.listItem()
        .id('homepage')
        .title('首頁內容')
        .icon(() => '🏠')
        .child(
          S.document()
            .id('homepage-doc')
            .schemaType('homepage')
            .documentId('homepage')
            .title('首頁內容'),
        ),
      S.divider(),
      S.listItem()
        .id('announcements')
        .title('公告')
        .icon(() => '📢')
        .child(
          S.documentTypeList('announcement')
            .id('announcements-list')
            .title('公告'),
        ),
      S.listItem()
        .id('activities')
        .title('活動')
        .icon(() => '📅')
        .child(
          S.documentTypeList('activity')
            .id('activities-list')
            .title('活動'),
        ),
      S.divider(),
      S.listItem()
        .id('teachers')
        .title('顧問老師')
        .icon(() => '👨‍🏫')
        .child(
          S.documentTypeList('teacher')
            .id('teachers-list')
            .title('顧問老師'),
        ),
      S.listItem()
        .id('committee')
        .title('理事名單')
        .icon(() => '👥')
        .child(
          S.documentTypeList('committee')
            .id('committee-list')
            .title('理事名單'),
        ),
      S.divider(),
      S.listItem()
        .id('gallery')
        .title('相冊')
        .icon(() => '🖼️')
        .child(
          S.documentTypeList('gallery')
            .id('gallery-list')
            .title('相冊'),
        ),
      S.listItem()
        .id('resources')
        .title('資源')
        .icon(() => '📚')
        .child(
          S.documentTypeList('resource')
            .id('resources-list')
            .title('資源'),
        ),
    ]);
