import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-36">
      <CenteredHero
        banner={null}
        title={t.rich('title', {
          important: chunks => (
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-400 bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        buttons={(
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              className={buttonVariants({ size: 'lg' })}
              href="https://vlostats.app/register-club"
            >
              {t('primary_button')}
              <ArrowRightIcon className="ml-2 size-5" />
            </a>

            <a
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href="https://vlostats.app/signup"
            >
              {t('secondary_button')}
            </a>
          </div>
        )}
      />
    </Section>
  );
};
