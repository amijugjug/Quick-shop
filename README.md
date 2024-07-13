Certainly! Here's the complete `README.md` content for your project:


# Quick Shop

Quick Shop is an e-commerce website utilizing products from the Fake Store API. User authentication is managed via the Local Storage API.

**Deployed on:** [Quick Shop Azure](https://quick-shop-azure.vercel.app/)

## Walkthrough

1. **Registration and Login**:
   - Users must register first.
   - Use your username to log in.
   - Upon logging in, you will be redirected to the homepage.

2. **Navigation**:
   - From the homepage, navigate to the Product page, Wishlist, or Orders section.

3. **Product Page**:
   - View product details by clicking on a product.
   - Wishlist or add items to the cart directly from the product card.

4. **Filtering**:
   - Filter items by category, ratings, and price range.

5. **Cart and Orders**:
   - Add items to the cart.
   - Navigate to the Order page via the navbar button.
   - Proceed to purchase a maximum of 5 items at a time.

6. **Checkout**:
   - Checkout via the Stripe payment page.
   - Successful payment redirects to the success page.
   - Failed payment redirects to the failed page.

7. **Dashboard**:
   - Post-purchase, check your dashboard for purchased orders.

## Features

1. Built with React.js and native CSS.
2. Integrated with Stripe for payments.
3. User authentication via Local Storage and Context API.
4. Utilizes custom hooks.
5. Configured with ESLint and Prettier.
6. Implements Shimmer UI during data loading.
7. Optimized core web vitals score.
8. Optimized bundle size.

## Steps to Run

### Prerequisites
- Node.js
- npm
- Free Developer Account on Stripe

### You could use test cards for making payments : [Test cards](https://docs.stripe.com/testing)

### Client Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/amijugjug/quick-shop.git
   cd <repository_directory>/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy .env file from .env.sample and do necessary changes.

4. Start the client:
   ```bash
   npm start
   ```

### Server Setup

1. Navigate to the server directory:
   ```bash
   cd <repository_directory>/server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy .env file from .env.sample and do necessary changes.

4. Start the server:
   ```bash
   npm start
   ```

   
### Note

- Client runs on port 3000.
- Server runs on port 3002.

## Screenshots

### Register Page
![Register Page](https://res.cloudinary.com/sriprakhar2/image/upload/v1720767608/Quick-shop-images/Screenshot_2024-07-12_at_12.29.58_PM_bd7x77.png)

### Login Page
![Login Page](https://res.cloudinary.com/sriprakhar2/image/upload/v1720767615/Quick-shop-images/Screenshot_2024-07-12_at_12.29.45_PM_ygrynv.png)

### Home Page
![Home Page](https://res.cloudinary.com/sriprakhar2/image/upload/v1720766971/Quick-shop-images/Screenshot_2024-07-12_at_11.47.29_AM_j9vkgc.png)

### Product Listing Page
![Product Listing Page](https://res.cloudinary.com/sriprakhar2/image/upload/v1720766971/Quick-shop-images/Screenshot_2024-07-12_at_11.48.40_AM_vmdclp.png)

### Cart Page
![Cart Page](https://res.cloudinary.com/sriprakhar2/image/upload/v1720766970/Quick-shop-images/Screenshot_2024-07-12_at_11.49.00_AM_dcio8f.png)

### Wishlist Page
![Wishlist Page](https://res.cloudinary.com/sriprakhar2/image/upload/v1720766970/Quick-shop-images/Screenshot_2024-07-12_at_11.48.51_AM_upklcp.png)

### Payment Page
![Payment Page](https://res.cloudinary.com/sriprakhar2/image/upload/v1720767038/Quick-shop-images/Screenshot_2024-07-12_at_12.20.29_PM_pmabz4.png)

### User Dashboard
![User Dashboard](https://res.cloudinary.com/sriprakhar2/image/upload/v1720766970/Quick-shop-images/Screenshot_2024-07-12_at_11.49.15_AM_uzfzfz.png)

## Web Vitals Score
![Web Vitals Score](https://res.cloudinary.com/sriprakhar2/image/upload/v1720767102/Quick-shop-images/Screenshot_2024-07-12_at_12.21.33_PM_yaryqx.png)

## Bundle Analyzer
![Bundle Analyzer](https://res.cloudinary.com/sriprakhar2/image/upload/v1720767277/Quick-shop-images/Screenshot_2024-07-12_at_12.24.17_PM_ycq7aa.png)

---

Thanks for using Quick Shop!
```

Replace `<repository_url>` and `<repository_directory>` with the actual URL and directory path of your project repository. This markdown file is ready to be used as your project's `README.md`.