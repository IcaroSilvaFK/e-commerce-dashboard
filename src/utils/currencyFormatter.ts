export function currencyFormatter(value: number) {
  return new Intl.NumberFormat('currency', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
