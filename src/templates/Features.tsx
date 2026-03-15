import { CalendarDays, TrendingUp, Trophy, Users } from 'lucide-react';
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={<TrendingUp />} title={t('card1_title')}>
              {t('card1_description')}
            </FeatureCard>

            <FeatureCard icon={<Trophy />} title={t('card2_title')}>
              {t('card2_description')}
            </FeatureCard>

            <FeatureCard icon={<CalendarDays />} title={t('card3_title')}>
              {t('card3_description')}
            </FeatureCard>

            <FeatureCard icon={<Users />} title={t('card4_title')}>
              {t('card4_description')}
            </FeatureCard>
          </div>
        </Section>
      </Background>
    </div>
  );
};
