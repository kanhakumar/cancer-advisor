module.exports = {
  base: '/cancer-advisor/guide/',
  title: 'Cancer Advisor',
  dest: './guide',
  themeConfig: {
    logo: '/images/kgrid-logo.png',
    repo: 'kgrid-demos/cancer-advisor',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Guide', link: '/' },
      // { text: 'Develop', link: '/develop/' },
      { text: 'Cancer Risk Collection', link: 'https://kgrid-objects.github.io/cancer-risk-collection'},
      { text: 'Online Demo', link: 'https://demo.kgrid.org/cancer-advisor' }
    ],
    search: true,
    searchMaxSuggestions: 10,
    sidebar: 'auto',
    displayAllHeaders: true
  }
}
