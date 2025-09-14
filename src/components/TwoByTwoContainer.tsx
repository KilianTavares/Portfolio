export default function TwoByTwoContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
      {children}
    </section>
  );
}
