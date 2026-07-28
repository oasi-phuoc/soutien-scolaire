import dynamic from "next/dynamic";

const PlacementHubClient = dynamic(
  () =>
    import("@/components/placement/PlacementHubClient").then(
      (m) => m.PlacementHubClient,
    ),
  {
    loading: () => (
      <p className="px-4 py-16 text-center text-sm text-[var(--color-text-secondary)]">
        Chargement du placement…
      </p>
    ),
  },
);

export default function PlacementPage() {
  return <PlacementHubClient />;
}
