# Udyog Manager launch kit

## Open the materials

- [Product idea document](Udyog-Manager-Idea.html): open in a browser; use Print / Save PDF for a printable copy.
- [13 slide presentation](Udyog-Manager-Presentation.html): open in a browser; use arrow keys or the on-screen buttons. Print / Save PDF prints all slides.
- [Welcome page](dist/index.html): open locally to preview the static website.
- [Product icon](dist/assets/icon.svg): editable SVG, also used as the website favicon.
- [Brand guide](Brand-Guide.md): colours, icon concept and product messaging.

The document and presentation are HTML files, not Word or PowerPoint files. They have no external runtime dependencies. The detailed development specification remains in the parent workspace.

## Hosting your domain

The deployable website is only the contents of `dist`. Keep `index.html`, `style.css` and the `assets` folder together. It needs a static web host and no database, Node installation or build command on that host.

1. Upload the contents of `dist` to your chosen host's public website directory, or select `dist` as its publish directory.
2. Add `udyogmanager.com` in that host's custom-domain settings.
3. Copy the exact A, ALIAS or CNAME records supplied by that host into your domain provider's DNS settings. Do not guess the destination IP or hostname.
4. Preserve existing MX and email-related TXT records. Remove only web records that conflict with the host's instructions.
5. Add `www.udyogmanager.com` if desired and configure a redirect to the primary domain.
6. Enable HTTPS and wait for the host to confirm DNS and certificate activation.
7. Verify the homepage, icon and CSS on mobile and desktop using the real HTTPS domain.

The domain provider and existing hosting have not yet been supplied. No DNS records have been changed by this task. The source is portable even if the optional Sites deployment is not completed. A private Sites preview is not a public customer launch; public access and domain connection need their own confirmed configuration.

## What this page does

It explains the coming-soon product and planned ₹1-per-finalized-bill model. The Resources section provides the 26-page report PDF, 25-slide presentation in browser and PDF formats, idea document, editable specification, icon and brand guide. Document pages link back to the homepage. It does not collect email addresses, accept payments, or pretend to provide the application. Add a real, consent-aware signup service before introducing a waitlist form.

Upload the entire `dist` folder contents, including `resources`, so the documents remain accessible. Run `sync-resources.mjs` after regenerating the source materials to refresh the hosted copies and check their local links.

## Edit the content

Change website text in `dist/index.html` and styles in `dist/style.css`. The icon is in `dist/assets/icon.svg`. The editable idea-document and slide source is in `build-materials.mjs`; the generated HTML files can also be edited directly. Running the builder regenerates both HTML documents.
