// app/app.config.ts
export default defineAppConfig({
  myDict: {
    theme: {
      lightColor: '#7508d4',
      darkColor: '#9b58ff'
    },
    siteName: '地理探求 - DigiDict',
    copyRight: '2026-present DigiDict',
    githubLink: 'https://github.com/dict-digital/geography.hs.dict.digital',
    i18n: {
      search: '検索',
      title: '見出し',
      full_text: '全文',
      color_mode: {
        name: 'テーマ',
        system: 'システム',
        light: 'ライト',
        dark: 'ダーク'
      },
      search_component: {
        no_result: '結果が見つかりません',
        searching: '検索中です...',
        len: {
          before: '',
          after: '件表示中'
        },
        type_to_search: '入力して検索',
        all: '全文検索をします'
      },
      site_map: 'サイトマップ',
      display_markdown: 'Markdownを表示',
      edit_this_page: 'ページを編集',
      not_found_title: 'Not Found',
      not_found_error: '読み込み中か，コンテンツが存在しません．'
    }
  }
});
