---
title: 'Selectors'
date: 2018-08-27
---

# Common
- Type selector
- Class selector (.)
- ID selector (#)

# Complex
- Child selector

  - **Descendant** selector

    ```css
    article p {...}
    ```

    ```html
    <p>...</p>
    <article>
      <p>This will be styled</p>
      <div>
        <p>This will also be styled</p>
      </div>
    </article>
    ```

  - **Direct child** selector (>)

    ```css
    article > p {...}
    ```

    ```html
    <p>...</p>
    <article>
      <p>This will be styled</p>
      <div>
        <p>...</p>
      </div>
    </article>
    ```

- Sibling selector

  - **General Sibling** selector (~)

    ```css
    h2 ~ p {...}
    ```

    ```html
    <p>...</p>
    <section>
      <p>...</p>
      <h2>...</h2>
      <p>This will be styled</p>
      <div>
        <p>...</p>
      </div>
      <p>This will also be styled</p>
    </section>
    ```

  - **Adjacent Sibling** selector (+)

    ```css
    h2 + p {...}
    ```

    ```html
    <p>...</p>
    <section>
      <p>...</p>
      <h2>...</h2>
      <p>This will be styled</p>
      <div>
        <p>...</p>
      </div>
      <p>...</p>
    </section>
    ```

- Attribute selector

  - Attribute **present** selector ([])

    ```css
    a[target] {...}
    ```

    ```html
    <a href="#" target="_blank">This will be styled</a>
    <a href="http://google.com/">...</a>
    <a href="/login.php">...</a>
    <a href="https://chase.com">...</a>
    <a href="/docs/menu.pdf">...</a>
    <a href="#" rel="tag nofollow">...</a>
    <a href="#" rel="nofollow tag">...</a>
    <a href="#" lang="en-US">...</a>
    <a href="#" lang="US-en">...</a>
    ```

  - Attribute **equals** selector ([=""])

    ```css
    a[href="http://google.com/"] {...}
    ```

    ```html
    <a href="#" target="_blank">...</a>
    <a href="http://google.com/">This will be styled</a>
    <a href="/login.php">...</a>
    <a href="https://chase.com">...</a>
    <a href="/docs/menu.pdf">...</a>
    <a href="#" rel="tag nofollow">...</a>
    <a href="#" rel="nofollow tag">...</a>
    <a href="#" lang="en-US">...</a>
    <a href="#" lang="US-en">...</a>
    ```

  - Attribute **contains** selector ([*=""])

    ```css
    a[href*="login"] {...}
    ```

    ```html
    <a href="#" target="_blank">...</a>
    <a href="http://google.com/">...</a>
    <a href="/login.php">This will be styled</a>
    <a href="https://chase.com">...</a>
    <a href="/docs/menu.pdf">...</a>
    <a href="#" rel="tag nofollow">...</a>
    <a href="#" rel="nofollow tag">...</a>
    <a href="#" lang="en-US">...</a>
    <a href="#" lang="US-en">...</a>
    ```

  - Attribute **begins with** selector ([^=""])

    ```css
    a[href^="https://"] {...}
    ```

    ```html
    <a href="#" target="_blank">...</a>
    <a href="http://google.com/">...</a>
    <a href="/login.php">...</a>
    <a href="https://chase.com">This will be styled</a>
    <a href="/docs/menu.pdf">...</a>
    <a href="#" rel="tag nofollow">...</a>
    <a href="#" rel="nofollow tag">...</a>
    <a href="#" lang="en-US">...</a>
    <a href="#" lang="US-en">...</a>
    ```

  - Attribute **ends with** selector ([$=""])

    ```css
    a[href$=".pdf"] {...}
    ```

    ```html
    <a href="#" target="_blank">...</a>
    <a href="http://google.com/">...</a>
    <a href="/login.php">...</a>
    <a href="https://chase.com">...</a>
    <a href="/docs/menu.pdf">This will be styled</a>
    <a href="#" rel="tag nofollow">...</a>
    <a href="#" rel="nofollow tag">...</a>
    <a href="#" lang="en-US">...</a>
    <a href="#" lang="US-en">...</a>
    ```

  - Attribute **spaced** selector ([~=""])

    ```css
    a[rel~="tag"] {...}
    ```

    ```html
    <a href="#" target="_blank">...</a>
    <a href="http://google.com/">...</a>
    <a href="/login.php">...</a>
    <a href="https://chase.com">...</a>
    <a href="/docs/menu.pdf">...</a>
    <a href="#" rel="tag nofollow">This will be styled</a>
    <a href="#" rel="nofollow tag">This will also be styled</a>
    <a href="#" lang="en-US">...</a>
    <a href="#" lang="US-en">...</a>
    ```

  - Attribute **hypenated** selector ([\|=""])

    ```css
    a[lang|="en"] {...}
    ```

    ```html
    <a href="#" target="_blank">...</a>
    <a href="http://google.com/">...</a>
    <a href="/login.php">...</a>
    <a href="https://chase.com">...</a>
    <a href="/docs/menu.pdf">...</a>
    <a href="#" rel="tag nofollow">...</a>
    <a href="#" rel="nofollow tag">...</a>
    <a href="#" lang="en-US">This will be styled</a>
    <a href="#" lang="US-en">...</a>  <!-- Will not be styled -->
    ```

- Pseudo-classes (:)
  - **Link** Pseudo-classes
  - **User Action** Pseudo-classes
  - **User Interface State** Pseudo-classes
  - **Structure and Position** Pseudo-classes
  - **Target** Pseudo-classes
  - **Empty** Pseudo-classes
  - **Negation** Pseudo-classes
- Pseudo-elements (::)
  - **Textual** Pseudo-elements
  - **Generated content** Pseudo-elements
  - **Fragment** Pseudo-elements
