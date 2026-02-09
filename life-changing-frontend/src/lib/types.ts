export enum UserType {
  ADMIN = 'admin',
  DONOR = 'donor',
  BENEFICIARY = 'beneficiary',
}

export enum StaffRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  PROGRAM_MANAGER = 'program_manager',
  DATA_ENTRY = 'data_entry',
  VIEWER = 'viewer',
}

export enum Language {
  EN = 'en',
  RW = 'rw',
}

export enum BeneficiaryStatus {
  ACTIVE = 'active',
  GRADUATED = 'graduated',
  INACTIVE = 'inactive',
}

export enum TrackingFrequency {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

export enum AttendanceStatus {
  PRESENT = 'present',
  ABSENT = 'absent',
  LATE = 'late',
}

export enum TaskStatus {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in_progress',
  NOT_DONE = 'not_done',
}

export enum GoalType {
  FINANCIAL = 'financial',
  BUSINESS = 'business',
  EDUCATION = 'education',
  PERSONAL = 'personal',
  SKILLS = 'skills',
}

export enum GoalStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  ACHIEVED = 'achieved',
  ABANDONED = 'abandoned',
}

export enum ProgramCategory {
  EDUCATION = 'education',
  ENTREPRENEURSHIP = 'entrepreneurship',
  HEALTH = 'health',
  CROSS_CUTTING = 'cross_cutting',
}

export enum ProgramStatus {
  PLANNING = 'planning',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  ARCHIVED = 'archived',
}

export enum PaymentMethod {
  CARD = 'card',
  MOBILE_MONEY = 'mobile_money',
  BANK_TRANSFER = 'bank_transfer',
  PAYPAL = 'paypal',
}

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded',
}

export enum DonationType {
  ONE_TIME = 'one_time',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  YEARLY = 'yearly',
}

export enum RecurringFrequency {
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  YEARLY = 'yearly',
}

export enum RecurringStatus {
  ACTIVE = 'active',
  PAUSED = 'paused',
  CANCELLED = 'cancelled',
}

export enum Currency {
  RWF = 'RWF',
  USD = 'USD',
  EUR = 'EUR',
}

export enum ReceiptPreference {
  EMAIL = 'email',
  POSTAL = 'postal',
  NONE = 'none',
}

export enum DocumentType {
  ID_CARD = 'id_card',
  BIRTH_CERTIFICATE = 'birth_certificate',
  SCHOOL_CERTIFICATE = 'school_certificate',
  MEDICAL_REPORT = 'medical_report',
  BUSINESS_LICENSE = 'business_license',
  OTHER = 'other',
}

export enum NotificationType {
  DONATION_RECEIPT = 'donation_receipt',
  TRACKING_REMINDER = 'tracking_reminder',
  PROGRAM_UPDATE = 'program_update',
  IMPACT_REPORT = 'impact_report',
  SYSTEM_ALERT = 'system_alert',
  WELCOME = 'welcome',
  PASSWORD_RESET = 'password_reset',
}

export enum NotificationStatus {
  PENDING = 'pending',
  SENT = 'sent',
  DELIVERED = 'delivered',
  FAILED = 'failed',
  READ = 'read',
}

export enum NotificationChannel {
  SMS = 'sms',
  EMAIL = 'email',
  IN_APP = 'in_app',
}

export enum MetricPeriod {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  ANNUAL = 'annual',
}

export enum MetricSource {
  KOBO = 'kobo',
  MANUAL = 'manual',
  SYSTEM_CALCULATED = 'system_calculated',
}

export enum AuthorRole {
  BENEFICIARY = 'beneficiary',
  DONOR = 'donor',
  STAFF = 'staff',
  PARTNER = 'partner',
  VOLUNTEER = 'volunteer',
}

export interface User {
  id: string;
  email: string | null;
  fullName: string;
  phone: string;
  userType: UserType;
  language: Language;
  isVerified: boolean;
  verificationToken: string | null;
  verifiedAt: Date | null;
  resetPasswordToken: string | null;
  resetPasswordExpires: Date | null;
  offlineSyncToken: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt: Date | null;
}

export interface Staff {
  id: string;
  user: User;
  fullName: string;
  role: StaffRole;
  department: string | null;
  permissions: string[];
  employeeId: string | null;
  hireDate: Date | null;
  contactInfo: {
    emergencyContact: string;
    emergencyPhone: string;
    address: string;
  } | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  submittedTrackings: WeeklyTracking[];
  verifiedTrackings: WeeklyTracking[];
  uploadedDocuments: BeneficiaryDocument[];
  verifiedDocuments: BeneficiaryDocument[];
  verifiedMetrics: ImpactMetric[];
}

export interface Beneficiary {
  id: string;
  user: User;
  fullName: string;
  dateOfBirth: Date;
  location: {
    district: string;
    sector: string;
    cell: string;
    village: string;
  };
  program: Program;
  status: BeneficiaryStatus;
  enrollmentDate: Date;
  exitDate: Date | null;
  startCapital: number;
  currentCapital: number;
  businessType: string;
  trackingFrequency: TrackingFrequency;
  lastTrackingDate: Date | null;
  nextTrackingDate: Date | null;
  profileCompletion: number;
  requiresSpecialAttention: boolean;
  createdAt: Date;
  updatedAt: Date;
  weeklyTrackings: WeeklyTracking[];
  goals: Goal[];
  documents: BeneficiaryDocument[];
  emergencyContacts: EmergencyContact[];
}

