import type { Product, Category, ProductMatch, ShoppingRequirement, Order, EarningsData, Notification, Address, CartItem, User, SupportTicket } from '../types';

// Mock Categories
export const mockCategories: Category[] = [
  { id: '1', name: 'Fashion', icon: 'shirt', slug: 'fashion', productCount: 1240 },
  { id: '2', name: 'Beauty', icon: 'sparkles', slug: 'beauty', productCount: 856 },
  { id: '3', name: 'Home', icon: 'home', slug: 'home', productCount: 632 },
  { id: '4', name: 'Electronics', icon: 'smartphone', slug: 'electronics', productCount: 445 },
  { id: '5', name: 'Accessories', icon: 'watch', slug: 'accessories', productCount: 978 },
  { id: '6', name: 'Daily Needs', icon: 'shopping-bag', slug: 'daily-needs', productCount: 1567 },
  { id: '7', name: 'Sports', icon: 'dumbbell', slug: 'sports', productCount: 321 },
  { id: '8', name: 'Books', icon: 'book-open', slug: 'books', productCount: 245 },
];

// Mock Products
export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'Royal Blue Embroidered Kurti',
    description: 'Premium cotton blend embroidered kurti perfect for festive occasions. Features intricate thread work and comfortable fit.',
    category: 'Fashion',
    subcategory: 'Women\'s Ethnic',
    images: [
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop',
    ],
    variants: [
      { id: 'v1', size: 'S', color: 'Royal Blue', colorHex: '#2563EB', sku: 'KRT-RB-S', stock: 12, basePrice: 899, images: [] },
      { id: 'v2', size: 'M', color: 'Royal Blue', colorHex: '#2563EB', sku: 'KRT-RB-M', stock: 8, basePrice: 899, images: [] },
      { id: 'v3', size: 'L', color: 'Royal Blue', colorHex: '#2563EB', sku: 'KRT-RB-L', stock: 3, basePrice: 899, images: [] },
      { id: 'v4', size: 'XL', color: 'Royal Blue', colorHex: '#2563EB', sku: 'KRT-RB-XL', stock: 0, basePrice: 899, images: [] },
    ],
    specifications: {
      'Material': 'Cotton Blend',
      'Sleeve': 'Three-Quarter',
      'Neck': 'Round Neck',
      'Wash Care': 'Gentle Machine Wash',
      'Length': 'Knee Length',
    },
    returnPolicy: 'Easy 7-day return. Product must be unused with tags attached.',
    supplierName: 'Ethnic Elegance',
    supplierId: 's1',
    isVerified: true,
    minPrice: 899,
    maxPrice: 899,
    deliveryEstimate: '3-5 days',
    tags: ['kurti', 'ethnic', 'blue', 'wedding', 'embroidered'],
  },
  {
    id: 'p2',
    name: 'Navy Printed Anarkali Kurta',
    description: 'Elegant printed Anarkali kurta with flared silhouette. Perfect for celebrations and special occasions.',
    category: 'Fashion',
    subcategory: 'Women\'s Ethnic',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
    ],
    variants: [
      { id: 'v5', size: 'S', color: 'Navy Blue', colorHex: '#1E3A5F', sku: 'ANK-NB-S', stock: 5, basePrice: 1199, images: [] },
      { id: 'v6', size: 'M', color: 'Navy Blue', colorHex: '#1E3A5F', sku: 'ANK-NB-M', stock: 15, basePrice: 1199, images: [] },
      { id: 'v7', size: 'L', color: 'Navy Blue', colorHex: '#1E3A5F', sku: 'ANK-NB-L', stock: 7, basePrice: 1199, images: [] },
    ],
    specifications: {
      'Material': 'Rayon',
      'Sleeve': 'Full Sleeve',
      'Neck': 'V-Neck',
      'Wash Care': 'Hand Wash',
      'Length': 'Ankle Length',
    },
    returnPolicy: 'Easy 7-day return. Product must be unused with tags attached.',
    supplierName: 'Ethnic Elegance',
    supplierId: 's1',
    isVerified: true,
    minPrice: 1199,
    maxPrice: 1199,
    deliveryEstimate: '4-6 days',
    tags: ['anarkali', 'ethnic', 'navy', 'celebration', 'printed'],
  },
  {
    id: 'p3',
    name: 'Classic Black Formal Oxford Shoes',
    description: 'Premium leather formal oxford shoes with cushioned insole. Perfect for office and formal occasions.',
    category: 'Fashion',
    subcategory: 'Men\'s Footwear',
    images: [
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=500&fit=crop',
    ],
    variants: [
      { id: 'v8', size: '8', color: 'Black', colorHex: '#1A1A1A', sku: 'OXF-BK-8', stock: 10, basePrice: 2499, images: [] },
      { id: 'v9', size: '9', color: 'Black', colorHex: '#1A1A1A', sku: 'OXF-BK-9', stock: 6, basePrice: 2499, images: [] },
      { id: 'v10', size: '10', color: 'Black', colorHex: '#1A1A1A', sku: 'OXF-BK-10', stock: 4, basePrice: 2499, images: [] },
    ],
    specifications: {
      'Material': 'Genuine Leather',
      'Sole': 'Rubber',
      'Closure': 'Lace-Up',
      'Occasion': 'Formal',
    },
    returnPolicy: 'Easy 10-day return. Product must be unused in original packaging.',
    supplierName: 'StepCraft',
    supplierId: 's2',
    isVerified: true,
    minPrice: 2499,
    maxPrice: 2499,
    deliveryEstimate: '5-7 days',
    tags: ['shoes', 'formal', 'black', 'oxford', 'leather'],
  },
  {
    id: 'p4',
    name: 'Wireless Noise Cancelling Earbuds',
    description: 'Premium wireless earbuds with active noise cancellation, 30-hour battery life, and crystal-clear calls.',
    category: 'Electronics',
    subcategory: 'Audio',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=500&fit=crop',
    ],
    variants: [
      { id: 'v11', color: 'Midnight Black', colorHex: '#1A1A2E', sku: 'EBD-BK', stock: 25, basePrice: 3999, images: [] },
      { id: 'v12', color: 'Pearl White', colorHex: '#F5F5F5', sku: 'EBD-WH', stock: 18, basePrice: 3999, images: [] },
    ],
    specifications: {
      'Driver Size': '12mm',
      'Battery': '30 hours (with case)',
      'Connectivity': 'Bluetooth 5.3',
      'Water Resistance': 'IPX4',
      'Noise Cancellation': 'Active (ANC)',
    },
    returnPolicy: 'Easy 7-day return. Product must be unused.',
    supplierName: 'SoundWave Tech',
    supplierId: 's3',
    isVerified: true,
    minPrice: 3999,
    maxPrice: 3999,
    deliveryEstimate: '2-4 days',
    tags: ['earbuds', 'wireless', 'noise-cancelling', 'bluetooth'],
  },
  {
    id: 'p5',
    name: 'Handcrafted Ceramic Dinner Set',
    description: 'Beautiful handcrafted ceramic dinner set with 24 pieces. Microwave and dishwasher safe.',
    category: 'Home',
    subcategory: 'Kitchen',
    images: [
      'https://images.unsplash.com/photo-1603199506016-5596d62e8375?w=400&h=500&fit=crop',
    ],
    variants: [
      { id: 'v13', color: 'Ocean Blue', colorHex: '#0077B6', sku: 'DNS-OB', stock: 8, basePrice: 4599, images: [] },
      { id: 'v14', color: 'Sage Green', colorHex: '#87A96B', sku: 'DNS-SG', stock: 5, basePrice: 4599, images: [] },
    ],
    specifications: {
      'Pieces': '24',
      'Material': 'Ceramic',
      'Microwave Safe': 'Yes',
      'Dishwasher Safe': 'Yes',
    },
    returnPolicy: 'Easy 7-day return. Items must be unused.',
    supplierName: 'CraftHome',
    supplierId: 's4',
    isVerified: true,
    minPrice: 4599,
    maxPrice: 4599,
    deliveryEstimate: '5-8 days',
    tags: ['dinner-set', 'ceramic', 'handcrafted', 'kitchen'],
  },
  {
    id: 'p6',
    name: 'Natural Glow Skincare Gift Box',
    description: 'Premium skincare gift set with cleanser, toner, serum, and moisturizer. All-natural ingredients.',
    category: 'Beauty',
    subcategory: 'Skincare',
    images: [
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=500&fit=crop',
    ],
    variants: [
      { id: 'v15', sku: 'SKN-REG', stock: 20, basePrice: 1899, images: [] },
    ],
    specifications: {
      'Contents': 'Cleanser, Toner, Serum, Moisturizer',
      'Skin Type': 'All Skin Types',
      'Size': '4 x 100ml',
      'Paraben Free': 'Yes',
      'Cruelty Free': 'Yes',
    },
    returnPolicy: 'Non-returnable for hygiene reasons. Replacements for damaged items only.',
    supplierName: 'GlowNaturals',
    supplierId: 's5',
    isVerified: true,
    minPrice: 1899,
    maxPrice: 1899,
    deliveryEstimate: '3-5 days',
    tags: ['skincare', 'gift', 'natural', 'beauty'],
  },
];

