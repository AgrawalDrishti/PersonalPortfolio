# Portfolio Website - Setup Guide

## 🎨 Works Page Customization

### Adding Your Own Projects

1. **Add Project Images**
   - Place your project images in the `public/projects/` folder
   - Recommended size: 800x600px or larger
   - Supported formats: JPG, PNG, WebP

2. **Update Project Data**
   - Edit `src/pages/Works.jsx`
   - Modify the `projects` array with your project details:

```javascript
const projects = [
  {
    id: 1,
    title: 'YOUR PROJECT NAME',
    description: 'Brief description of your project',
    image: '/projects/your-image.jpg', // or use Unsplash URL
    tags: ['Tag1', 'Tag2', 'Tag3'],
    link: 'https://your-project-link.com' // or '#' for no link
  },
  // Add more projects...
];
```

### Project Card Features
- ✨ Hover effects with image zoom
- 📱 Fully responsive design
- 🏷️ Tag system for categorization
- 🔗 Clickable cards linking to live projects

## 🏠 Homepage Customization

### Update Your Details
Edit `src/components/Hero.jsx`:
- **Name**: Change "DRISHTI" to your name
- **Subtitle**: Update your roles/titles
- **Location**: Modify "BASED IN NOIDA"

### Change Background Image
- Replace `public/hero-bg.jpg` with your image
- Or update the CSS in `src/components/Hero.css`:
```css
background-image: url('/your-image.jpg');
```

## 🎯 Navigation

Current pages:
- **Home** (/) - Hero section
- **Works** (/works) - Projects showcase
- **Skills** (/skills) - Coming soon
- **About** (/about) - Coming soon
- **Contact** (/contact) - Coming soon

## 🚀 Running the Project

```bash
npm run dev
```

Visit: `http://localhost:5173/`

## 📂 Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Homepage hero section
│   ├── Logo.jsx          # Top-left logo
│   ├── Navigation.jsx    # Top navigation menu
│   └── ProjectCard.jsx   # Individual project card
├── pages/
│   ├── Home.jsx          # Home page
│   └── Works.jsx         # Projects/Works page
└── App.jsx               # Main app with routing
```

## 💡 Tips

- Use high-quality images for best results
- Keep project descriptions concise (1-2 sentences)
- Use 2-4 tags per project
- Test responsiveness on different screen sizes

