export const ui = {
  en: {
    skip: 'Skip to content',
    role: 'Software Developer',
    madeWith: 'Made with',
    switchTo: 'PT',
    nav: { projects: 'projects', services: 'services', blog: 'blog', stack: 'stack', contact: 'contact' },
  },
  pt: {
    skip: 'Ir para o conteúdo',
    role: 'Desenvolvedor',
    madeWith: 'Feito com',
    switchTo: 'EN',
    nav: { projects: 'projetos', services: 'serviços', blog: 'blog', stack: 'stack', contact: 'contato' },
  },
};

const stripSlash = (p: string) => p.replace(/\/+$/, '') || '/';

export const isPt = (lang: string) => lang.startsWith('pt');

export const toPt = (path: string) => (path === '/' ? '/pt' : `/pt${stripSlash(path)}`);

export function counterpart(pathname: string, pt: boolean): string {
  const p = stripSlash(pathname);
  if (pt) {
    const en = p.replace(/^\/pt(?=\/|$)/, '') || '/';
    return en === '/' ? '/' : `${en}/`;
  }
  return p === '/' ? '/pt/' : `/pt${p}/`;
}
