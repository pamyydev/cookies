// src/i18n/index.ts

import { siteConfig } from '../config'
import type I18nKey from './i18nKey'
import { en } from './languages/en'
import { es } from './languages/es'
import { ja } from './languages/ja'
import { ko } from './languages/ko'
import { th } from './languages/th'
import { zh_CN } from './languages/zh_CN'
import { zh_TW } from './languages/zh_TW'
import {ptBR} from './languages/ptBR' // Importando a tradução ptBR

export type Translation = {
  [K in I18nKey]: string
}

// Default language (Portuguese Brazilian)
const defaultTranslation = ptBR  // Alterado para ptBR

// Language map with static imports for each language
const map: { [key: string]: Translation } = {
  es: es,
  en: en,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: zh_CN,
  zh_tw: zh_TW,
  ja: ja,
  ja_jp: ja,
  ko: ko,
  ko_kr: ko,
  th: th,
  th_th: th,
  pt: ptBR, // Alterado para ptBR (Português Brasileiro)
}

// Get the appropriate translation object based on the language
export function getTranslation(lang: string): Translation {
  // Convert language code to lowercase to ensure consistency
  return map[lang.toLowerCase()] || defaultTranslation
}

// Function to retrieve the translation for a specific key based on the current language
export function i18n(key: I18nKey): string {
  // Default to 'pt' (ptBR) if no lang is set in siteConfig or if it's invalid
  const lang = siteConfig.lang?.toLowerCase() || 'ptBR'
  return getTranslation(lang)[key]
}
