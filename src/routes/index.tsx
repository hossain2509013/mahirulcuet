import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({ component: Home });

const FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSfcaAlyx5id8jnOHG4LsNZ6Hg3iLvmt9xPuQ7VwEAve0goJJA/viewform";
const WHATSAPP = "https://wa.me/8801777888446";
const PAGE = "https://www.facebook.com/profile.php?id=61595765411384";
const OWNER = "https://www.facebook.com/mahirul.hasan.334";
const SECONDARY = "https://www.facebook.com/hossain2509013/";

const SPECS = [
  ["Capacity", "750 ml"],
  ["Material", "Premium aluminium"],
  ["Design", "CUET campus illustration"],
  ["Clip", "Metal carabiner"],
  ["Box", "Premium custom packaging"],
  ["Price", "BDT 350"],
];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <Bottle />
        <Range />
        <Order />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-sand bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src="/images/mark.jpg" alt="" className="h-8 w-auto" />
          <span className="font-display text-lg font-bold tracking-wide">MAHIRUL</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          <a href="#bottle" className="hover:text-ink">
            CUET bottle
          </a>
          <a href="#range" className="hover:text-ink">
            Custom
          </a>
          <a href="#order" className="hover:text-ink">
            Order
          </a>
          <a href="#faq" className="hover:text-ink">
            FAQ
          </a>
          <a href="#contact" className="hover:text-ink">
            Contact
          </a>
        </nav>
        <a
          href={FORM}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-1 rounded-full bg-burgundy px-4 text-sm font-medium text-paper"
        >
          Pre-order
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
      <nav className="mx-auto flex w-full min-w-0 max-w-6xl gap-5 overflow-x-auto px-5 pb-3 text-sm text-muted md:hidden">
        <a href="#bottle">CUET bottle</a>
        <a href="#range">Custom</a>
        <a href="#order" className="shrink-0">
          Order
        </a>
        <a href="#faq" className="shrink-0">
          FAQ
        </a>
        <a href="#contact" className="shrink-0">
          Contact
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-10 pb-4 md:pt-16">
      <p className="text-sm font-medium tracking-widest text-muted uppercase">
        Chattogram · Made for everyday
      </p>
      <h1 className="mt-4 max-w-full font-display text-4xl leading-none font-extrabold tracking-tight sm:text-6xl lg:text-8xl">
        MAHIRUL
      </h1>
      <p className="mt-5 max-w-xl text-2xl leading-snug">Custom bottles & keyrings.</p>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        Useful things, careful design, and a clear way to order. The CUET 750 ml bottle has
        arrived. Delivery for placed orders starts within the next few days.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={FORM}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-burgundy px-5 text-sm font-medium text-paper"
        >
          Open the pre-order form
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/15 px-5 text-sm font-medium"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
      <figure className="mt-10 overflow-hidden rounded-2xl bg-sand">
        <img
          src="/images/range.jpg"
          alt="Stainless, matte black, and glass Mahirul bottles with leather and wood keyrings on a wooden table"
          className="w-full"
        />
      </figure>
    </section>
  );
}

