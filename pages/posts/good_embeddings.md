---
title: Good Embeddings
date: 2025/09/12
description: Can the Platonic good be codified?
tag: philosophy, AI, coding
author: Roberto & ChatGPT
---

# Good Embeddings

_The following is a program of work for a new interaction paradigm on the Web. It is fairly experimental and technical, but ultimately it is an exploration of ideas related to the convergence of world representations within language models. The main inspiration is this paper: [The Platonic Representation Hypothesis](https://arxiv.org/abs/2405.07987)_

## Ontology (what the world is made of)

- **Everything is an affordance.** Treat the web as a field of actions, not pages. Resources announce what can be done (schemas, contracts), not how it looks.
- **Text-as-Runtime.** Structured text (manifests, intents, plans) is living substrate—directly operable by agents and legible to humans. UI is a projection, not the ground.
- **Embeddings are the world-model.** With PRH/MTR-style refinement, embeddings become the shared coordinate system for perception, memory, routing, and planning.
- **Presentation precedes representation.** First the operative substrate (affordances, embeddings), then optional narratives/views. Bodies act before they narrate.

## Architecture (how pieces fit)

- **Small LMs as controllers, not temples.** Keep LMs hot-swappable policy slots. The center of gravity is memory (embeddings) + tools (affordances) + contracts.
- **Actor boundaries, boring adapters.** Paseo's value is at seams: embedding store actor, tool registry, policy layer. Everything else is pluggable behind &lt;200-LOC adapters.
- **Matryoshka retrieval as default.** Coarse slice → broad recall; rerank with full vectors. Cost and latency are dials on the same substrate.
- **Policy over prompt.** Put safety, budgets, and inclusion in enforceable contracts (schemas, capabilities, feature gates), not in model "goodwill."

## Epistemics & Safety (how we know and don't break)

- **Failure is first-class.** Hamilton's ethos: expect void turns, partial plans, flaky tools. Filter, retry, and learn procedurally—don't paper it over with prompts.
- **Natural > skeuomorphic transformations.** Prefer mappings that preserve structure (affordance → affordance) over those that preserve appearance (button → button). Aim for commutative diagrams between human view and agent protocol.
- **Latent interpretability as policy substrate.** As features become readable, gate behaviors at the representation layer (feature monitors, audits), making justice/inclusion systemic.

## Political economy (where power shifts)

- **From persuasion to contract.** Page-centric moats (dark patterns, friction) erode. Value accrues to clear affordances, verifiable outcomes, and reliable logs.
- **From spectacle to quiet infrastructure.** Success looks like disappearance: things work because the substrate is simple, inspectable, and composable.

## Practice (how to actually move)

- **Affordance-first API design.** `/.well-known/agent` manifests, strong JSON Schemas, idempotency keys, event streams. Treat UI as print-on-demand from the same source.
- **Unix mindset at network scale.** Compose affordances like pipes: `search → reserve → pay`. Keep programs living in the textual substrate; views are optional layers.
- **Learning at the edges.** Train small controllers on trajectories + rewards emitted by the system (void-turn filters, verifiable outcomes). Don't entangle core behavior with model quirks.

## Vocabulary (short handles we can reuse)

- **"From Page to Field."** The atomic unit is the affordance, not the page.
- **"Text is the runtime."** The canonical place both humans and agents meet.
- **"Embeddings are memory."** One space, many views.
- **"Policy, not pleasantry."** Ethics encoded as contracts, not vibes.
- **"Natural transformations."** Human view and agent protocol commute to the same invariant.
