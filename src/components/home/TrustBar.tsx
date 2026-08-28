import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { partners } from '@/data/site';

export default function TrustBar() {
  return (
    <section className="border-b border-slate-200/70 bg-white">
      <Container className="py-10">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-xs font-semibold text-slate-400">
              افتخار همکاری با:
            </span>
            <ul
              className="flex flex-wrap items-center gap-x-2 gap-y-2"
              aria-label="افتخار همکاری با"
            >
              {partners.map((partner) => (
                <li
                  key={partner}
                  className="rounded-full border border-slate-200 bg-paper px-3 py-1 text-xs font-medium text-slate-500"
                >
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
