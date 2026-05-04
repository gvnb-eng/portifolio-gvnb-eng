export default function SectionHeader({ label, title }) {
  return (
    <>
      <div className="section-label">{label}</div>
      <h2>{title}</h2>
    </>
  )
}
