# Angular Card Matching Game

This project is a simple card matching game built with Angular. Below are the key concepts and features implemented in this project:

## Components

### `AppComponent` and `CardComponent`
- These are Angular components, defined using the `@Component` decorator.
- Components are the building blocks of an Angular application.

## Data Binding

### `@Input` and `@Output` Decorators
- Used in `CardComponent` for data binding.
- `@Input` allows a parent component to bind properties to a child component.
- `@Output` allows a child component to emit events to a parent component.

## Event Binding

### `(cardClick)` Event Binding
- Used in the `app.component.html` file.
- Listens for the `cardClick` event emitted by the `CardComponent`.

## Structural Directives

### `*ngFor` Directive
- Used in the `app.component.html` file.
- Iterates over the `cards` array and renders an `app-card` component for each card.

## Service

### `cards` Array
- Imported from a separate data file (`cards.data.ts`).
- Acts as a simple service providing data to the component.

## CSS Styling

### Associated CSS Files
- `app.component.css` and `card.component.css` for styling the components.

## Lifecycle Hooks

### `onCardClick` Method
- Implemented in `AppComponent`.
- Handles the logic when a card is clicked.
- Demonstrates how to manage component state and interactions.
