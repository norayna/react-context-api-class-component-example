# Simple example of React with Context API and class components

![image](https://user-images.githubusercontent.com/25844355/164505221-26fde4bd-7333-4287-a86a-29e2595b5bb2.png)


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
