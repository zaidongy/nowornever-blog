export default {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Now Or Never - A ServiceNow Blog', // Navigation and Site Title
  siteTitleAlt: 'Now Or Never - A ServiceNow Blog', // Alternative Site title for SEO
  siteUrl: 'https://nowornever.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/assets/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  defaultBg: '/assets/bg.png', // default post background header
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Everything ServiceNow', // Your site description
  author: 'Chris Yang', // Author for schemaORGJSONLD

  // siteFBAppID: '', // Facebook App ID - Optional
  // userTwitter: '', // Twitter Username - Optional
  // ogSiteName: '', // Facebook Site Name - Optional
  // ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Settings for typography.ts
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',

  // Social media
  siteFBAppID: '',

  //
  Google_Tag_Manager_ID: 'GTM-XXXXXXX',
  Google_Analytics_Tracking_ID: 'UA-127455366-2',
  POST_PER_PAGE: 4,
};
