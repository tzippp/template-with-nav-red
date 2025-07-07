// Removed next-intl imports and usage for single-language setup

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  // Removed next-intl imports and usage for single-language setup

  return {
    title: 'Dashboard',
  };
}

export default function Dashboard() {
  return (
    <div className="py-5 [&_p]:my-6">
      <Hello />
    </div>
  );
}
