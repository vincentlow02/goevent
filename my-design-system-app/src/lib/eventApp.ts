export type TicketQuantityMap = Record<string, number>;
export type MainTab = "discover" | "ticket" | "saved" | "profile";
export type DetailSourceTab = "discover" | "ticket";
export const SUMMER_JAZZ_LAYOUT_IDS = {
  container: "summer-jazz-card-container",
  image: "summer-jazz-card-image",
  title: "summer-jazz-card-title",
  location: "summer-jazz-card-location",
} as const;
export type ActiveView =
  | "discover"
  | "ticket"
  | "saved"
  | "profile"
  | "ticketDetail"
  | "ticketBooking"
  | "ticketPayment"
  | "ticketSuccess";

export const ticketOptions: ReadonlyArray<{
  id: "general" | "vip";
  name: string;
  price: number;
  description: readonly [string, string];
  badge?: string;
}> = [
  {
    id: "general",
    name: "General Admission",
    price: 3500,
    description: ["Includes", "1 drink voucher"] as const,
  },
  {
    id: "vip",
    name: "VIP Front Row",
    price: 6000,
    description: ["Includes", "2 drinks & reserved seating voucher"] as const,
    badge: "BEST VIEW",
  },
] as const;

export function formatYen(amount: number) {
  return `\u00A5${amount.toLocaleString("ja-JP")}`;
}
