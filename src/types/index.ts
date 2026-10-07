// User roles in the system
export type UserRole = 'customer' | 'member' | 'supplier' | 'sourcing' | 'operations' | 'finance' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  city?: string;
  storeName?: string;
  storeDescription?: string;
  isVerified: boolean;
  createdAt: string;
}

// Product types
export interface ProductVariant {
  id: string;
  size?: string;
  color?: string;
  colorHex?: string;
  sku: string;
  stock: number;
  basePrice: number;
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  images: string[];
  variants: ProductVariant[];
  specifications: Record<string, string>;
  returnPolicy: string;
  supplierName: string;
  supplierId: string;
  isVerified: boolean;
  minPrice: number;
  maxPrice: number;
  deliveryEstimate?: string;
  tags: string[];
}

// Shopping requirement from AI
export interface ShoppingRequirement {
  id: string;
  customerId: string;
  rawInput: string;
  inputType: 'text' | 'voice' | 'image' | 'form';
  referenceImage?: string;
  voiceTranscript?: string;
  extracted: {
    category?: string;
    quantity?: number;
    budget?: number;
    budgetType?: 'total' | 'per_item';
    size?: string;
    color?: string;
    occasion?: string;
    deliveryPincode?: string;
    requiredDate?: string;
    mustHave: string[];
    optional: string[];
    additionalNotes?: string;
  };
  status: RequirementStatus;
  createdAt: string;
  memberId?: string;
}

export type RequirementStatus =
  | 'submitted'
  | 'ai_processing'
  | 'needs_clarification'
  | 'ready_to_match'
  | 'matching'
  | 'selection_prepared'
  | 'member_review'
  | 'approved'
  | 'shared_with_customer'
  | 'customer_selected'
  | 'ordered'
  | 'closed';

// AI Product Match
export interface ProductMatch {
  product: Product;
  selectedVariant: ProductVariant;
  matchScore: number;
  matchReasons: string[];
  tradeoffs: string[];
  customerPrice: number;
  deliveryEstimate: string;
  stockStatus: 'in_stock' | 'low_stock' | 'out_of_stock';
}

// Member selection with margin
export interface MemberSelection {
  id: string;
  requirementId: string;
  memberId: string;
  matches: ProductMatch[];
  selectedMatchId?: string;
  margin: number;
  customerPrice: number;
  companyCommission: number;
  memberEarnings: number;
  status: 'pending_review' | 'approved' | 'shared' | 'selected' | 'ordered';
  note?: string;
  createdAt: string;
}

// Cart
export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  product: Product;
  variant: ProductVariant;
  quantity: number;
  price: number;
  memberId?: string;
  memberStoreName?: string;
}

// Address
export interface Address {
  id: string;
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

// Order
export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  memberId?: string;
  items: OrderItem[];
  address: Address;
  subtotal: number;
  shippingCharge: number;
  tax: number;
  discount: number;
  total: number;
  paymentMethod: string;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  timeline: OrderTimelineEvent[];
  trackingId?: string;
  createdAt: string;
  estimatedDelivery?: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  variantDescription: string;
  quantity: number;
  price: number;
  returnEligible: boolean;
}

export type PaymentStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'cancelled'
  | 'refunded'
  | 'verification';

export type OrderStatus =
  | 'placed'
  | 'payment_confirmed'
  | 'supplier_accepted'
  | 'preparing'
  | 'dispatched'
  | 'in_transit'
  | 'out_for_delivery'
  | 'delivered'
  | 'return_requested'
  | 'returned'
  | 'cancelled';

export interface OrderTimelineEvent {
  status: OrderStatus;
  timestamp: string;
  description: string;
  isCompleted: boolean;
}

// Return
export interface ReturnRequest {
  id: string;
  orderId: string;
  orderItemId: string;
  reason: ReturnReason;
  description: string;
  images: string[];
  status: ReturnStatus;
  createdAt: string;
}

export type ReturnReason =
  | 'wrong_item'
  | 'damaged'
  | 'defective'
  | 'size_issue'
  | 'not_as_expected'
  | 'other';

export type ReturnStatus =
  | 'requested'
  | 'approved'
  | 'pickup_scheduled'
  | 'received'
  | 'inspection'
  | 'refund_processing'
  | 'refund_completed'
  | 'rejected';

// Support
export interface SupportTicket {
  id: string;
  userId: string;
  type: 'order' | 'payment' | 'delivery' | 'return' | 'product' | 'other';
  subject: string;
  description: string;
  status: 'open' | 'in_progress' | 'waiting' | 'resolved' | 'closed';
  messages: SupportMessage[];
  createdAt: string;
}

export interface SupportMessage {
  id: string;
  sender: 'user' | 'ai' | 'agent';
  content: string;
  timestamp: string;
}

// Member earnings
export interface EarningsData {
  pending: number;
  available: number;
  reserved: number;
  payoutProcessing: number;
  totalPaid: number;
  transactions: EarningsTransaction[];
}

export interface EarningsTransaction {
  id: string;
  type: 'earning' | 'commission' | 'withdrawal' | 'refund_deduction';
  amount: number;
  orderReference?: string;
  description: string;
  status: 'pending' | 'available' | 'reserved' | 'processing' | 'completed' | 'failed';
  createdAt: string;
}

// Notification
export interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  isRead: boolean;
  actionUrl?: string;
  createdAt: string;
}

// Category
export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
  image?: string;
  productCount: number;
}

// AI Chat Message
export interface AIChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  actions?: AIAction[];
}

export interface AIAction {
  type: 'view_product' | 'search' | 'track_order' | 'create_ticket' | 'compare';
  label: string;
  data: Record<string, string>;
}
