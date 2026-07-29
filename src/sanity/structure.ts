import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('內容管理')
    .items([
      S.listItem()
        .title('首頁內容')
        .icon(() => '🏠')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
            .title('首頁內容'),
        ),
      S.divider(),
      S.listItem()
        .title('公告')
        .icon(() => '📢')
        .schemaType('announcement')
        .child(S.documentTypeList('announcement').title('公告')),
      S.listItem()
        .title('活動')
        .icon(() => '📅')
        .schemaType('activity')
        .child(S.documentTypeList('activity').title('活動')),
      S.divider(),
      S.listItem()
        .title('顧問老師')
        .icon(() => '👨‍🏫')
        .schemaType('teacher')
        .child(S.documentTypeList('teacher').title('顧問老師')),
      S.listItem()
        .title('理事名單')
        .icon(() => '👥')
        .schemaType('committee')
        .child(S.documentTypeList('committee').title('理事名單')),
      S.divider(),
      S.listItem()
        .title('相冊')
        .icon(() => '🖼️')
        .schemaType('gallery')
        .child(S.documentTypeList('gallery').title('相冊')),
      S.listItem()
        .title('資源')
        .icon(() => '📚')
        .schemaType('resource')
        .child(S.documentTypeList('resource').title('資源')),
    ]);
