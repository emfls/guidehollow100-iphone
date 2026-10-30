import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://iphone.guidehollow.com',output:'static',trailingSlash:'always',integrations:[sitemap()]});
