export enum OrderStatus {
        PENDING,
        PAID,
        SHIPPED,
        DELIVERED,
        CANCELLED
}

export enum PortugueseOrderStatus {
        Pendente = OrderStatus.PENDING,
        Pago = OrderStatus.PAID,
        Enviado = OrderStatus.SHIPPED,
        Entregue = OrderStatus.DELIVERED,
        Cancelado = OrderStatus.CANCELLED
}