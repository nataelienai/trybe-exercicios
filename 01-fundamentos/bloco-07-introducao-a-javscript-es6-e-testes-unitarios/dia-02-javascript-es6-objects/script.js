const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, ` +
  `entrega para: ${order.name}, Telefone: ${order.phoneNumber},` +
  `${order.address.street}, Nº: ${order.address.number}, ` +
  `AP: ${order.address.apartment}`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  order.order.delivery.deliveryPerson = 'Luiz Silva';
  order.payment.total = 50;

  return `Olá ${order.order.delivery.deliveryPerson}, ` + 
  `o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é ` +
  `R$ ${(order.payment.total).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`;
}

console.log(orderModifier(order));
