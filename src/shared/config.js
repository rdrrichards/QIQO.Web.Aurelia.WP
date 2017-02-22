let baseHost = 'http://localhost:34479/api/';

export let CONFIG = {
  baseUrls: {
    //config: 'commands/config',
    //resetDb: 'commands/resetDb',
    accounts: `${baseHost}accounts`,
    orders: `${baseHost}orders`,
    openorders: `${baseHost}openorders`,
    openinvoices: `${baseHost}openinvoices`,
    invoices: `${baseHost}invoices`,
    products: `${baseHost}products`,
    carts: `${baseHost}carts`
  }
}