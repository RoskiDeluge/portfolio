---
title: Good Embeddings
date: 2025/09/12
description: Can the Platonic good be codified?
tag: philosophy, AI, coding
author: Roberto
---

# Guideposts for the Work

## Ontology (what the world is made of)

1.  **Everything is an affordance.** Treat the web as a field of actions, not pages. Resources announce what can be done (schemas, contracts), not how it looks.
    
2.  **Text-as-Runtime.** Structured text (manifests, intents, plans) is living substrate—directly operable by agents and legible to humans. UI is a projection, not the ground.
    
3.  **Embeddings are the world-model.** With PRH/MTR-style refinement, embeddings become the shared coordinate system for perception, memory, routing, and planning.
    
4.  **Presentation precedes representation.** First the operative substrate (affordances, embeddings), then optional narratives/views. Bodies act before they narrate.
    

## Architecture (how pieces fit)

5.  **Small LMs as controllers, not temples.** Keep LMs hot-swappable policy slots. The center of gravity is memory (embeddings) + tools (affordances) + contracts.
    
6.  **Actor boundaries, boring adapters.** Paseo’s value is at seams: embedding store actor, tool registry, policy layer. Everything else is pluggable behind <200-LOC adapters.
    
7.  **Matryoshka retrieval as default.** Coarse slice → broad recall; rerank with full vectors. Cost and latency are dials on the same substrate.
    
8.  **Policy over prompt.** Put safety, budgets, and inclusion in enforceable contracts (schemas, capabilities, feature gates), not in model “goodwill.”
    

## Epistemics & Safety (how we know and don’t break)

9.  **Failure is first-class.** Hamilton’s ethos: expect void turns, partial plans, flaky tools. Filter, retry, and learn procedurally—don’t paper it over with prompts.
    
10.  **Natural > skeuomorphic transformations.** Prefer mappings that preserve structure (affordance → affordance) over those that preserve appearance (button → button). Aim for commutative diagrams between human view and agent protocol.
    
11.  **Latent interpretability as policy substrate.** As features become readable, gate behaviors at the representation layer (feature monitors, audits), making justice/inclusion systemic.
    

## Political economy (where power shifts)

12.  **From persuasion to contract.** Page-centric moats (dark patterns, friction) erode. Value accrues to clear affordances, verifiable outcomes, and reliable logs.
    
13.  **From spectacle to quiet infrastructure.** Success looks like disappearance: things work because the substrate is simple, inspectable, and composable.
    

## Practice (how to actually move)

14.  **Affordance-first API design.** `/.well-known/agent` manifests, strong JSON Schemas, idempotency keys, event streams. Treat UI as print-on-demand from the same source.
    
15.  **Unix mindset at network scale.** Compose affordances like pipes: `search → reserve → pay`. Keep programs living in the textual substrate; views are optional layers.
    
16.  **Learning at the edges.** Train small controllers on trajectories + rewards emitted by the system (void-turn filters, verifiable outcomes). Don’t entangle core behavior with model quirks.
    

## Vocabulary (short handles we can reuse)

-   **“From Page to Field.”** The atomic unit is the affordance, not the page.
    
-   **“Text is the runtime.”** The canonical place both humans and agents meet.
    
-   **“Embeddings are memory.”** One space, many views.
    
-   **“Policy, not pleasantry.”** Ethics encoded as contracts, not vibes.
    
-   **“Natural transformations.”** Human view and agent protocol commute to the same invariant.
