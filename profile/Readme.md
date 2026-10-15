# Udyog Manager

Billing, customer records and business management for merchants, with planned web, mobile and chatbot access.

**Domain:** udyogmanager.com  
**Product status:** Planning and development. The welcome website, product documents and presentations are available. The application backend, mobile app and chatbot are planned.  
**Business model:** ₹1 per finalized bill through prepaid credits. Customer creation is free. Tax presentation and recharge terms remain to be approved.

## Product materials

- [Complete product and development specification](../Udyog-Manager-Product-and-Development-Specification.md)
- [Architecture flow](../Udyog-Manager-Architecture-Flow.md)
- [Complete product report PDF](../output/pdf/Udyog-Manager-Complete-Report.pdf)
- [25 slide presentation PDF](../output/pdf/Udyog-Manager-Complete-Presentation.pdf)
- [Browser presentation](../output/pdf/Udyog-Manager-Complete-Presentation.html)
- [Product idea document](../launch-kit/Udyog-Manager-Idea.html)
- [Brand guide](../launch-kit/Brand-Guide.md)
- [Product icon](../launch-kit/dist/assets/icon.svg)

Download HTML files and open them locally to view them as webpages; repository file previews show their source.

## Website

The [welcome website](../launch-kit/dist/index.html) contains a Resources section with the report, presentation, idea document, specification and brand assets. Deploy the complete [static website directory](../launch-kit/dist), including its resources and assets folders.

The site requires no build step, database or application server. It describes planned capabilities and does not collect personal information or accept payments.

See the [launch kit instructions](../launch-kit/README.md) for hosting and domain setup. Domain purchase alone does not configure DNS or hosting.

## Proposed application stack

| Component | Technology | Status |
|---|---|---|
| Business backend | Django and Django REST Framework | Django confirmed; implementation planned |
| Web application | Next.js | Confirmed direction |
| Chatbot service | FastAPI | Confirmed direction |
| Mobile application | React Native with Expo | Proposed |
| Database | PostgreSQL | Proposed |
| Background jobs | Celery and Redis | Proposed |

## Rebuilding materials

With Node.js installed, run these commands from the repository root:

```sh
node ../launch-kit/build-materials.mjs
node ../launch-kit/build-full-product.mjs
node ../launch-kit/sync-resources.mjs
```

The first two commands generate HTML documents and slides. They do not export PDFs. Regenerate and inspect the PDFs separately before running the resource synchronization command, which copies the existing PDFs to the website and checks local links.

## Repository contents

- The root specification contains the detailed requirements and decisions.
- The launch kit contains website source, brand assets and document generators.
- The output directory contains the final report and presentation files.
- Temporary rendering files, browser profiles, credentials and nested Git metadata are excluded from the GitHub upload.

The existing local Sites repository is managed separately. Do not overwrite its Git remote when publishing these materials to GitHub.