// Mock AI Product Matches
export const mockMatches: ProductMatch[] = [
  {
    product: mockProducts[0],
    selectedVariant: mockProducts[0].variants[1], // M size
    matchScore: 95,
    matchReasons: ['Matches your budget', 'Available in your size (M)', 'Blue as requested', 'Suitable for weddings'],
    tradeoffs: ['Delivery estimated in 3–5 days'],
    customerPrice: 1349,
    deliveryEstimate: '3-5 days',
    stockStatus: 'in_stock',
  },
  {
    product: mockProducts[1],
    selectedVariant: mockProducts[1].variants[1], // M size
    matchScore: 82,
    matchReasons: ['Available in your size', 'Elegant style for weddings', 'Well within budget'],
    tradeoffs: ['Navy blue, not royal blue', 'Delivery estimated in 4–6 days'],
    customerPrice: 1499,
    deliveryEstimate: '4-6 days',
    stockStatus: 'in_stock',
  },
];

// Mock Requirement
export const mockRequirement: ShoppingRequirement = {
  id: 'req1',
  customerId: 'c1',
  rawInput: 'I need a blue kurti under ₹1,500 for a wedding',
  inputType: 'text',
  extracted: {
    category: "Women's Kurti",
    quantity: 1,
    budget: 1500,
    budgetType: 'total',
    size: 'M',
    color: 'Blue',
    occasion: 'Wedding',
    deliveryPincode: '500001',
    requiredDate: '2026-10-15',
    mustHave: ['Blue color', 'Size M'],
    optional: ['Printed pattern', 'Elegant style'],
  },
  status: 'selection_prepared',
  createdAt: '2026-10-01T10:00:00Z',
  memberId: 'm1',
};

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: 'o1',
    orderNumber: 'ATTN-2026-00142',
    customerId: 'c1',
    memberId: 'm1',
    items: [
      {
        id: 'oi1',
        productId: 'p1',
        productName: 'Royal Blue Embroidered Kurti',
        productImage: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop',
        variantDescription: 'Size M · Royal Blue',
        quantity: 1,
        price: 1349,
        returnEligible: true,
      },
    ],
    address: {
      id: 'a1',
      fullName: 'Priya Sharma',
      phone: '+91 98765 43210',
      addressLine1: '42, Banjara Hills',
      addressLine2: 'Near City Center Mall',
      street: 'Road No. 12',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500034',
      isDefault: true,
    },
    subtotal: 1349,
    shippingCharge: 0,
    tax: 68,
    discount: 0,
    total: 1417,
    paymentMethod: 'UPI',
    paymentStatus: 'completed',
    orderStatus: 'in_transit',
    timeline: [
      { status: 'placed', timestamp: '2026-09-28T10:30:00Z', description: 'Order placed successfully', isCompleted: true },
      { status: 'payment_confirmed', timestamp: '2026-09-28T10:31:00Z', description: 'Payment confirmed via UPI', isCompleted: true },
      { status: 'supplier_accepted', timestamp: '2026-09-28T14:00:00Z', description: 'Supplier confirmed the order', isCompleted: true },
      { status: 'preparing', timestamp: '2026-09-29T09:00:00Z', description: 'Order is being prepared', isCompleted: true },
      { status: 'dispatched', timestamp: '2026-09-30T11:00:00Z', description: 'Package dispatched', isCompleted: true },
      { status: 'in_transit', timestamp: '2026-09-30T16:00:00Z', description: 'Package in transit to Hyderabad', isCompleted: true },
      { status: 'out_for_delivery', timestamp: '', description: 'Out for delivery', isCompleted: false },
      { status: 'delivered', timestamp: '', description: 'Delivered', isCompleted: false },
    ],
    trackingId: 'TRK9876543210',
    createdAt: '2026-09-28T10:30:00Z',
    estimatedDelivery: '3-5 Oct',
  },
];

