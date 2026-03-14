import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CenteredFooter } from '@/features/landing/CenteredFooter';
import { Section } from '@/features/landing/Section';
import { AppConfig } from '@/utils/AppConfig';

import { Logo } from './Logo';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <Section className="pb-16 pt-0">
      <CenteredFooter
        logo={<Logo />}
        name={AppConfig.name}
        iconList={<></>}
        legalLinks={(
          <>
            <li>
              <Link href="/terms">{t('terms_of_service')}</Link>
            </li>
            <li>
              <Link href="/privacy">{t('privacy_policy')}</Link>
            </li>
          </>
        )}
      >
        <li>
          <Link href="#how-it-works">{t('how_it_works')}</Link>
        </li>
        <li>
          <Link href="#admin-superpowers">{t('for_admins')}</Link>
        </li>
      </CenteredFooter>
    </Section>
  );
};
