import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

export const Features = () => {
  const t = useTranslations('Features');

  return (
    <div id="features">
      <Background>
        <Section
          subtitle={t('section_subtitle')}
          title={t('section_title')}
          description={t('section_description')}
        >
          <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
            <FeatureCard
              icon={(
                <svg
                  className="stroke-primary-foreground stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M6 4v4" />
                  <path d="M6 12v8" />
                  <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M12 4v10" />
                  <path d="M12 18v2" />
                  <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M18 4v1" />
                  <path d="M18 9v11" />
                </svg>
              )}
              title={t('feature1_title')}
            >
              {t('feature1_description')}
            </FeatureCard>

            <FeatureCard
              icon={(
                <svg
                  className="stroke-primary-foreground stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M8 21l8 0" />
                  <path d="M12 17l0 4" />
                  <path d="M7 4l10 0" />
                  <path d="M17 4v8a5 5 0 0 1 -10 0V4" />
                  <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                </svg>
              )}
              title={t('feature2_title')}
            >
              {t('feature2_description')}
            </FeatureCard>

            <FeatureCard
              icon={(
                <svg
                  className="stroke-primary-foreground stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2z" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h16" />
                  <path d="M8 15h2v2H8z" />
                </svg>
              )}
              title={t('feature3_title')}
            >
              {t('feature3_description')}
            </FeatureCard>
          </div>
        </Section>
      </Background>
    </div>
  );
};
