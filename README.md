# إقامة الحرمين (Eqamat Al-Haramain) - Moroccan Hotel Website

A beautiful, responsive static website for a Moroccan hotel showcasing 9 apartments with authentic hospitality.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Bilingual Support**: Arabic and English language switching
- **Modern UI**: Clean, professional design with Moroccan-inspired color scheme
- **Interactive Gallery**: Photo gallery with filtering and lightbox functionality
- **Contact Integration**: WhatsApp and phone contact options
- **Google Maps Ready**: Placeholder for easy Google Maps integration
- **SEO Optimized**: Semantic HTML and meta tags for better search visibility

## 📁 File Structure

```
cursor-eqamat-alharamain/
├── index.html          # Homepage
├── rooms.html          # Rooms/Apartments page
├── gallery.html        # Photo gallery
├── contact.html        # Contact information and form
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Open `index.html`** in your web browser to view the website
3. **Customize** the content as needed (see customization guide below)
4. **Deploy** to your preferred hosting service

## 🎨 Customization Guide

### 1. Hotel Information

**Update in all HTML files:**
- Hotel name: "إقامة الحرمين" / "Eqamat Al-Haramain"
- Phone number: Replace `+212 XXX XXX XXX` with actual number
- WhatsApp number: Replace `212XXXXXXXXX` with actual number
- Address: Replace placeholder with actual hotel address

### 2. Colors and Styling

**Edit `style.css` - Color Variables:**
```css
:root {
    --primary-color: #8B4513;    /* Main brown color */
    --secondary-color: #D2691E;  /* Chocolate brown */
    --accent-color: #FFD700;     /* Gold accent */
    --warm-beige: #F5F5DC;       /* Warm background */
    --deep-brown: #654321;       /* Dark brown */
    --light-cream: #FFF8DC;      /* Light background */
}
```

### 3. Adding Real Images

**Replace placeholder images:**
1. Add your images to the project folder
2. Replace `<div class="placeholder-image">` elements with:
```html
<img src="path/to/your/image.jpg" alt="Description" loading="lazy">
```

### 4. Google Maps Integration

**In `contact.html`, replace the map placeholder:**
1. Go to Google Maps
2. Find your hotel location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the `<div class="map-placeholder">` section

### 5. WhatsApp Integration

**Update WhatsApp links:**
- Replace `212XXXXXXXXX` with your actual WhatsApp number
- Customize the default message in the contact page

### 6. Content Updates

**Key sections to customize:**
- Hotel description on homepage
- Room details and amenities
- Gallery photos and descriptions
- Contact information
- Business hours

## 🌐 Language Support

The website supports Arabic and English with automatic RTL (right-to-left) layout switching.

**To add French support:**
1. Add `data-fr` attributes to translatable elements
2. Update the language switching function in `script.js`
3. Add French translations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🚀 Deployment

### Netlify Deployment
1. Push code to GitHub repository
2. Connect repository to Netlify
3. Deploy automatically

### Vercel Deployment
1. Push code to GitHub repository
2. Import project to Vercel
3. Deploy automatically

### Manual Deployment
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Test all functionality

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome**: Icons
- **Google Fonts**: Amiri (Arabic) and Inter (English)

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features
- Lazy loading for images
- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast loading times

## 📞 Contact Integration

### WhatsApp Setup
1. Update the phone number in contact links
2. Customize the default message
3. Test the link on mobile devices

### Phone Integration
1. Add your actual phone number
2. Test click-to-call functionality
3. Ensure proper formatting for international calls

## 🖼️ Gallery Features

### Photo Management
- **Categories**: Rooms, Exterior, Interior, Amenities
- **Lightbox**: Full-screen image viewing
- **Filtering**: Category-based filtering
- **Responsive**: Optimized for all screen sizes

### Adding Photos
1. Add images to your project
2. Update gallery items with real photos
3. Add proper descriptions and categories
4. Test lightbox functionality

## 📝 Form Handling

The contact form includes:
- **Validation**: Required field checking
- **Success Messages**: User feedback
- **Responsive Design**: Works on all devices
- **Accessibility**: Proper labels and structure

**Note**: The form currently shows a success message. For actual form submission, you'll need to:
1. Set up a backend service (Netlify Forms, Formspree, etc.)
2. Update the form action and method
3. Handle form data processing

## 🎯 SEO Optimization

### Meta Tags
- Title tags for each page
- Meta descriptions
- Open Graph tags (can be added)
- Language attributes

### Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Descriptive link text
- Structured data (can be added)

## 🔒 Security Considerations

- No sensitive data in client-side code
- HTTPS recommended for production
- Input validation on forms
- XSS protection through proper escaping

## 📈 Analytics (Optional)

To add Google Analytics:
1. Get your tracking ID
2. Add the Google Analytics script to `<head>` section
3. Test tracking functionality

## 🤝 Contributing

This is a static website template. Feel free to:
- Customize for your own hotel
- Improve the design
- Add new features
- Fix any issues

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For questions or issues:
1. Check the customization guide above
2. Review the code comments
3. Test in different browsers
4. Validate HTML and CSS

---

**Built with ❤️ for Moroccan hospitality**

*إقامة الحرمين - الضيافة المغربية التقليدية* 