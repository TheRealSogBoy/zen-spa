export type FriendRow = { label: string; price: string; highlight?: boolean };

export type FriendPlan = {
  title: string;
  subtitle?: string;
  rows: FriendRow[];
  motionDelay?: number;
};

export const FRIEND_PLANS: FriendPlan[] = [
  {
    title: "Plan Dúo (2 Amigas)",
    rows: [
      { label: "Precio (Sol Puro):", price: "$170.000 COP" },
      { label: "Precio (Sin Sol):", price: "$190.000 COP" },
      { label: "Precio (Híbrido):", price: "$320.000 COP", highlight: true },
    ],
  },
  {
    title: "Plan Trío (3 amigas)",
    motionDelay: 0.2,
    rows: [
      { label: "Precio (Sol Puro):", price: "$240.000 COP" },
      { label: "Precio (Sin Sol):", price: "$270.000 COP" },
      { label: "Precio (Híbrido):", price: "$450.000 COP", highlight: true },
    ],
  },
];
