import { useTranslations } from 'next-intl';

import { PricingInformation } from '@/features/billing/PricingInformation';
import { Section } from '@/features/landing/Section';
import { PLAN_ID } from '@/utils/AppConfig';

export const Pricing = () => {
  const t = useTranslations('Pricing');

  return (
    <Section
      subtitle={t('section_subtitle')}
      title={t('section_title')}
      description={t('section_description')}
    >
      <PricingInformation
        buttonList={{
          [PLAN_ID.FREE]: null,
          [PLAN_ID.PREMIUM]: null,
          [PLAN_ID.ENTERPRISE]: null,
        }}
      />

      <p className="mt-8 text-center text-sm text-muted-foreground">
        {t('player_note')}
      </p>
    </Section>
  );
};
