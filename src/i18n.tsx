import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language } from './dictionary';
import { es } from './translations';
const Context = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: (text: string) => string;
}>({ lang: 'en', setLang: () => {}, t: (text) => text });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const query = new URLSearchParams(location.search).get('lang');
    if (query === 'en' || query === 'es') return query;
    try {
      return localStorage.getItem('sone-language') === 'es' ? 'es' : 'en';
    } catch {
      return 'en';
    }
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    const url = new URL(location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url);
    }
    document
      .querySelector('meta[name=description]')
      ?.setAttribute(
        'content',
        lang === 'es'
          ? 'Explora tus sueños con un poco de folclore y otra perspectiva. Gratis, sin registro y sin guardar tus sueños.'
          : 'Explore your dreams with a little folklore and a fresh perspective. Free, no sign-up, nothing saved.',
      );
    document.title = 'Sone';
    try {
      localStorage.setItem('sone-language', lang);
    } catch {
      /* Language still works when browser storage is unavailable. */
    }
  }, [lang]);
  return (
    <Context.Provider
      value={{ lang, setLang, t: (text) => (lang === 'es' ? (es[text] ?? text) : text) }}
    >
      {children}
    </Context.Provider>
  );
}
export const useI18n = () => useContext(Context);
