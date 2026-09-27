import { Mail, MapPin, Phone } from "lucide-react";

const phones = [
  "+256 751 981 614",
  "+256 782 657 031",
  "+256 788 483 954",
  "+256 752 637 539",
  "+256 754 723 111"
];

export default function ContactPage() {
  return (
    <main>
      <section className="hero-grid border-b border-[var(--line)]">
        <div className="container-school py-20">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Contact Savio</span>
          <h1 className="display mt-4 text-5xl text-[var(--green-dark)] sm:text-7xl">Talk to the school.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Official contact details supplied in the Savio Secondary School profile.
          </p>
        </div>
      </section>

      <section className="container-school grid gap-6 py-20 lg:grid-cols-2">
        <div className="space-y-5">
          <div className="paper-card rounded-2xl p-7">
            <MapPin className="text-[var(--green)]" />
            <h2 className="display mt-4 text-2xl text-[var(--brown-dark)]">Physical & postal address</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">Kawempe Ttula, Kampala / Wakiso, Uganda.</p>
            <p className="mt-2 leading-7 text-[var(--muted)]">P.O. Box 1608, Kampala (U)</p>
          </div>

          <div className="paper-card rounded-2xl p-7">
            <Mail className="text-[var(--green)]" />
            <h2 className="display mt-4 text-2xl text-[var(--brown-dark)]">Official email</h2>
            <a href="mailto:saviocollege1@gmail.com" className="mt-3 block font-semibold text-[var(--green)]">saviocollege1@gmail.com</a>
          </div>

          <div className="paper-card rounded-2xl p-7">
            <Phone className="text-[var(--green)]" />
            <h2 className="display mt-4 text-2xl text-[var(--brown-dark)]">Telephone lines</h2>
            <div className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
              {phones.map((phone) => <a key={phone} href={"tel:" + phone.replace(/\s/g, "")} className="font-semibold hover:text-[var(--green)]">{phone}</a>)}
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-[var(--green-dark)] p-8 text-white md:p-10">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#cfe2d7]">School identifiers</p>
          <h2 className="display mt-4 text-3xl">Savio S.S. / SACOS</h2>
          <div className="mt-8 space-y-4 text-sm">
            <Row label="Ministry registration" value="PSS/S/649" />
            <Row label="UNEB Centre" value="U3762" />
            <Row label="Selection code" value="3687" />
            <Row label="School type" value="Mixed Day & Boarding" />
          </div>

          <div className="mt-10 border-t border-white/15 pt-7">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#cfe2d7]">Social</p>
            <a className="mt-3 block font-semibold text-white hover:text-[#cfe2d7]" href="https://www.facebook.com/p/SAVIO-College-School-Kawempe-100063609622634/">Facebook · SAVIO College School-Kawempe</a>
            <p className="mt-2 text-sm text-white/70">YouTube · SAVIO CHANNEL (@saviochannel5042)</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
      <span className="text-white/65">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
