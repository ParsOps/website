import {
  Boxes,
  GraduationCap,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';

export interface EcosystemItem {
  title: string;
  category: string;
  description: string;
  cta: string;
  /**
   * Official URL when one exists in this repository.
   * `null` is an explicit placeholder — do not invent a URL.
   */
  href: string | null;
  icon: LucideIcon;
}

export const ecosystemItems: EcosystemItem[] = [
  {
    title: 'Focker',
    category: 'زیرساخت',
    description:
      'پلتفرم دسترسی برای توسعه‌دهندگان و تیم‌های زیرساخت در ایران؛ دسترسی پایدار به ایمیج‌های داکر، بسته‌ها و کتابخانه‌های برنامه‌نویسی، و مخازن لینوکس.',
    cta: 'مشاهدهٔ Focker',
    href: null, // Official Focker URL is not present in this repository
    icon: Boxes,
  },
  {
    title: 'DevOps Hub',
    category: 'جامعه',
    description:
      'جامعه‌ای از مهندسان دواپس، متخصصان زیرساخت و علاقه‌مندان فناوری در ایران برای اشتراک دانش عملی، تجربه، اخبار و محتوای فنی در حوزهٔ دواپس، کلاد، کوبرنتیز، SRE و زیرساخت.',
    cta: 'پیوستن به جامعه',
    href: null, // DevOps Hub Telegram URL is not present in this repository
    icon: Users,
  },
  {
    title: 'DevOps Hub Academy',
    category: 'آموزش',
    description:
      'مجموعه‌ای رایگان از محتوای آموزشی فارسی و انگلیسی در حوزهٔ دواپس و زیرساخت؛ از مفاهیم پایه تا موضوعات پیشرفته شامل لینوکس، داکر، کوبرنتیز، CI/CD، کلاد، مانیتورینگ و SRE.',
    cta: 'مشاهده در یوتیوب',
    href: null, // DevOps Hub YouTube URL is not present in this repository
    icon: GraduationCap,
  },
  {
    title: 'ایمیج‌های امن و سخت‌شدهٔ داکر',
    category: 'امنیت',
    description:
      'ایمیج‌های پایهٔ داکر برای محیط تولید؛ با سطح حملهٔ حداقلی، پویش آسیب‌پذیری منظم و بازسازی هفتگی. شامل Python، Golang، PyTorch و TensorFlow.',
    cta: 'مشاهده در گیت‌هاب',
    href: 'https://github.com/devopshobbies/base-images',
    icon: ShieldCheck,
  },
];
