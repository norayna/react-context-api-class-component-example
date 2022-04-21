# Simple example of React with Context API and class components

The component tree is as follows:

- `App` **(context provider)**
  - `Navbar`
    - `Menu` (just a dummy, doesn't actually work)
    - `LoginInfo` **(context consumer)**
  - `Main`
    - `Greeting` **(context consumer)**
    - `MainText`

The context `UserContext` is used to share the current user as a simple string.

To run, simply use the command `npm start`.