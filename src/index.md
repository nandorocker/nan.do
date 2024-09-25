---
title: "Hello World"
layout: "base.njk"
---

This is a home page.

## From the blog

{% for post in collections.post | randomPost %}

<a href="{{ post.url }}">{{ post.data.title }}</a>

{% endfor %}