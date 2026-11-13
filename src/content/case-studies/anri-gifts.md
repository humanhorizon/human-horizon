---
client: Anri Gifts
website: https://anrigifts.com
logo: /case-studies/anri-gifts-logo.png
logoStacked: /case-studies/anri-gifts-logo-stacked.png
about: A Singapore business selling customised corporate gifts and wedding favours.
title: From supplier to live product in 8 minutes, not 5 days.
seoTitle: "AI case study: Anri Gifts, Singapore gifting | Human Horizon"
description: "AI case study: Singapore corporate gifting business Anri Gifts now gets a product from sourcing to live in 8 minutes, and spends 5 minutes a day on quotations."
summary: Each member of staff now reviews what AI prepares across sourcing, catalogue work, product images and quotations, and spends the time gained on suppliers and new clients.
subtitle: "AI across sourcing, product images and quotations, with staff reviewing every output."
tools: [Claude]
services: [implement, train, adopt]
industry: trading-distribution
teams: [operations, marketing, sales]
workflows:
  - team: operations
    name: Product sourcing and catalogue management
    result: less time to source and list a product
    summary:
      before: "Manual sourcing, supplier comparison and catalogue updates."
      now: "Automated sourcing and catalogue management, reviewed by procurement."
    before: "Procurement staff searched for products and compared suppliers by hand, then updated the catalogue database and the collateral that listed each product."
    after: "Sourcing runs automatically every week and on demand, checking competitor catalogues to prioritise and fill catalogue gaps based on competitor availability. Catalogue sourcing, importing, database updates and supplier management are now automated, ready for a person to review before sharing with the sales team."
    staff: Procurement staff
    people: "Reviewing each product before it is shared with the sales team, and building relationships with suppliers."
    time: { before: "5 days", after: "8 minutes", beforeMinutes: 2400, afterMinutes: 8, unit: "per product" }
    humans: 1
    agents: 2
  - team: marketing
    name: Product images and pages
    result: less time preparing product images
    summary:
      before: "Product and pack images redone by hand, one product at a time."
      now: "AI-prepared images and product pages, approved by procurement."
    before: "Product and pack images were redone by hand for each new product before it could appear on the website or in collateral."
    after: "An AI design assistant prepares the product and pack images for the catalogue and product pages. Procurement staff review and approve them."
    staff: Procurement staff
    people: "Approving images in minutes, so new products reach the sales team sooner."
    time: { before: "2 days", after: "10 minutes", beforeMinutes: 960, afterMinutes: 10, unit: "per product" }
    humans: 1
    agents: 1
  - team: sales
    name: Quotations and customer replies
    result: less time on quotations each day
    summary:
      before: "Every quotation and reply put together by hand."
      now: "AI-drafted quotations and replies, checked and sent by sales."
    before: "Each quotation meant looking up customer information, products and prices across custom CRM database software that worked poorly with other tools, then drafting every email and WhatsApp reply by hand."
    after: "An AI sales assistant reads each customer request, drafts replies and builds a PDF-ready quotation in minutes. The sales team reviews every draft before it is sent."
    staff: Sales staff
    people: "Checking every quotation before it goes out, and building relationships with new clients."
    time: { before: "4 hours", after: "5 minutes", beforeMinutes: 240, afterMinutes: 5, unit: "a day" }
    humans: 1
    agents: 1
team:
  then:
    - { role: "Procurement staff", did: "Searched for products, compared suppliers, waited on reworked pack images and updated the catalogue database and collateral by hand." }
    - { role: "Sales staff", did: "Looked up customer details, products and prices in a custom CRM that worked poorly with other tools, and drafted every email and WhatsApp reply by hand." }
  now:
    - { role: "Procurement staff", does: "Reviews the products and images the AI assistants prepare before they reach the sales team, and works closely with suppliers." }
    - { role: "Sales staff", does: "Reviews the quotations and replies the AI sales assistant drafts, sends them and builds relationships with new clients." }
  assistants:
    - { name: "AI sourcing assistant", does: "Finds products and compares suppliers, weekly and on demand." }
    - { name: "AI product assistant", does: "Imports products into the catalogue and keeps the database and supplier records current." }
    - { name: "AI design assistant", does: "Prepares product and pack images for the catalogue and product pages." }
    - { name: "AI sales assistant", does: "Reads each customer request, drafts email and WhatsApp replies and builds quotations." }
