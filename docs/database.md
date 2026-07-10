<!-- product :{
    category:
        - پیراهن کوتاه
        - شلوار 
        - شلوار
        - کت و جلیقه
        - دامن
        - شومیز و بلوز
        - تاپ و کراپ
        - ترنج کت و پالتو
    id:
    name:
    price:
    offer:
    title:
    description:
    options:
        - قابلیت شستشو
        - جنس پارجه
        - مقاوت در برابر آب
    color
    size:
        - 2xl
        - xl
        - l
        - m
        - s
        - xs
    imagesUrl
    comments
}

comment: {
    user
    content
    score
    title   
} -->

Category {
  id: String
  name: String
  slug: String

  createdAt: DateTime
  updatedAt: DateTime
}

Product {
  id: String
  name: String
  slug: String
  shortDescription: String?
  description: String
  price: Decimal *
  comparePrice: Decimal?
  stock: Int
  isPublished: Boolean
  categoryId: String
  createdAt: DateTime
  updatedAt: DateTime

  <!-- image productImage[] -->
}

ProductImage {
  id: String

  url: String
  alt: String?

  order: Int

  productId: String
}

ProductFeature {
  id: String

  title: String
  value: String

  productId: String
}

Color {
  id: String

  name: String

  hex: String

  createdAt: DateTime
}

ProductVariant {
  id: String

  <!-- sku: String? -->

  stock: Int

  size: Size

  productId: String

  colorId: String
}

enum Size {
  XS
  S
  M
  L
  XL
  XXL
}

Review {
  id: String

  rating: Int

  title: String?

  body: String

  userId: String

  productId: String

  createdAt: DateTime
}

Cart {
  id: String

  userId: String?

  createdAt: DateTime
}

CartItem {
  id: String

  quantity: Int

  cartId: String

  variantId: String
}

<!-- Order {
  id: String

  totalPrice: Decimal

  status: OrderStatus

  userId: String

  createdAt: DateTime
}

OrderItem {
  id: String

  quantity: Int

  price: Decimal

  orderId: String

  variantId: String
}

enum OrderStatus {
  PENDING
  PAID
  SHIPPED
  DELIVERED
  CANCELLED
} -->