import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={(
          <>
            <li className="ml-1 mr-2.5 transition-colors hover:text-primary" data-fade>
              <a href="https://vlostats.app/login">{t('sign_in')}</a>
            </li>
            <li>
              <a className={buttonVariants()} href="https://vlostats.app/register-club">
                {t('sign_up')}
              </a>
            </li>
          </>
        )}
      >
        <li>
          <Link href="#features">{t('features')}</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};
