---
  title: "UPWARD"
  wordClasses:
    - "noun"
  tags:
    - "design"
    - "magento-software"
    - "programming"
  synonyms:
    - "PWA Studio"
    - "Unified Progressive Web App Response Definition"
  relatedTerms:
    - "pwa"
  readMore:
    - label: UPWARD
      url: https://magento-research.github.io/pwa-studio/technologies/upward/
    - label: Reference Implementation
      url: https://magento-research.github.io/pwa-studio/technologies/upward/reference-implementation/
    - label: Magento PWA Documentation
      url: https://magento-research.github.io/pwa-studio/
    - label: Tools and Libraries
      url: https://magento-research.github.io/pwa-studio/technologies/tools-libraries/
---
PWA Studio uses UPWARD in development. UPWARD is an acronym for Unified Progressive Web App Response Definition. An UPWARD definition file describes how a web server delivers and supports a Progressive Web Application.

UPWARD definition files provide details about server behavior using platform-independent, declarative language. This lets a Progressive Web Application run on top of an UPWARD-compliant server in any language on any tech stack because the application is only concerned about the HTTP endpoint behavior from the UPWARD server.

An UPWARD server uses a definition file to determine the appropriate process or service for a request from an application shell. It describes how the server should handle a request and build the response for it.

A PWA project can include an UPWARD definition file to specify its service dependencies.
