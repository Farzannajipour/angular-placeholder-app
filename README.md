# Angular placeholder project

This project is built using Angular, Playwright, ngrx, and follows the BEM methodology. It includes unit tests and end-to-end tests. This application uses `https://jsonplaceholder.typicode.com` to fetch data.

The application is deployed and accessible at the following URL:
`https://angular-placeholder-app.vercel.app/`

## Getting Started

## Prerequisites

- Node.js and npm

### Installation

1. Clone the repository: `git clone git@github.com:Farzannajipour/angular-placeholder-app.git`

### Running the Project

To run the project locally, follow these steps:

1. Install the necessary dependencies by running the command: `npm install`
2. Start the development server by running the command: `ng serve`
3. Navigate to `http://localhost:4200/` in your web browser.

### Running Unit Tests

To execute the unit tests for this project, you can use Karma. Run the following command:

```shell
ng test
```

This will run the unit tests and provide you with the test results.

### Running End-to-End Tests

To execute the end-to-end tests for this project, you will need to add a package that implements end-to-end testing capabilities. Once you have added the appropriate package, you can run the following command:

```shell
ng e2e
```

### Continuous Integration with GitHub Actions

This project utilizes GitHub Actions for continuous integration. The workflow configuration can be found in the `.github/workflows` directory.
