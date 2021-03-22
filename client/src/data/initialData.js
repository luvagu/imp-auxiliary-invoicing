
export const initialDocInfo = {
  companyID: 'RUC: 1792673844001',
  companyName: 'IMPORPERNOS S.C.C.',
  companyAddress: 'Av. De La Prensa N44-72',
  companyAddress2: 'Quito - Ecuador',
  companyTelephone: 'Telf: 02-2430-658',
  companyEmail: 'Email: ventas@imporpernos.com',

  currency: '$',

  docType: '', // @todo set it from the component title
  docDateLabel: 'Fecha de Emision',
  docDate: '',
  docNum: '', // @Todo get it from backend at runtime or set it on doc save
  docSubtotal: '0.00',
  docDiscount: '0.00',
  docTaxRate: '12',
  docTaxAmount: '0.00',
  docTotal: '0.00',
  
  clientDetailsLabel: 'Datos Cliente:',
  clientIdLabel: 'CI / RUC:',
  clientName: '',
  clientAddress: '',
  clientId: '',
  clientPhone: '',
  clientEmail: '',


  productDescriptionLabel: 'Descripcion',
  productQuantityLabel: 'Cantidad',
  productPriceLabel: 'P.Unit',
  productDiscounyLabel: 'Dcto. %',
  productTotalAmountLabel: 'P.Total',

  productsList: [],

  subTotalLabel: 'Subtotal',
  discountLabel: 'Descuento',
  taxLabel: 'IVA (12%)',
  totalLabel: 'Valor Total',
  notesLabel: 'Notas',
  paymentTermsLabel: 'Forma de Pago',

  notes: '',
  paymentTerms: ''
}

export const paymentTerms = [
  'Efectivo',
  'Efectivo y Retencion',
  'Cheque',
  'Cheque y Retencion',
  'Tarjeta',
  'Transferencia',
  'Transferencia y Retencion',
  'Deposito',
  'Deposito y Retencion',
  'Credito',
  'Credito y Retencion',
  'Otra'
]