export interface Donor {
  id: string;
  user: User;
  fullName: string;
  country: string;
  preferredCurrency: Currency;
  communicationPreferences: {
    email: boolean;
    sms: boolean;
  };
  receiptPreference: ReceiptPreference;
  totalDonated: number;
  lastDonationDate: Date | null;
  isRecurringDonor: boolean;
  anonymityPreference: boolean;
  receiveNewsletter: boolean;
  createdAt: Date;
  updatedAt: Date;
  donations: Donation[];
  recurringDonations: RecurringDonation[];
}

// Minimal versions of other interfaces to avoid circular dependency hell or massive files if not needed yet.
// But copying fully is safer.
export interface Donation {
  id: string;
  donor: Donor;
  amount: number;
  currency: string;
  localAmount: number;
  exchangeRate: number;
  donationType: DonationType;
  project: Project | null;
  program: Program | null;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  transactionId: string;
  paymentDetails: any;
  receiptSent: boolean;
  receiptSentAt: Date | null;
  receiptNumber: string | null;
  isAnonymous: boolean;
  metadata: any;
  donorMessage: string | null;
  isTest: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Program {
  id: string;
  name: { en: string; rw: string };
  description: { en: string; rw: string };
  category: ProgramCategory;
  sdgAlignment: number[];
  kpiTargets: any;
  startDate: Date;
  endDate: Date | null;
  status: ProgramStatus;
  budget: number;
  fundsAllocated: number;
  fundsUtilized: number;
  coverImage: string | null;
  logo: string | null;
  sortOrder: number;
  metadata: any;
  createdAt: Date;
  updatedAt: Date;
  projects: Project[];
  beneficiaries: Beneficiary[];
  impactMetrics: ImpactMetric[];
  stories: Story[];
  donations: Donation[];
}

export interface Project {
  id: string;
  program: Program;
  name: { en: string; rw: string };
  description: { en: string; rw: string };
  budgetRequired: number;
  budgetReceived: number;
  budgetUtilized: number;
  timeline: { start: Date; end: Date; milestones: any[] };
  location: { districts: string[]; sectors: string[] };
  impactMetrics: any;
  donationAllocationPercentage: number;
  isActive: boolean;
  isFeatured: boolean;
  coverImage: string | null;
  gallery: any[];
  createdAt: Date;
  updatedAt: Date;
  donations: Donation[];
}

export interface WeeklyTracking {
  id: string;
  beneficiary: Beneficiary;
  weekEnding: Date;
  attendance: AttendanceStatus;
  taskGiven: string | null;
  taskCompletionStatus: TaskStatus | null;
  incomeThisWeek: number;
  expensesThisWeek: number;
  currentCapital: number;
  salesData: any;
  challenges: string | null;
  solutionsImplemented: string | null;
  notes: string | null;
  nextWeekPlan: any;
  submittedBy: User | null;
  submittedByType: UserType;
  isOfflineSync: boolean;
  syncSessionId: string | null;
  offlineData: any;
  submittedAt: Date;
  verifiedAt: Date | null;
  verifiedBy: Staff | null;
}

export interface Goal {
  id: string;
  beneficiary: Beneficiary;
  description: string;
  type: GoalType;
  targetAmount: number;
  currentProgress: number;
  targetDate: Date;
  status: GoalStatus;
  milestones: any[];
  notes: string | null;
  actionPlan: any;
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date | null;
}

export interface BeneficiaryDocument {
  id: string;
  beneficiary: Beneficiary;
  documentType: DocumentType;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  publicId: string;
  uploadedBy: User | null;
  uploadedByType: UserType;
  verified: boolean;
  verifiedBy: Staff | null;
  verifiedAt: Date | null;
  createdAt: Date;
}

export interface EmergencyContact {
  id: string;
  beneficiary: Beneficiary;
  name: string;
  relationship: string;
  phone: string;
  alternatePhone: string | null;
  address: string;
  isPrimary: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RecurringDonation {
  id: string;
  donor: Donor;
  amount: number;
  currency: string;
  frequency: RecurringFrequency;
  project: Project | null;
  program: Program | null;
  status: RecurringStatus;
  nextChargeDate: Date;
  lastChargedDate: Date | null;
  lastChargeId: string | null;
  paymentMethodId: string;
  subscriptionId: string;
  paymentMethodDetails: any;
  totalCharges: number;
  totalAmount: number;
  startDate: Date | null;
  endDate: Date | null;
  cancellationReason: string | null;
  sendReminders: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImpactMetric {
  id: string;
  program: Program;
  metricName: string;
  metricValue: number;
  measurementUnit: string;
  period: MetricPeriod;
  periodDate: Date;
  source: MetricSource;
  notes: string | null;
  verifiedBy: Staff | null;
  verifiedAt: Date | null;
  createdAt: Date;
}

export interface Story {
  id: string;
  title: { en: string; rw: string };
  content: { en: string; rw: string };
  authorName: string;
  authorRole: AuthorRole;
  authorPhoto: string | null;
  program: Program | null;
  beneficiaryId: string | null;
  media: any[];
  isFeatured: boolean;
  isPublished: boolean;
  publishedDate: Date;
  language: Language;
  viewCount: number;
  shareCount: number;
  metadata: any;
  createdAt: Date;
  updatedAt: Date;
}