// Mock Addresses
export const mockAddresses: Address[] = [
  {
    id: 'a1',
    fullName: 'Priya Sharma',
    phone: '+91 98765 43210',
    addressLine1: '42, Banjara Hills',
    addressLine2: 'Near City Center Mall',
    street: 'Road No. 12',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500034',
    isDefault: true,
  },
  {
    id: 'a2',
    fullName: 'Priya Sharma',
    phone: '+91 98765 43210',
    addressLine1: '15, Jubilee Hills',
    street: 'Road No. 5',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500033',
    isDefault: false,
  },
];

// Mock Cart
export const mockCartItems: CartItem[] = [
  {
    id: 'ci1',
    productId: 'p1',
    variantId: 'v2',
    product: mockProducts[0],
    variant: mockProducts[0].variants[1],
    quantity: 1,
    price: 1349,
    memberId: 'm1',
    memberStoreName: 'Priya\'s Fashion Hub',
  },
];

// Mock Current User
export const mockCustomer: User = {
  id: 'c1',
  name: 'Priya Sharma',
  email: 'priya@example.com',
  phone: '+91 98765 43210',
  role: 'customer',
  isVerified: true,
  city: 'Hyderabad',
  createdAt: '2026-08-15T10:00:00Z',
};

export const mockMember: User = {
  id: 'm1',
  name: 'Rahul Verma',
  email: 'rahul@example.com',
  phone: '+91 87654 32109',
  role: 'member',
  isVerified: true,
  city: 'Mumbai',
  storeName: 'Rahul\'s Style Store',
  storeDescription: 'Curated fashion and lifestyle products for you.',
  createdAt: '2026-07-01T10:00:00Z',
};