date: 2026-11-13
publish: false
featured: true
notionPage: https://app.notion.com/p/417d0a6f047e8162b6a5f248fc9e8ebf
---

## Where did the time go before AI?

Anri Gifts runs on a small team, with one person each in procurement and sales. In a business that size, every hour spent on repeat work is an hour taken from growing the business.

Before AI, most of those hours went into getting products ready to sell. Each new product passed through several pairs of hands: sourcing and supplier comparison, image work, then updates to the catalogue and the collateral that listed it. A single product could take a full working week to reach the website. That slowed how quickly the range could respond to what competitors offered and what clients asked for.

Sales carried the same weight. Every enquiry meant pulling information from a CRM that did not work well with the rest of the business's tools, then writing each quotation and reply from scratch. Half of every sales day went on preparation, not on the conversations that win new clients.

None of this work was unskilled. It simply left the team with little time for the parts of the job that only people can do.

## What did Human Horizon implement?

Human Horizon co-founder Jaye Wang led the [AI implementation](/what-we-do/implement) with the founder and team. The aim was not to add another tool. It was to rebuild the work itself around the people who do it.

Together they mapped where the time went in each of the three workflows, then built each [AI workflow](/insights/glossary/workflow-automation) around Claude and the tools the business already used. [AI agents](/insights/glossary/ai-agent) now run sourcing, catalogue work and image preparation automatically, and an AI sales assistant prepares quotations and replies. Custom CRM and database software, built with the team, connects the workflows so information no longer has to be copied from one place to another.

Every workflow was designed with a person at the point of decision. Nothing reaches the sales team, the website or a client until a member of staff has checked it.

## How was the team trained?

Jaye trained the founder and team to work with Claude and existing tools, and they built each workflow together. The [AI training](/what-we-do/train) ran alongside the build, so each person learned AI on the work they own rather than on generic examples.

That meant procurement learned to direct and check the sourcing, product and design agents, and sales learned to review AI drafts with the same care as their own. By the end, each of them understood how their workflow ran, where to check it and how to adjust it when the business changes.

## How did the PACT keep people first?

Every Human Horizon engagement runs on the [PACT](/#pact), four commitments that make AI a people change, not just a technology change. At Anri Gifts, each one shaped the work.

- **Promise.** From the start, every role knew what AI would mean for it: the AI assistants would take on the groundwork, and staff would keep the judgement, the decisions and the relationships.
- **Ask and involve.** The people who do the work built the workflows. Procurement and sales each shaped how their AI assistants work, which is why the workflows fit the way the business actually runs.
- **Coach.** Support continued while each person built confidence in directing and checking AI output, so nobody was left to work it out alone.
- **Track and reinforce.** Each workflow was measured before and after, and adjusted where it needed it, so the new way of working holds.

## What did the team adopt?

[AI adoption](/what-we-do/adopt) at Anri Gifts means every member of staff now works with AI as part of their role. Four [AI assistants](/insights/glossary/ai-assistant) support two people across procurement and sales, and each person has moved from doing the groundwork to reviewing it and acting on it.

The change goes beyond time saved. Each role now starts from prepared work and centres on the judgement only that person can bring.

## How was the return measured?

The results were reported to Anri Gifts' management team in an ROI Transformation Report, which sets out the time each workflow took before and after AI:

- **Product sourcing and catalogue management:** from 5 working days to 8 minutes per product.
- **Product images and pages:** from 2 working days to 10 minutes per product.
- **Quotations and customer replies:** from 4 hours to 5 minutes a day.

With the time measured workflow by workflow, management can see where the return comes from and decide where AI should go next.

## Why did the results stick?

The results stuck because the change was built around people, not just tools. Each person owns the workflow they shaped, knows what changed in their role and why, and has gained time for the work they value most.

AI is now part of how Anri Gifts runs, across sourcing, catalogue, images and sales, not a tool one person tries now and then. Staff remain the [human in the loop](/insights/glossary/human-in-the-loop) on every call that matters: what reaches the sales team, what each client receives and which suppliers to work with. That shared way of working is what makes AI part of the culture rather than an individual pursuit.
