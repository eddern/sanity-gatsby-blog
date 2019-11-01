export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eddern/sanity-gatsby-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-blog-web-mzyuukhx.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    },
    {
      name: 'gatsby',
      options: {
        sites: [
          {
            siteUrl: 'https://sanity-gatsby-blog-8274521744.gtsb.io/'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}}
  ]
}
