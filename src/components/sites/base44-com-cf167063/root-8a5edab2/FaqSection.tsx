"use client";

import { useState, type ReactNode } from "react";

import { MinusIcon, PlusIcon } from "../shared/icons";

const answerLinkClassName =
  "base44-focus font-medium underline decoration-[1px] underline-offset-4 transition-colors duration-200 hover:text-[var(--base44-muted)]";

type FaqItem = {
  answer: ReactNode;
  id: string;
  question: string;
};

const faqItems: readonly FaqItem[] = [
  {
    id: "what-is-base44",
    question: "What is Base44?",
    answer: (
      <>
        <p>
          Base44 is a no-code AI platform for building apps, websites and AI
          agents — no coding required. Describe what you want, and Base44
          generates the structure, design and logic for you. It handles the
          technical side so you can focus on the idea.
        </p>
        <p className="mt-6">
          Beyond building, Base44 gives you access to Superagents — AI agents
          that automate workflows, manage data and connect to your tools. They
          work alongside what you build, keeping things running even when
          you&apos;re not.
        </p>
      </>
    ),
  },
  {
    id: "how-base44-works",
    question: "How does Base44 work?",
    answer: (
      <p>
        Base44 uses{" "}
        <a
          className={answerLinkClassName}
          href="https://base44.com/blog/vibe-coding"
        >
          vibe coding
        </a>{" "}
        to build apps, websites, agents and more. Describe your idea in plain
        language — as a rough thought or a detailed spec. Base44 generates the
        code, structure, design and logic for your app or website. From there,
        keep iterating by chatting with the AI until everything works the way
        you want.
      </p>
    ),
  },
  {
    id: "base44-cost",
    question: "How much does it cost?",
    answer: (
      <p>
        Base44 has a free plan — no credit card needed to start. The free plan
        includes monthly credits to build and test your first apps. Paid plans
        start at $16/month (billed annually) and unlock more credits, advanced
        features and team capabilities. See full details on the{" "}
        <a className={answerLinkClassName} href="/pricing">
          pricing page
        </a>
        .
      </p>
    ),
  },
  {
    id: "coding-experience",
    question: "Do I need coding experience?",
    answer: (
      <p>
        No. Describe what you need in plain language and Base44 handles the
        rest.
      </p>
    ),
  },
  {
    id: "best-ai-no-code-platform",
    question: "Which AI no-code platform is best to build an app?",
    answer: (
      <>
        <p>
          The best AI no-code platform is the one that can turn your idea into
          a fully functional app — not just a static design — without requiring
          any coding experience. As you evaluate your options, here are the key
          factors to consider:
        </p>
        <ul className="mt-6 list-disc space-y-3 pl-6">
          <li>
            <strong className="font-medium">Full-stack generation</strong> —
            Does the AI handle the backend (data storage, authentication, logic)
            automatically, or just the UI?
          </li>
          <li>
            <strong className="font-medium">Iteration speed</strong> — Can you
            refine the app by chatting with the AI, or do you need to manually
            configure changes?
          </li>
          <li>
            <strong className="font-medium">Built-in hosting</strong> — Is your
            app instantly live after building, or do you need to set up separate
            deployment?
          </li>
          <li>
            <strong className="font-medium">Integrations</strong> — Does it
            connect to the tools you already use, like Slack, Google Calendar,
            or HubSpot?
          </li>
          <li>
            <strong className="font-medium">Scalability</strong> — Can it grow
            from a simple internal tool to an enterprise product?
          </li>
        </ul>
        <p className="mt-6">
          Base44 covers all of these out of the box. You describe your idea in
          plain language, and the AI generates a working app — complete with
          design, logic, and a backend — in minutes. From there, you can iterate,
          connect integrations, and go live instantly with built-in hosting.
          Check out our{" "}
          <a
            className={answerLinkClassName}
            href="https://base44.com/blog/how-to-build-an-app-with-ai"
          >
            step-by-step guide on how to build an app with AI
          </a>{" "}
          to see exactly how it works.
        </p>
      </>
    ),
  },
  {
    id: "build-website-with-ai",
    question: "Can I build a complete website with AI with Base44?",
    answer: (
      <>
        <p>
          Yes. Base44&apos;s{" "}
          <a
            className={answerLinkClassName}
            href="https://base44.com/ai-website-builder"
          >
            AI website builder
          </a>{" "}
          lets you generate a complete, fully functional website in minutes —
          just describe what you need in plain language. The AI handles layout,
          design, and content for you, with no coding or setup required.
        </p>
        <ul className="mt-6 list-disc space-y-3 pl-6">
          <li>
            <strong className="font-medium">
              Business websites and landing pages
            </strong>{" "}
            — designed to convert visitors into paying customers, with clear
            messaging and calls to action
          </li>
          <li>
            <strong className="font-medium">
              Portfolios and personal sites
            </strong>{" "}
            — showcase your work, skills, or brand with a professional look that
            makes a lasting impression
          </li>
          <li>
            <strong className="font-medium">
              Online stores and e-commerce sites
            </strong>{" "}
            — sell products or services with a fully functional storefront,
            from product pages to checkout
          </li>
          <li>
            <strong className="font-medium">
              Internal tools and client portals
            </strong>{" "}
            — give your team or clients a dedicated space to access data, track
            progress, and get things done.
          </li>
        </ul>
        <p className="mt-6">
          Once your site is ready, Base44 provides built-in hosting and custom
          domain support — so publishing takes one click. You can keep refining
          your site by chatting with the AI until it looks and works exactly the
          way you want.
        </p>
      </>
    ),
  },
  {
    id: "kinds-of-apps",
    question: "What kinds of apps can I build?",
    answer: (
      <p>
        Builders use Base44 for internal tools and dashboards, developer
        productivity apps, customer portals and CRMs, education and training
        platforms, health and wellness trackers, and a lot more. Browse the{" "}
        <a
          className={answerLinkClassName}
          href="https://base44.com/use-cases"
        >
          Use Cases library
        </a>{" "}
        for ideas and ready-to-build examples.
      </p>
    ),
  },
  {
    id: "integrations",
    question: "What integrations does Base44 support?",
    answer: (
      <p>
        Base44 connects to the tools you already use — Google Calendar, Gmail,
        Slack, Notion, HubSpot, Salesforce and more. You can also connect to any
        external service via API. Common capabilities like sending emails,
        managing data and AI-generated content are built in and ready to use
        without extra setup.
      </p>
    ),
  },
  {
    id: "credits",
    question: "How do credits work?",
    answer: (
      <>
        <p>
          Credits power AI generation. Every time the AI builds, modifies or
          refines your app, it uses credits. Free plans include a monthly
          allowance to get you started; paid plans include more. Complex builds
          and longer iteration cycles use more credits, so it helps to plan your
          build in clear phases. Check your balance any time in your account
          dashboard.
        </p>
        <a
          className={`${answerLinkClassName} mt-4 inline-block`}
          href="https://docs.base44.com/Account-and-billing/Credits"
        >
          Learn more
        </a>
      </>
    ),
  },
  {
    id: "deployment",
    question: "How are Base44 apps deployed?",
    answer: (
      <p>
        Base44 comes with built-in hosting — when your app is ready, it&apos;s
        instantly live and shareable. No deployment process, no setup.
      </p>
    ),
  },
  {
    id: "superagent",
    question: "What is a Superagent?",
    answer: (
      <p>
        A Superagent is an AI agent that takes action on your behalf. While your
        Base44 app is the product you&apos;re building, your Superagent is the
        assistant running alongside it — connecting to your inbox, calendar and
        tools to handle tasks, automate workflows and keep things moving.
      </p>
    ),
  },
  {
    id: "data-security",
    question: "Is my data secure?",
    answer: (
      <>
        <p>
          Yes. User management and authentication are built in, using
          industry-standard encryption and security practices to protect your
          data and your users.
        </p>
        <a
          className={`${answerLinkClassName} mt-4 inline-block`}
          href="https://docs.base44.com/Setting-up-your-app/security-overview"
        >
          Learn more
        </a>
      </>
    ),
  },
];

