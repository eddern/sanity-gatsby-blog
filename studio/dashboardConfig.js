export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5da6cbcff4ee60485a2b7da0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mxtb94rv',
                  apiId: '781bba26-f034-4fc1-9a3a-eb55bec1901a'
                },
                {
                  buildHookId: '5da6cbcf8ff122d506ae2696',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mzyuukhx',
                  apiId: '2766e893-edb6-4e6a-889b-95ce616fd1ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eddern/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mzyuukhx.netlify.com', category: 'apps'}
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
