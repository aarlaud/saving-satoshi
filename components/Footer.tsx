'use client'

import { siteConfig } from 'config/site'
import { useLang, useTranslations } from 'hooks'

export default function Footer() {
  const lang = useLang()
  const t = useTranslations(lang)
  return (
    <div className="h-auto w-full">
      <div className="flex flex-col items-center justify-center px-6 py-4 text-white sm:flex-row">
        <p className="p-1">{t('footer.paragraph_one')}</p>
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer nofollow"
          className="p-1 underline hover:opacity-80"
        >
          {t('footer.link')}
        </a>
      </div>
    </div>
  )
}