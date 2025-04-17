# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Project Overview

A retailer offers a rewards program where customers earn points for their purchases:

1 point for every dollar spent between $50 and $100.

2 points for every dollar spent over $100.

For example:
If a customer makes a purchase worth $120:
2x($20) + 1x($50) = 90 Points.

This project fetches transaction records asynchronously for a 3-month period and calculates monthly + total reward points for each customer. The user can filter the data by customer, month, and year.

## Tech Stack

Tech                  | Purpose
React JS (JavaScript) | Frontend framework
Styled Components     | For scoped component-level styling
Vitest or Jest        | Testing (unit test cases)
React PropTypes       | Prop validation

## Project Features

Fetch transaction data via a simulated API call.

Loading and Error state handling.

Filters for:

Recent 3 Months based on customer Id Selection (default).

Year Dropdown (default 2025).

Rewards calculation logic.

Pagination support for large data.

Transaction table with points breakdown.

Dynamic rendering (No hardcoded static data).

Component-based folder structure.

Code splitting for better performance.

Styled Components for CSS.

PropTypes validation.

## UI Flow

1. Customer Selection

Displays all customers by default.

On selecting a customer: shows monthly rewards.

2. Month & Year Filter

Default shows last 3 months of 2025.

User can adjust month/year — updates dynamically.

3. Transaction Table

Displays filtered transactions with reward points.

Pagination for smooth navigation.

## Key Concepts Demonstrated


React component-based development.

Simulated async data fetching (mock API).

Error and Loading UI handling.

Reward Points calculation.

Styled Components for modular CSS.

PropTypes to validate component props.

Pagination handling for large datasets.

Code Splitting for optimization.

## Screenshots

 Application UI
(Attach a screenshot of the customer selection page, rewards summary, and transaction details table here)

 Test Results
(Attach screenshot of successful test cases running in console or Vitest UI)

