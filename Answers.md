1. What problem does the context API help solve?

    Helps make state management easier by storing the data on a context object which gets rid of the need to pass props down from component to component.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions- an obj with 2 properties, type & payload. Actions get dispatched to the reducer to have it update state based on the action. 
    Reducers- functiosn that take 2 arguments ( current state, action ) and then return a new updated state object based on those arguments.
    Store- The store is a JS object that contains the state for our app. 
    Single source of truth is that it is the store is the only way to change your data.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Component state is stores locally within the component, application state is global. You would want to use application state when you had a bigger app that needed state shared between multiple components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is a middleware that we use to handle asynchronous requests. It intercepts action-creators to make the flow asynchronous and to make API calls.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I like context more so far because I feel like it is easier to wrap my head around and easpuer to implement on the size projects we have been doing in class. 
