# vueInterview

### Use Node 20.3.0

```sh
pnpm i
```

Run locally

```sh
pnpm i
```

For tests

```sh
npm run test
```

![screen-gif](./demo.gif)

<hr>

**Question 1: Basic Component**

Create a simple Vue component that renders a list of items passed to it as props. The component should also emit an event when any of the list items is clicked.

**Bonus:**
Add basic unit tests for this component using Vue Test Utils

<hr>

**Question 2: Dynamic styles**

Create a Vue component that takes a color as a prop and dynamically sets that color as the background color of the component. Also, if color is too dark, the text inside the component should be white, otherwise it, should be black.

**Bonus:**
Use CSS transitions to smoothly change the color when the prop is updated.

<hr>

**Question 3: Form Handling**

Create a Vue form component with the following fields:

- Name (text input)
- Email (email input)
- Password( password input)
- Bio (textarea)

On form submission, validate the inputs and display an error message next to each invalid field.

**Bonus:** Use Vuelidate for validations and provide real-time feedback as the user types.

<hr>

**Question 4: API Calls**

Create a Vue component that fetches a list of users from a public
API like https://jsonplaceholder.typicode.com/users and displays them in a table. The component should handle loading, error, and success states.

**Bonus:** Implement pagination for the table

<hr>

**Question 5: State Management**

Build a simple Vue application that uses Vuex for state management. The application should have an ability to add and delete items from a list. Each item should have a name and a boolean flag indicating whether it is active or not.

**Bonus:** Add the ability to filter items based on their active status.

<hr>

**Question 6: Routing**

Create a Vue application with Vue Router that has the following pages:

- Home
- About
- Contact

The “About” page should display some text, and the “Contact” page should have a form that allows users to send a message (no backend required).

**Bonus:** Implement nested routes to show additional details on each page.

<hr>

**Evaluation Criteria**

- Code Quality: Clean, readable, and well-organized code that follows Vue.js best practices.
- Functionality: All features should work as described.
- Complexity: Optimal algorithms and techniques should be used.
- Bonus Points: Successfully completing the bonus challenges.
