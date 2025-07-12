# إقامة الحرمين (Iqamat Al-Haramain) - Moroccan Hotel Website

A beautiful, responsive static website for a Moroccan hotel in Zaio, showcasing 9 comfortable apartments with authentic hospitality.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Bilingual Support**: Arabic and English language switching with RTL support
- **Modern UI**: Clean, professional design with Moroccan-inspired color scheme
- **Contact Integration**: WhatsApp and phone contact options
- **Google Maps Integration**: Direct link to hotel location
- **SEO Optimized**: Semantic HTML and meta tags for better search visibility

## 📁 File Structure

```
cursor-eqamat-alharamain/
├── index.html          # Homepage with hero section and features
├── rooms.html          # Rooms/Apartments page
├── contact.html        # Contact information and form
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
├── images/             # Image assets for apartments
│   ├── apartment1/     # Images for apartment 1
│   ├── apartment2/     # Images for apartment 2
│   ├── apartment3/     # Images for apartment 3
│   ├── apartment4/     # Images for apartment 4
│   ├── apartment5/     # Images for apartment 5
│   ├── apartment6/     # Images for apartment 6
│   ├── apartment7/     # Images for apartment 7
│   ├── apartment8/     # Images for apartment 8
│   └── apartment9/     # Images for apartment 9
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
- Hotel name: "إقامة الحرمين" / "Iqamat Al-Haramain"
- Phone number: `+212670959747` (already set)
- WhatsApp number: `212670959747` (already set)
- Location: Zaio, Morocco
- Google Maps link: `https://www.google.com/maps/place/34.9436487,-2.7526318`

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
1. Add your general room photos to the `images/` folder (you can organize them by category like `bedrooms/`, `living-rooms/`, `kitchens/`, etc.)
2. Replace placeholder elements with actual images:
```html
<img src="images/bedrooms/bedroom1.jpg" alt="Comfortable Bedroom" loading="lazy">
```

**Image Categories to Consider:**
- Bedrooms (different styles and sizes)
- Living rooms and common areas
- Kitchens and dining areas
- Bathrooms
- Exterior views and building
- Amenities (WiFi, AC, etc.)

### 4. Content Updates

**Key sections to customize:**
- Hotel description on homepage
- Room details and amenities in `rooms.html`
- Contact information in `contact.html`
- Business hours and policies

## 🌐 Language Support

The website supports Arabic and English with automatic RTL (right-to-left) layout switching.

**Language switching functionality:**
- Toggle button in the navigation
- Automatic text direction switching
- Preserved user preference

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
- **JavaScript**: Vanilla JS for interactivity and language switching
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
- Phone number: `+212670959747`
- WhatsApp link: `https://wa.me/212670959747`
- Direct messaging integration

### Phone Integration
- Click-to-call functionality
- International number formatting
- 24/7 availability mentioned

## 🏨 Hotel Features

### Apartment Information
- **9 Comfortable Apartments** in the center of Zaio
- **Central Location** for easy access
- **Affordable Prices** for budget-conscious travelers
- **Free WiFi** included
- **Air Conditioning** for comfort
- **Family Friendly** accommodations
- **24/7 Contact Availability** for support

### Amenities
- Modern amenities for pleasant stays
- Welcoming atmosphere
- Suitable for business and leisure travelers

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
- Language attributes
- Viewport settings

### Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Descriptive link text
- Structured content

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