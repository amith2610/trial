# Personal Portfolio Website

A modern, responsive portfolio website built with React and Material-UI.

## Features

- Responsive design that works on all devices
- Dark mode theme
- Smooth scrolling navigation
- Sections for Experience, Skills, Education, Projects, and Contact
- Contact form
- Social media links

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:
```
REACT_APP_EMAIL_SERVICE_ID=your_email_service_id
REACT_APP_EMAIL_TEMPLATE_ID=your_email_template_id
REACT_APP_EMAIL_USER_ID=your_email_user_id
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

## Customization

1. Update personal information in the components:
   - `Hero.js`: Update name and title
   - `Experience.js`: Add your work experience
   - `Skills.js`: Update your skills
   - `Education.js`: Add your education details
   - `Projects.js`: Add your projects
   - `Contact.js`: Update contact information and social media links

2. Customize the theme in `App.js`:
   - Update colors in the theme object
   - Modify typography settings
   - Adjust spacing and layout

## Deployment

1. Build the project:
```bash
npm run build
# or
yarn build
```

2. Deploy the `build` folder to your preferred hosting service (GitHub Pages, Netlify, Vercel, etc.)

## License

MIT License - feel free to use this template for your own portfolio!

## Acknowledgments

- Inspired by [Hruday Tej's Portfolio](https://hruday-tej.github.io/)
- Built with [React](https://reactjs.org/)
- Styled with [Material-UI](https://mui.com/) 