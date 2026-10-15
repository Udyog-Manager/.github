# Udyog Manager Architecture Flow

This diagram shows how the web app, mobile app, chatbot, backend, data services, and infrastructure relate to each other.

```mermaid
flowchart TD
    Merchant[Merchant / Business Owner]
    Staff[Staff / Accountant]

    Web[Web App<br/>Next.js]
    Mobile[Mobile App<br/>React Native + Expo]
    Chatbot[Chatbot App<br/>FastAPI]

    API[Django Backend<br/>Django REST Framework]
    Auth[Authentication & Permissions]
    Billing[Billing & Business Logic]
    Reports[Reports & Exports]
    Credits[Credit Ledger<br/>₹1 per finalized bill]
    Jobs[Background Jobs<br/>Celery]

    DB[(PostgreSQL)]
    Redis[(Redis)]
    Storage[(File Storage<br/>Invoices, Attachments)]
    Payments[Payment Provider]
    Notifications[Email / SMS / Push]

    Infra[Infrastructure Repository]
    Cloud[Cloud Environment]

    Merchant --> Web
    Merchant --> Mobile
    Merchant --> Chatbot
    Staff --> Web
    Staff --> Mobile

    Web --> API
    Mobile --> API
    Chatbot --> API

    API --> Auth
    API --> Billing
    API --> Reports
    API --> Credits

    Auth --> DB
    Billing --> DB
    Reports --> DB
    Credits --> DB

    Billing --> Jobs
    Jobs --> Redis
    Jobs --> Storage
    Jobs --> Notifications

    Credits --> Payments
    Billing --> Storage

    Infra -. deploys and configures .-> Web
    Infra -. deploys and configures .-> Mobile
    Infra -. deploys and configures .-> API
    Infra -. deploys and configures .-> Chatbot
    Infra -. provisions .-> Cloud
    Cloud --> DB
    Cloud --> Redis
    Cloud --> Storage
```

## Core principle

The web app, mobile app, and chatbot all use the Django backend as the single source of truth:

```text
Web + Mobile + Chatbot
            ↓
     Django API Backend
            ↓
 PostgreSQL + Redis + Storage
```

This ensures that billing, credit deduction, invoice numbering, permissions, and accounting rules work consistently across every channel.
