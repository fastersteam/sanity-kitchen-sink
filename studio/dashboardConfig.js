export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '609362fe7356b923636d5162',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-y4ynxhrm',
                  apiId: '97fcd56b-f31d-478d-add8-1342c1827880'
                },
                {
                  buildHookId: '609362febd04b421a49efae0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6wijhwks',
                  apiId: '34e85c38-34d4-4f64-a5bb-b5c5b5e5234b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fastersteam/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6wijhwks.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
