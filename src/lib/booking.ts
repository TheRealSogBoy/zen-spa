export type ServiceSection = 'bronceado' | 'faciales' | 'masajes' | 'experiencias' | 'minidivas' | 'corporativo';

export interface BookingEventDetail {
  section: ServiceSection;
  serviceName?: string;
  price?: number | string;
}

export function openBooking(detail: BookingEventDetail) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-booking-modal', { detail }));
  }
}
