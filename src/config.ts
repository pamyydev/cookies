import type { LicenseConfig, NavBarConfig, ProfileConfig, SiteConfig } from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Cookinhos',
  subtitle: 'Demo Site',
  lang: 'en',
  themeColor: {
    hue: 250,
    fixed: false,
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
    position: 'center',
    credit: {
      enable: false,
      text: '',
      url: '',
    }
  },
  toc: {
    enable: true,
    depth: 2,  // Optional: Adjust based on your needs
  },
  favicon: []  // Optional: Fill in if you have custom favicons
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  text: "This is a demo site for educational purposes.",
  url: "https://example.com",
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/pamyydev',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png',
  name: "Cookinho's blog",
  bio: 'Um blog que te ajuda a se proteger contra os malditos cookies de navegador',
  links: [
    {
      name: 'Linkedin',
      icon: 'fa6-brands:linkedin',
      url: 'https://linkedin.com/in/pamydev',
    },
    {
      name: 'Github',
      icon: 'fa6-brands:github',
      url: 'https://github.com/pamyydev',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://www.instagram.com/pamy_dev/',
    },
  ],
}
