---
title: 'Margin & Padding'
date: 2018-08-28
---

**Shorthand form:**
- &lt;margin/padding&gt;: &lt;value&gt;; (Same value on all 4 sides)
- &lt;margin/padding&gt;: &lt;top & bottom&gt; &lt;left & right&gt;;
- &lt;margin/padding&gt;: &lt;top&gt; &lt;right&gt; &lt;bottom&gt; &lt;left&gt;;
- &lt;margin/padding&gt;: &lt;top&gt; &lt;left & right&gt; &lt;bottom&gt;;

**Longhand form:**
- &lt;margin/padding&gt;-&lt;top/bottom/left/right&gt;: &lt;value&gt;;

Margin & Padding - transparent:
- margin - we see the background color of the parent element
- padding - we see the background color of the element

Margin doesn't affect size of the box, but it affects other content interacting with the box.

| | margin | padding |
|---|---|---|
| **Space** | outside the element | inside the element |
| **background-color/image, click region** | not included | included |
| **Vertical values** | auto collapse<br><br>paragraph of **margin-top: 15px** & **margin-bottom: 20px**. There will only be a **total space of 20px** between the two paragraphs. | doesn't auto collapse<br><br>paragraph of **padding-top: 15px & padding-bottom: 20px**. There will be a **total space of 35px** between the two paragraphs. |