export function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>(faqItems[0].id);

  return (
    <section
      aria-labelledby="faq-heading"
      className="overflow-hidden bg-white px-[clamp(20px,4.6875vw,90px)] pt-14 pb-[clamp(80px,11.25vw,160px)] min-[1100px]:pt-[clamp(80px,8.333vw,160px)]"
    >
      <div className="mx-auto max-w-[1740px] min-[1100px]:grid min-[1100px]:grid-cols-[35%_54.6%] min-[1100px]:justify-between">
        <h2
          className="base44-display max-w-[500px] text-[clamp(40px,3.96vw,76px)] leading-[1.05] tracking-[-0.04em]"
          id="faq-heading"
        >
          Frequently asked questions
        </h2>

        <div className="mt-14 min-w-0 min-[1100px]:mt-0">
          {faqItems.map((item) => {
            const isOpen = openItem === item.id;
            const panelId = `faq-panel-${item.id}`;
            const triggerId = `faq-trigger-${item.id}`;

            return (
              <div className="border-t-2 border-[var(--base44-ink)]" key={item.id}>
                <h3>
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="base44-focus flex w-full items-center justify-between gap-6 py-8 text-left"
                    id={triggerId}
                    onClick={() => setOpenItem(isOpen ? null : item.id)}
                    type="button"
                  >
                    <span className="font-heading text-[clamp(22px,1.667vw,32px)] leading-[1.08] font-medium tracking-[-0.02em]">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <MinusIcon className="size-6 shrink-0" />
                    ) : (
                      <PlusIcon className="size-6 shrink-0" />
                    )}
                  </button>
                </h3>

                <div
                  aria-hidden={!isOpen}
                  aria-labelledby={triggerId}
                  className={`grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                  id={panelId}
                  inert={isOpen ? undefined : true}
                  role="region"
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className={`max-w-[832px] pb-8 text-[clamp(16px,.9375vw,18px)] leading-[1.44] font-normal transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
