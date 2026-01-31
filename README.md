# Synadentix Landing Page - HTML/CSS/JS Version

A modern, high-converting promotional landing page for Synadentix dental health product, built with pure HTML, CSS, and JavaScript.

## 📁 File Structure

```
/
├── index.html                    # Main HTML file
├── styles.css                    # All CSS styles
├── script.js                     # JavaScript functionality
├── image-extraction-guide.html   # Helper page to download images
└── README.md                     # Documentation
```

## 🚀 Quick Start

### Option 1: Use with Placeholder Images (Test Immediately)
1. **Open `index.html`** in your browser
2. Ingredient images will load from Unsplash automatically
3. Product/bonus images will show as broken until you add them

### Option 2: Download Your Product Images
1. **Open `image-extraction-guide.html`** in your browser
2. Download the placeholder images for product and bonus sections
3. Replace placeholders with your actual product photos
4. **Open `index.html`** - all images will now display!

## 🖼️ Images Status

### ✅ Working Out of the Box:
- **Ingredient Images (10)** - Load automatically from Unsplash URLs

### ⚠️ Need to Add:
Download these from `image-extraction-guide.html` or add your own:

**Product Images:**
- `hero-product.png` - Main product image for hero section
- `pricing-2-bottles.png` - 2 bottles package image
- `pricing-3-bottles.png` - 3 bottles package image  
- `pricing-6-bottles.png` - 6 bottles bundle with bonuses image

**Bonus Images:**
- `bonus-1.png` - "Red Carpet Breath" ebook cover
- `bonus-2.png` - "Fix Mouth Breathing" guide cover
- `bonus-3.png` - "The Sculpted Smile Ritual" guide cover

## ✨ Features

### Sections Included:
- ✅ Sticky header with smooth-scrolling navigation
- ✅ Hero section with product image
- ✅ Ingredients showcase (10 ingredients in grid layout)
- ✅ FREE bonuses section (3 bonus cards)
- ✅ Pricing bundles (Basic, Best Value, Most Popular)
- ✅ Demo order form with success message
- ✅ FAQ accordion
- ✅ Final CTA section
- ✅ Footer with disclaimers

### Functionality:
- ✅ Smooth scrolling navigation
- ✅ Interactive accordion FAQ
- ✅ Form submission with success message
- ✅ Auto-redirect to checkout URL
- ✅ All CTAs redirect to: `https://thesynadentix.com/text.php`
- ✅ Fully responsive design

## 🎨 Design Features

- Clean teal/green color scheme (#0d9488)
- Premium, trustworthy design
- Optimized for conversions
- Mobile-responsive layout
- Smooth animations and transitions
- Professional typography

## 🔧 Customization

### Update Order URL
Edit the `ORDER_URL` constant in `script.js`:
```javascript
const ORDER_URL = 'https://thesynadentix.com/text.php';
```

### Update Colors
Edit the teal color values in `styles.css`:
```css
/* Primary teal color */
color: #0d9488;
background: #0d9488;
```

### Update Text Content
Edit the HTML content directly in `index.html`

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- All images should be optimized for web (recommended max 500KB per image)
- For best results, use PNG format for product/bonus images
- For ingredient images, JPG format is recommended
- Ensure all image filenames match exactly as listed above

## 🔒 Security

- Form uses HTML5 validation
- External redirects to secure checkout page
- No sensitive data stored in JavaScript

## 📄 License

This landing page is created for Synadentix promotional purposes.

---

**Need help?** All functionality is contained in three simple files - no complex build process required!