export function dataLonga(d: Date): string {
  return d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function mesAno(d: Date): string {
  return d.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

export function ano(d: Date): string {
  return d.toLocaleDateString('pt-BR', { year: 'numeric', timeZone: 'UTC' });
}
