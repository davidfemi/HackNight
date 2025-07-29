# Hack Night Team Showcase

A modern, responsive React website showcasing the talented team members of Hack Night. Built with React, React Router, and modern CSS for a sleek dark theme experience.

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Team Showcase** - Beautiful grid layout displaying all team members
- **Individual Profiles** - Click on any team member to view their detailed profile
- **Modern UI** - Dark theme with smooth animations and hover effects
- **Professional Photos** - High-quality team member photography
- **Skills Display** - Each member's technologies and expertise highlighted
- **Contact Links** - Direct links to GitHub, LinkedIn, email, and more

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd hack-night-team
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section with team description
│   ├── TeamGrid.jsx    # Grid layout for all team members
│   └── TeamCard.jsx    # Individual team member cards
├── pages/              # Main pages
│   ├── Home.jsx        # Home page (Hero + TeamGrid)
│   └── TeamProfile.jsx # Individual team member profiles
├── data/               # Static data
│   └── teamData.js     # Team member information
└── App.jsx             # Main app component with routing
```

## 🎨 Design Features

- **Dark Theme** - Professional black background with white text
- **Smooth Animations** - Hover effects and transitions throughout
- **Typography** - Clean Inter font family for excellent readability
- **Grid Layout** - Responsive CSS Grid for optimal viewing on all devices
- **Image Optimization** - High-quality photos with proper aspect ratios

## 🛠️ Built With

- **React 18** - Modern React with functional components and hooks
- **React Router 6** - Client-side routing for seamless navigation
- **Vite** - Fast build tool and development server
- **CSS3** - Modern CSS with Grid, Flexbox, and animations
- **Unsplash** - High-quality stock photos for team members

## 📝 Customization

### Adding New Team Members

Edit `src/data/teamData.js` and add new team member objects:

```javascript
{
  id: 9,
  name: "Your Name",
  role: "Your Role",
  image: "https://your-image-url.jpg",
  bio: "Your bio description...",
  skills: ["Skill1", "Skill2", "Skill3"],
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  email: "your@email.com"
}
```

### Styling

Each component has its own CSS file for easy customization:
- `Header.css` - Navigation styling
- `Hero.css` - Hero section styling
- `TeamGrid.css` - Team grid layout
- `TeamCard.css` - Individual card styling
- `TeamProfile.css` - Profile page styling

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy Options

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to deploy the build
- **Custom Server**: Upload the `dist` folder contents to your web server

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 567px and below

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Hack Night

Join us every Wednesday night for collaborative coding, learning, and building amazing projects together!

**Contact**: hacknight@example.com
**Location**: Your Local Tech Hub
**Time**: Every Wednesday, 6:00 PM - 8:00 PM 