function Bottle() {
  return (
    <section id="bottle" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid items-start gap-10 md:grid-cols-12">
        <figure className="md:col-span-5">
          <div className="overflow-hidden rounded-2xl bg-sand">
            <img
              src="/images/cuet-bottle.jpg"
              alt="White 750 ml CUET aluminium bottle with a carabiner, on a wooden desk"
              className="mx-auto h-auto max-h-[68vh] w-full object-contain"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            Front carries the CUET campus mark. Mahirul mark at the base.
          </figcaption>
        </figure>
        <div className="md:col-span-7">
          <p className="text-sm font-medium tracking-widest text-burgundy uppercase">
            Carry your campus pride
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight font-bold md:text-5xl">
            CUET premium water bottle
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            A CUET-inspired aluminium bottle for everyday use. Campus illustration on the
            front, a metal carabiner on the cap, and a custom box.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sand bg-sand sm:grid-cols-3">
            {SPECS.map(([label, value]) => (
              <div key={label} className="bg-paper px-4 py-4">
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="mt-1 font-medium">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 rounded-2xl bg-ink px-6 py-6 text-paper">
            <div>
              <p className="text-sm tracking-widest text-sand uppercase">Per bottle</p>
              <p className="mt-1 font-display text-6xl leading-none font-extrabold">
                <span className="mr-2 align-top text-2xl font-semibold">BDT</span>
                350
              </p>
              <p className="mt-3 text-sm text-sand">
                ৳100 advance now · ৳250 remaining later
              </p>
            </div>
            <a
              href={FORM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-paper px-5 text-sm font-medium text-ink"
            >
              Pre-order this bottle
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <figure className="overflow-hidden rounded-2xl bg-sand">
          <img
            src="/images/cuet-diagram.jpg"
            alt="Diagram of the CUET bottle showing the plain back, printed front, 750 ml size, and custom box"
            className="w-full"
          />
        </figure>
        <figure className="overflow-hidden rounded-2xl bg-ink">
          <img
            src="/images/cuet-arrived.jpg"
            alt="Two finished CUET bottles standing with their white custom box"
            className="h-auto max-h-[62vh] w-full object-contain object-center"
          />
          <figcaption className="px-5 py-4 text-sm text-sand">
            Finished bottles with the custom box. Delivery of placed orders starts within
            the next few days.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Range() {
  return (
    <section id="range" className="border-t border-sand bg-sand/60">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-muted uppercase">Custom work</p>
          <h2 className="mt-3 font-display text-4xl leading-tight font-bold md:text-5xl">
            Named bottles and keyrings
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Water bottles are in production now. Stainless, matte, and glass bottles, plus
            keyrings with a name or initials, are made to order. Ask the shop on WhatsApp
            for a quote — those prices are not listed yet.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          <li className="rounded-2xl bg-paper p-6">
            <h3 className="font-display text-2xl font-bold">Bottles</h3>
            <p className="mt-2 text-muted">
              Stainless steel, matte black, and glass with a wood lid. The matte bottle in
              the cover reads EXPLORE.
            </p>
          </li>
          <li className="rounded-2xl bg-paper p-6">
            <h3 className="font-display text-2xl font-bold">Keyrings</h3>
            <p className="mt-2 text-muted">
              Leather straps with a name, a wood disc, and a small acrylic tag. Initials
              such as A.K. and S.R. are already on the samples.
            </p>
          </li>
          <li className="rounded-2xl bg-paper p-6">
            <h3 className="font-display text-2xl font-bold">Coming next</h3>
            <p className="mt-2 text-muted">
              More everyday pieces are planned. Updates go on the Mahirul page.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Order() {
  return (
    <section id="order" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-sand uppercase">Pre-order</p>
          <h2 className="mt-3 font-display text-4xl leading-tight font-bold md:text-5xl">
            How an order works
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sand">
            The form is for the CUET bottle. It asks for your full name, student ID,
            WhatsApp number, payment method, and transaction ID. Use your student ID as the
            payment reference.
          </p>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          <li className="rounded-2xl border border-paper/15 p-6">
            <p className="font-display text-sm tracking-widest text-sand">01</p>
            <h3 className="mt-4 font-display text-2xl font-bold">Fill the form</h3>
            <p className="mt-2 text-sand">
              One form per order. Write the details the way they should appear for delivery.
            </p>
          </li>
          <li className="rounded-2xl border border-paper/15 p-6">
            <p className="font-display text-sm tracking-widest text-sand">02</p>
            <h3 className="mt-4 font-display text-2xl font-bold">Pay ৳100</h3>
            <p className="mt-2 text-sand">
              Advance is ৳100 per bottle. Put the transaction ID on the form, and use your
              student ID as the payment reference.
            </p>
          </li>
          <li className="rounded-2xl border border-paper/15 p-6">
            <p className="font-display text-sm tracking-widest text-sand">03</p>
            <h3 className="mt-4 font-display text-2xl font-bold">Pay ৳250 later</h3>
            <p className="mt-2 text-sand">
              The rest is due afterwards. Placed orders start moving within the next few
              days.
            </p>
          </li>
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={FORM}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-burgundy px-5 text-sm font-medium text-paper"
          >
            Open pre-order form
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-paper/20 px-5 text-sm font-medium text-paper"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-widest text-muted uppercase">FAQ</p>
        <h2 className="mt-3 font-display text-4xl leading-tight font-bold md:text-5xl">
          Before you pay
        </h2>
      </div>
      <dl className="mt-10 grid gap-4">
        {FAQ.map((item) => (
          <div key={item.q} className="rounded-2xl bg-sand px-6 py-5">
            <dt className="font-display text-2xl font-bold">{item.q}</dt>
            <dd className="mt-3 max-w-3xl leading-relaxed">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

const FAQ = [
  {
    q: "Who can order?",
    a: "The CUET bottle form is for CUET students. It asks for a student ID. Custom bottles and keyrings are separate — message the shop on WhatsApp.",
  },
  {
    q: "What does the ৳100 cover?",
    a: "It is the advance on the ৳350 price, not an extra fee. Pay ৳100 for each bottle, put the transaction ID on the form, and use your student ID as the reference.",
  },
  {
    q: "When is the remaining ৳250 due?",
    a: "Later. After the pre-order is in, the shop tells you when. That ৳250 is the rest of the ৳350.",
  },
  {
    q: "How does delivery work?",
    a: "Orders already placed start going out within the next few days. The shop confirms the details on WhatsApp. No separate delivery charge is listed.",
  },
];

function Contact() {
  return (
    <section id="contact" className="border-t border-sand">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-4">
          <p className="text-sm font-medium tracking-widest text-muted uppercase">Contact</p>
          <h2 className="mt-3 font-display text-4xl leading-tight font-bold">
            Orders go to the shop.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Suggestions, and anything that is not an order, go to Hossain.
          </p>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPin className="size-4 text-burgundy" aria-hidden="true" />
            Chattogram · 4203
          </p>
        </div>
        <div className="grid gap-8 md:col-span-8">
          <div>
            <h3 className="font-display text-xl font-bold">Orders · the shop</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              <ContactRow
                icon={<MessageCircle className="size-5" aria-hidden="true" />}
                label="WhatsApp · orders"
                value="01777-888446"
                href={WHATSAPP}
              />
              <ContactRow
                icon={<Phone className="size-5" aria-hidden="true" />}
                label="Call · orders"
                value="01836-187243"
                href="tel:+8801836187243"
              />
              <ContactRow
                icon={<Mail className="size-5" aria-hidden="true" />}
                label="Email · orders"
                value="mahirulh50@gmail.com"
                href="mailto:mahirulh50@gmail.com"
              />
              <ContactRow
                icon={<FacebookIcon />}
                label="Official page · orders"
                value="Mahirul"
                href={PAGE}
              />
              <ContactRow
                icon={<FacebookIcon />}
                label="Mahirul Hasan · owner"
                value="Product questions"
                href={OWNER}
              />
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold">Suggestions · Hossain</h3>
            <ul className="mt-3 grid gap-3">
              <ContactRow
                icon={<FacebookIcon />}
                label="Hossain · suggestions"
                value="Feedback and other enquiries"
                href={SECONDARY}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
      <path d="M14.2 8.4V6.9c0-.6.4-.9 1-.9H17V3.5h-1.9C12.4 3.5 11.2 4.7 11.2 6.8v1.6H9.4v2.5h1.8V20h3.2v-9.1h2.1l.3-2.5h-2.6Z" />
    </svg>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="flex min-h-16 items-center gap-4 rounded-2xl bg-sand px-5 py-4"
      >
        <span className="text-burgundy">{icon}</span>
        <span>
          <span className="block text-sm text-muted">{label}</span>
          <span className="font-medium">{value}</span>
        </span>
      </a>
    </li>
  );
}

function Footer() {
  return (
    <footer className="border-t border-sand">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted">
        <p>Mahirul · Custom bottles & keyrings · Chattogram</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={PAGE} target="_blank" rel="noreferrer" className="underline">
            Shop page
          </a>
          <a href={OWNER} target="_blank" rel="noreferrer" className="underline">
            Mahirul Hasan
          </a>
          <a href={SECONDARY} target="_blank" rel="noreferrer" className="underline">
            Hossain
          </a>
        </nav>
      </div>
    </footer>
  );
}
