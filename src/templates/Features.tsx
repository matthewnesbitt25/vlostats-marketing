import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';

export const Features = () => {
  const t = useTranslations('MissingPiece');

  return (
    <div id="features">
      <Background>
        <Section
          subtitle={t('section_subtitle')}
          title={t('section_title')}
        >
          {/* Intro paragraph */}
          <div className="mx-auto mb-12 max-w-screen-md text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('intro')}
            </p>
          </div>

          {/* Two-column comparison */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Status Quo */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {t('status_quo_label')}
              </div>
              <div className="mt-2 text-xl font-bold">{t('status_quo_title')}</div>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">&#10005;</span>
                  <span>{t('status_quo_point1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">&#10005;</span>
                  <span>{t('status_quo_point2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">&#10005;</span>
                  <span>{t('status_quo_point3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">&#10005;</span>
                  <span>{t('status_quo_point4')}</span>
                </li>
              </ul>
            </div>

            {/* VLOStats */}
            <div className="rounded-xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 p-px">
              <div className="size-full rounded-xl bg-card p-8">
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-sm font-bold uppercase tracking-wider text-transparent">
                  {t('vlo_label')}
                </div>
                <div className="mt-2 text-xl font-bold">{t('vlo_title')}</div>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">&#10003;</span>
                    <span>{t('vlo_point1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">&#10003;</span>
                    <span>{t('vlo_point2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">&#10003;</span>
                    <span>{t('vlo_point3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">&#10003;</span>
                    <span>{t('vlo_point4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Closing line */}
          <p className="mt-10 text-center text-lg font-medium text-muted-foreground">
            {t('closing')}
          </p>
        </Section>
      </Background>
    </div>
  );
};
