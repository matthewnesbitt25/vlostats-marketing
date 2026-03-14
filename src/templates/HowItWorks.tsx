import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';
import { StepCard } from '@/features/landing/StepCard';

const TimelineCircle = (props: { children: React.ReactNode }) => (
  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 text-lg font-bold text-white">
    {props.children}
  </div>
);

export const HowItWorks = () => {
  const t = useTranslations('HowItWorks');

  const steps = [
    { number: 1, title: t('step1_title'), description: t('step1_description') },
    { number: 2, title: t('step2_title'), description: t('step2_description') },
    { number: 3, title: t('step3_title'), description: t('step3_description') },
    { number: 4, title: t('step4_title'), description: t('step4_description') },
  ];

  return (
    <div id="how-it-works">
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      />

      <Background>
        <Section>
          {/* Mobile layout */}
          <div className="flex flex-col gap-8 md:hidden">
            {steps.map(step => (
              <StepCard key={step.number} stepNumber={step.number} title={step.title}>
                {step.description}
              </StepCard>
            ))}
          </div>

          {/* Desktop timeline layout */}
          <div className="hidden md:block">
            <div className="relative grid grid-cols-[1fr_48px_1fr] gap-x-8">
              {/* Continuous vertical line behind the circles */}
              <div
                className="absolute left-1/2 top-6 -ml-px w-px bg-border"
                style={{ bottom: 'calc(0% + 24px)' }}
              />

              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div key={step.number} className="contents">
                    {/* Left column */}
                    <div className={`flex items-start pb-12 ${isLeft ? 'justify-end' : ''}`}>
                      {isLeft && (
                        <div className="max-w-md rounded-xl border border-border bg-card p-6">
                          <div className="text-lg font-bold">{step.title}</div>
                          <div className="my-3 w-8 border-t border-purple-400" />
                          <div className="leading-relaxed text-muted-foreground">{step.description}</div>
                        </div>
                      )}
                    </div>

                    {/* Center column (timeline circle) */}
                    <div className="relative z-10 flex justify-center pb-12">
                      <TimelineCircle>{step.number}</TimelineCircle>
                    </div>

                    {/* Right column */}
                    <div className={`flex items-start pb-12 ${!isLeft ? 'justify-start' : ''}`}>
                      {!isLeft && (
                        <div className="max-w-md rounded-xl border border-border bg-card p-6">
                          <div className="text-lg font-bold">{step.title}</div>
                          <div className="my-3 w-8 border-t border-purple-400" />
                          <div className="leading-relaxed text-muted-foreground">{step.description}</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      </Background>
    </div>
  );
};
