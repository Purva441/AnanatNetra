function ResponseCard({ title, description, value }) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <p className="text-sm font-medium text-slate-500">{description}</p>
      <h3 className="mt-1 text-base font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{value || 'Not available'}</p>
    </article>
  );
}

export default ResponseCard;