// Mock Earnings
export const mockEarnings: EarningsData = {
  pending: 3450,
  available: 2850,
  reserved: 500,
  payoutProcessing: 0,
  totalPaid: 12400,
  transactions: [
    { id: 't1', type: 'earning', amount: 135, orderReference: 'ATTN-2026-00142', description: 'Earnings from order', status: 'available', createdAt: '2026-09-28T10:30:00Z' },
    { id: 't2', type: 'earning', amount: 200, orderReference: 'ATTN-2026-00138', description: 'Earnings from order', status: 'pending', createdAt: '2026-09-25T14:00:00Z' },
    { id: 't3', type: 'withdrawal', amount: -2000, description: 'Withdrawal to bank account', status: 'completed', createdAt: '2026-09-20T09:00:00Z' },
    { id: 't4', type: 'earning', amount: 180, orderReference: 'ATTN-2026-00130', description: 'Earnings from order', status: 'available', createdAt: '2026-09-18T11:00:00Z' },
    { id: 't5', type: 'commission', amount: -20, orderReference: 'ATTN-2026-00130', description: 'Platform commission', status: 'completed', createdAt: '2026-09-18T11:00:00Z' },
  ],
};

// Mock Notifications
export const mockNotifications: Notification[] = [
  { id: 'n1', type: 'order', title: 'Order Dispatched', message: 'Your order ATTN-2026-00142 has been dispatched.', isRead: false, actionUrl: '/orders/o1', createdAt: '2026-09-30T11:00:00Z' },
  { id: 'n2', type: 'selection', title: 'Selection Ready', message: 'Your personalized selection is ready to view.', isRead: false, actionUrl: '/selection/s1', createdAt: '2026-09-29T15:00:00Z' },
  { id: 'n3', type: 'earning', title: 'Earnings Available', message: '₹135 is now available for withdrawal.', isRead: true, createdAt: '2026-09-28T10:30:00Z' },
];

// Mock Support Ticket
export const mockSupportTickets: SupportTicket[] = [
  {
    id: 'st1',
    userId: 'c1',
    type: 'delivery',
    subject: 'Delivery delay for order ATTN-2026-00142',
    description: 'My order was expected to arrive by Oct 1 but it is still in transit.',
    status: 'in_progress',
    messages: [
      { id: 'sm1', sender: 'user', content: 'My order was expected to arrive by Oct 1 but it is still in transit.', timestamp: '2026-10-01T09:00:00Z' },
      { id: 'sm2', sender: 'ai', content: 'I can see your order ATTN-2026-00142 is currently in transit and has tracking ID TRK9876543210. The estimated delivery is 3-5 Oct. Would you like me to create a support ticket for further assistance?', timestamp: '2026-10-01T09:00:05Z' },
    ],
    createdAt: '2026-10-01T09:00:00Z',
  },
];
