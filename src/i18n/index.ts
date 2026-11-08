import english from './en.json';
export type Language = 'es' | 'en';
export function languageFromPath(path: string): Language { return path === '/en' || path.startsWith('/en/') ? 'en' : 'es'; }
export function translator(lang: Language) {
  return (text: string): string => {
    if (lang === 'es') return text;
    const value = (english as Record<string, string>)[text];
    if (value === undefined) throw new Error('Missing English translation: ' + text);
    return value;
  };
}
export function localizedPath(path: string, lang: Language): string {
  const base = path.replace(/^\/en(?=\/|$)/, '').replace(/^\/projects(?=\/|$)/, '/proyectos') || '/';
  return lang === 'es' ? base : '/en' + base.replace(/^\/proyectos(?=\/|$)/, '/projects');
}
export function i18n(url: URL) {
  const lang = languageFromPath(url.pathname);
  return { lang, t: translator(lang), home: lang === 'en' ? '/en/' : '/', projectPath: (slug: string) => lang === 'en' ? '/en/projects/' + slug + '/' : '/proyectos/' + slug + '/' };
}
