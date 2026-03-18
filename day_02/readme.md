# Form (HTML)

A **form** is a container for user input elements. It is used to collect data and submit it to a server (or handle it with JavaScript).

## Basic structure

```html
<form action="/submit" method="post">
    <label for="name">Name</label>
    <input id="name" name="name" type="text" />

    <label for="email">Email</label>
    <input id="email" name="email" type="email" />

    <button type="submit">Submit</button>
</form>
```

## Common input types

- text
- email
- password
- checkbox
- radio
- textarea
- select

## Handling submission

- `action` specifies where data is sent
- `method` is usually `get` or `post`
- JavaScript can handle submit with `event.preventDefault()` and fetch/AJAX