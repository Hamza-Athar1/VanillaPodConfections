# 🍰 VanillaPod Confections

A modern, responsive e-commerce website for premium vanilla confections built with React and integrated with WordPress/WooCommerce backend.

## 🌟 Features

### Frontend

- **Modern React Architecture** - Built with Vite for fast development and optimized production builds
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Smooth Animations** - Custom CSS animations for enhanced user experience
- **SEO Optimized** - Meta tags, structured data, and semantic HTML
- **Global Cart Management** - Context-based cart state with localStorage persistence

### E-commerce Integration

- **WordPress/WooCommerce Backend** - Full integration with existing WordPress site
- **Real-time Product Loading** - Dynamic product fetching from WordPress REST API
- **Secure Checkout** - Order processing through WooCommerce API
- **Invoice Generation** - Automatic invoice creation via WordPress backend

### Pages & Functionality

- **Home Page** - Hero section with featured products and company story
- **Products Catalog** - Filterable product grid with category navigation
- **Shopping Cart** - Full cart management with quantity controls and pricing
- **Checkout System** - Customer information collection and order processing
- **Workshop Booking** - Interactive workshop selection and booking system
- **Contact Forms** - Email-based contact and inquiry system
- **About Page** - Company information and values

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Backend Integration:** WordPress REST API & WooCommerce API
- **Deployment:** Static hosting ready

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Hamza-Athar1/VanillaPodConfections.git
   cd VanillaPodConfections
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   # WordPress/WooCommerce API Configuration
   VITE_WORDPRESS_SITE_URL=https://your-wordpress-site.com
   VITE_WOOCOMMERCE_CONSUMER_KEY=your_consumer_key_here
   VITE_WOOCOMMERCE_CONSUMER_SECRET=your_consumer_secret_here

   # Custom endpoint (optional fallback)
   VITE_CUSTOM_ORDER_ENDPOINT=https://your-wordpress-site.com/wp-json/vpc/v1/orders
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
pnpm build
```

### Preview Production Build

```bash
npm run preview
# or
pnpm preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer.jsx      # Site footer
│   ├── Navbar.jsx      # Navigation bar
│   └── SEO.jsx         # SEO meta tags component
├── pages/              # Route components
│   ├── Home.jsx        # Homepage
│   ├── Products.jsx    # Product catalog
│   ├── Cart.jsx        # Shopping cart
│   ├── About.jsx       # About page
│   ├── Contact.jsx     # Contact form
│   └── Workshop.jsx    # Workshop booking
├── context/            # React Context providers
│   └── CartContext.jsx # Global cart state management
├── utils/              # Utility functions
│   ├── GetProducts.js  # WordPress API integration
│   ├── OrderAPI.js     # WooCommerce order processing
│   └── ContactAPI.js   # Contact form handling
├── assets/             # Static assets
├── App.jsx             # Main app component
├── main.jsx           # App entry point
├── routes.jsx         # Route configuration
├── index.css          # Global styles
└── animations.css     # Custom animations
```

## 🎨 Design Features

- **Color Scheme:** Warm vanilla-inspired palette (pinks, oranges, creams)
- **Typography:** Lobster font for headings, clean sans-serif for body
- **Animations:** Smooth hover effects, loading states, and page transitions
- **Icons:** Emoji-based icons for playful, modern aesthetic
- **Layout:** Grid-based responsive design with mobile-first approach

## 🛒 E-commerce Features

### Cart Management

- Add/remove items from cart
- Quantity adjustment controls
- Price calculations (subtotal, tax, shipping)
- Persistent cart across page reloads
- Free shipping on orders over $50

### Checkout Process

1. Customer information collection
2. Order summary with pricing breakdown
3. Order submission to WooCommerce
4. Real-time order status feedback
5. Automatic cart clearing on success

### Product Integration

- Dynamic loading from WordPress
- Category-based filtering
- Fallback products for development
- Image optimization and lazy loading

## 📧 Contact & Booking Systems

### Contact Forms

- General inquiries via mailto integration
- Workshop booking system
- Custom confection requests
- Responsive form validation

### Workshop Features

- 6 different workshop types
- Interactive booking modal
- Email-based booking confirmations
- Detailed workshop descriptions

## 🔧 Configuration

### WordPress Integration

Ensure your WordPress site has:

- WooCommerce plugin installed
- REST API enabled
- Custom VPC endpoints (if using custom order processing)
- CORS configured for your domain

### Environment Variables

All sensitive data is managed through environment variables:

- API keys and secrets
- WordPress site URLs
- Custom endpoint configurations

## 🐛 Troubleshooting

### Common Issues

1. **Products not loading**

   - Check WordPress REST API is accessible
   - Verify CORS settings
   - Confirm API endpoints are correct

2. **Checkout not working**

   - Validate WooCommerce API credentials
   - Check environment variable names (must start with `VITE_`)
   - Ensure WooCommerce is properly configured

3. **Cart not persisting**
   - Check localStorage permissions
   - Verify CartContext is properly wrapped around app

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@vanillapodconfections.com or create an issue in the GitHub repository.

## 🎯 Future Enhancements

- [ ] User authentication system
- [ ] Order history and tracking
- [ ] Product reviews and ratings
- [ ] Advanced filtering options
- [ ] Wishlist functionality
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Email automation
- [ ] Inventory management
- [ ] Multi-language support

---

**Made with ❤️ for vanilla lovers everywhere**

_VanillaPod Confections - Where every bite tells a story_
