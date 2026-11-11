---
term: "Retrieval-augmented generation (RAG)"
seoTitle: "What is retrieval-augmented generation? | Human Horizon"
description: "Retrieval-augmented generation (RAG) lets an AI tool answer from your own documents. Learn how it works, why document quality matters and how to check."
short: "Retrieval-augmented generation (RAG) is a way of making an AI tool answer from your own documents. It first finds the most relevant passages in a trusted source, then uses them to write its answer."
date: 2026-11-11
keyword: "what is retrieval-augmented generation"
category: AI basics
tags: ["Data"]
audience: ["Founders", "AI and ops"]
related: ["large-language-model-llm", "hallucination", "context-window", "workflow-automation"]
sources: []
notionPage: https://app.notion.com/p/fead0a6f047e837588688182f0024c00
publishedVersion: "2026-11-11T06:10:48.088Z"
---

## How it works

RAG has two steps.

1. **Retrieval.** When someone asks a question, the system searches a chosen collection of documents, such as policies, product sheets, past proposals or standard operating procedures. It picks out the passages most likely to hold the answer.
2. **Generation.** It passes those passages to the language model along with the question, and asks the model to answer using that material.

A general AI model does not know your prices, your processes or your clients. RAG gives it the right facts at the moment it answers, without retraining the model. Good set-ups also show which document each point came from, so the person reading can check it.

Two things decide how well it works. The first is the documents. If they are out of date, duplicated or contradict each other, the answers will be confidently wrong. The second is access. The system should only retrieve what the person asking is allowed to see.

## An example

The sales team at an industrial supplies distributor gets daily questions about product specifications. A RAG tool searches the company's datasheets and drafts each reply, quoting the datasheet it used. The salesperson opens the cited page, confirms the specification matches the customer's question and sends the reply. Answers that used to wait for the one product expert now go out the same day, still checked by a person.

## RAG vs training a model on your data

Training or fine-tuning changes the model itself. RAG leaves the model as it is and looks up your documents each time it answers. For most small businesses RAG is easier to keep current: update the document and the answers follow.

## Where to go next

RAG is often the backbone of a useful internal assistant. See how [AI implementation](/what-we-do/implement) builds workflows on your own documents, with a person checking the output.
