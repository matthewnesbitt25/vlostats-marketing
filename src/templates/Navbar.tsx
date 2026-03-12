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
            {/* Redirecting to your actual Supabase app domain */}
            <li className="ml-1 mr-2.5 transition-colors hover:text-primary" data-fade>
              <a href="https://vlostats.app/login">{t('sign_in')}</a>
            </li>
            <li>
              <a className={buttonVariants()} href="https://vlostats.app/register">
                {t('sign_up')}
              </a>
            </li>
          </>
        )}
      >
        {/* These internal links now jump to sections on your landing page instead of broken pages */}
        <li>
          <Link href="#features">Features</Link>
        </li>

        <li>
          <Link href="#faq">FAQ</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};
