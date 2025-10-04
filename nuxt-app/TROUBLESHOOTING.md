# Troubleshooting Guide

This document explains the root cause of the "Welcome Page" issue and how it was resolved.

## The Problem: Mixed Application Structure

The website was originally built as a single-page application where all the content and logic resided in one large `app.vue` file.

An external tool ("Cursor") attempted to convert this into a modern, multi-page Nuxt application that uses the `pages/` directory for routing. This conversion was incomplete and left the project in a broken state:

1.  **Old `app.vue`:** The original single-page `app.vue` was moved and backed up.
2.  **New `app.vue`:** A new, incorrect `app.vue` was created.
3.  **Incorrect Content:** The actual homepage content was not correctly placed in `pages/index.vue`.
4.  **File Conflicts:** The process created duplicate files and directories (like `app/assets/css`).

Because the `pages/index.vue` was essentially empty and the `app.vue` entry point was misconfigured, Nuxt couldn't find a page to render and defaulted to showing the generic "Welcome to Nuxt" page.

## The Solution: Correctly Implementing the Pages Structure

The fix was to manually complete the migration that the other tool failed to do:

1.  **Set up a proper `app.vue`:** A clean `app.vue` was created that only contains `<NuxtLayout><NuxtPage /></NuxtLayout>`. This acts as the entry point for the router.
2.  **Set up a proper `layouts/default.vue`:** A layout file was created to hold the shared components like the header and footer. The page content is rendered via the `<slot />` component.
3.  **Move Content to `pages/index.vue`:** The actual homepage content was recovered from the backup and placed into `pages/index.vue`.
4.  **Cleanup:** All leftover directories and backup files from the failed migration were deleted.

## How to Avoid This in the Future

- **Understand the Structure:** In a standard Nuxt app, `app.vue` is the main container, `layouts/` contains the site structure (header/footer), and `pages/` contains the actual page content.
- **One Page, One File:** Each distinct page (e.g., `/`, `/about`, `/contact`) should be its own `.vue` file inside the `pages/` directory.
- **Avoid Mixing Structures:** Do not put all of your website's content directly into `app.vue` if you intend to use the `pages/` directory for routing.
