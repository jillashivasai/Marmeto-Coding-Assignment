# Dynamic Product Cards with Tab Switching

This project implements a dynamic product card layout with tab switching functionality. The data for the products is fetched from an API. The user can switch between different categories (Men, Women, Kids) to display relevant products. 

## Instructions

1. **Tab Switching Layout**:
    - Create tabs for "Men," "Women," and "Kids."
    - Clicking on a tab displays the respective product cards and hides the others.
    - Implement JavaScript to handle the tab switching.

2. **Product Card**:
    - Fetch product data from the provided API.
    - Each product card should display the following data:
        - **Image**: From the product image URL in the API response.
        - **Badge**: Dynamic badge information from the API.
        - **Product Title**: From the API response.
        - **Vendor Name**: From the API response.
        - **Price**: From the API response.
        - **Compare at Price**: From the API response.
        - **Calculated Discount**: Calculate the percentage off using JavaScript.
    - Include an "Add to Cart" button (visual only, no functionality).

3. **Styling**:
    - Use the Inter font family from Google Fonts: [Inter](https://fonts.google.com/specimen/Inter).
    - Ensure the webpage is responsive:
        - Mobile Screen: Up to 767px
        - Tablet Screen: 768px to 1024px
        - Desktop Screen: Above 1025px

4. **Additional Requirements**:
    - Use HTML, CSS, and JavaScript only.
    - Do not use any libraries or frameworks like React, Tailwind, Bootstrap, or jQuery.

## Resources

- **Font Family**: [Inter](https://fonts.google.com/specimen/Inter)
- **Product Data API**: [Product Data](https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json)

## Example Calculations

### Calculating Discount Percentage
To calculate the discount percentage, use the formula:
\[ \text{Discount \%} = \left( \frac{\text{Compare at Price} - \text{Price}}{\text{Compare at Price}} \right) \times 100 \]

### Example
If the price is \$399 and the compare at price is \$499:
\[ \text{Discount \%} = \left( \frac{499 - 399}{499} \right) \times 100 \approx 20.04\% \]

## Important Points

- **No Libraries or Frameworks**: Stick to vanilla HTML, CSS, and JavaScript.
- **Responsiveness**: Ensure the layout works seamlessly across different screen sizes.

## How to Run

1. Clone the repository or download the files.
2. Open `index.html` in a web browser to view the implementation.

