import { CookieConsent } from '@/components/global/CookieConsent';
import { LanguageProvider } from '@/components/global/LanguageProvider';
import { getDictionary } from '@/i18n/getDictionary';
import { i18n, type Locale } from '@/i18n/i18n-config';


interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  // Generate language alternates for SEO
  const languages = i18n.locales.reduce((acc, lang) => {
    acc[lang] = `/${lang}`;
    return acc;
  }, {} as Record<string, string>);

  return {
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <LanguageProvider locale={locale}>
      <div className="">{children}</div>
      <CookieConsent dictionary={dictionary.cookie} />
    </LanguageProvider>
  );
}
