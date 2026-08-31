import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ecosystemItems, type EcosystemItem } from '@/data/ecosystem';
import { cn } from '@/lib/cn';

function EcosystemCard({ item }: { item: EcosystemItem }) {
  const Icon = item.icon;

  const content = (
    <>
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-md bg-trust-50 text-trust-600 transition-colors duration-300 group-hover:bg-trust-500 group-hover:text-white">
          <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <Badge>{item.category}</Badge>
      </div>
      <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-500">{item.description}</p>
      {item.href ? (
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-trust-600">
          {item.cta}
          <ArrowLeft
            className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
        </span>
      ) : null}
    </>
  );

  const cardClass = cn(
    'relative flex h-full min-w-0 flex-col rounded-lg border border-slate-200/70 bg-white p-6 shadow-card transition-all duration-300',
    item.href &&
      'group hover:-translate-y-1 hover:border-trust-300 hover:shadow-lift',
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
      >
        {content}
      </a>
    );
  }

  return <article className={cardClass}>{content}</article>;
}

export default function BuiltBySection() {
  return (
    <section
      id="built-by"
      className="border-y border-slate-200/70 bg-white py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="اکوسیستم پارس‌آپس"
          title="ساخته شده توسط ما"
          description="پارس‌آپس فقط ارائه‌دهندهٔ خدمات دواپس نیست؛ محصولات، جوامع و زیرساختی هم برای اکوسیستم دواپس می‌سازد."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {ecosystemItems.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 90}>
              <EcosystemCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
