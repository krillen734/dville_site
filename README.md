# City of Danielsville Website

A static rebuild of the City of Danielsville, GA municipal website.

## Goal

The city's existing site is dated, hard to navigate, and inconsistent in how it presents information. This project rebuilds it with a focus on:

- **Clarity**: clear navigation, consistent layout, and easy-to-find city services (utility billing, meeting schedules, ordinances, contact info).
- **Accessibility**: semantic HTML, skip links, ARIA attributes on interactive elements, and readable structure for assistive technology.
- **Maintainability**: plain HTML/CSS/JS with no build step, so city staff or future contributors can edit pages directly without a framework or toolchain.

## Structure

```
index.html                 Home page
city-council.html          Council meeting schedule
utilities.html             Utility billing & waste collection
ordinances-charter.html    City ordinances & charter (with bulk download)
fees-licensing.html        Fees & business licensing
memorial-gardens.html      Memorial Gardens cemetery info
contact.html               Contact info & map
assets/css/style.css       Shared styles
assets/js/main.js          Shared behavior (nav toggle, dropdown, downloads)
```

## Status

Currently just a showcase of what could be done in the case that city officials would like a new site.
