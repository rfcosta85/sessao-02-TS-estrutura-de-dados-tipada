import { OrderStatus, PortugueseOrderStatus } from './04-orderEnum';

const orderStatus: OrderStatus = OrderStatus.PAID;

console.log(`O status atual da compra é:  ${PortugueseOrderStatus[orderStatus]}`);