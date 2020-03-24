const NAME = '[DEMO] Gatsby and ZEIT Now';
const SITE_URL = 'https://demo-gatsby-zeit-now.now.sh'; // Default to a hard-coded URL for now; ideally this would be an environment variable
const LOGO_URL = `${SITE_URL}/logo.jpg`; // Use static/logo.jpg as the site logo
const TAGLINE = `It doesn't get any better than this.`;

// Environment variables - REMEMBER: Any environment variables that need to be passed to Gatsby **must have** a GATSBY_ prefix
const GRAPHQL_URL = process.env.GATSBY_GRAPHQL_URL || 'http://localhost:3000/api/graphql';

// Social accounts
const CONTACT_EMAIL = 'mailto:test@nomail.com';
const SOCIAL_LINKS = [
  {
    icon: 'fa-envelope-o',
    name: 'Email',
    url: CONTACT_EMAIL,
  },
];

module.exports = {
  siteTitle: NAME, // <title>
  siteDescription: TAGLINE,
  demoGraphQLURL: GRAPHQL_URL,
  siteUrl: SITE_URL, // TODO: Replace hard-coded URL with a dynamic one from the host/environment variable
  logoUrl: LOGO_URL, // If your logo is in the static folder, it will automatically be available
  keywords: '', // CSV of keywords for the site
  openGraphType: 'website',
  manifestName: NAME,
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  // manifestIcon: 'src/assets/icons/logo.jpg',
  pathPrefix: `/`, // This path is subpath of your hosting https://mysite.com/portfolio
  // social
  heading: NAME,
  subHeading: TAGLINE,
  socialLinks: SOCIAL_LINKS,
};
