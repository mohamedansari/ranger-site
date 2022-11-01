import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ranger-source/blog',
    component: ComponentCreator('/ranger-source/blog', 'd85'),
    exact: true
  },
  {
    path: '/ranger-source/blog/archive',
    component: ComponentCreator('/ranger-source/blog/archive', '225'),
    exact: true
  },
  {
    path: '/ranger-source/blog/first-blog-post',
    component: ComponentCreator('/ranger-source/blog/first-blog-post', '589'),
    exact: true
  },
  {
    path: '/ranger-source/blog/long-blog-post',
    component: ComponentCreator('/ranger-source/blog/long-blog-post', 'd2c'),
    exact: true
  },
  {
    path: '/ranger-source/blog/mdx-blog-post',
    component: ComponentCreator('/ranger-source/blog/mdx-blog-post', '0d8'),
    exact: true
  },
  {
    path: '/ranger-source/blog/tags',
    component: ComponentCreator('/ranger-source/blog/tags', '5c2'),
    exact: true
  },
  {
    path: '/ranger-source/blog/tags/docusaurus',
    component: ComponentCreator('/ranger-source/blog/tags/docusaurus', 'ea9'),
    exact: true
  },
  {
    path: '/ranger-source/blog/tags/facebook',
    component: ComponentCreator('/ranger-source/blog/tags/facebook', 'e84'),
    exact: true
  },
  {
    path: '/ranger-source/blog/tags/hello',
    component: ComponentCreator('/ranger-source/blog/tags/hello', 'ff7'),
    exact: true
  },
  {
    path: '/ranger-source/blog/tags/hola',
    component: ComponentCreator('/ranger-source/blog/tags/hola', '4cd'),
    exact: true
  },
  {
    path: '/ranger-source/blog/welcome',
    component: ComponentCreator('/ranger-source/blog/welcome', '19d'),
    exact: true
  },
  {
    path: '/ranger-source/markdown-page',
    component: ComponentCreator('/ranger-source/markdown-page', 'be1'),
    exact: true
  },
  {
    path: '/ranger-source/docs',
    component: ComponentCreator('/ranger-source/docs', '6e1'),
    routes: [
      {
        path: '/ranger-source/docs/category/tutorial---basics',
        component: ComponentCreator('/ranger-source/docs/category/tutorial---basics', '380'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-source/docs/category/tutorial---extras',
        component: ComponentCreator('/ranger-source/docs/category/tutorial---extras', '001'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-source/docs/intro',
        component: ComponentCreator('/ranger-source/docs/intro', '941'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-source/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/ranger-source/docs/tutorial-basics/congratulations', 'f76'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-source/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/ranger-source/docs/tutorial-basics/create-a-blog-post', 'c2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-source/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/ranger-source/docs/tutorial-basics/create-a-document', 'b7f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-source/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/ranger-source/docs/tutorial-basics/create-a-page', 'aec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-source/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/ranger-source/docs/tutorial-basics/deploy-your-site', '7cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-source/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/ranger-source/docs/tutorial-basics/markdown-features', '969'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-source/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/ranger-source/docs/tutorial-extras/manage-docs-versions', '3fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-source/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/ranger-source/docs/tutorial-extras/translate-your-site', '85c'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ranger-source/',
    component: ComponentCreator('/ranger-source/', '7a6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
