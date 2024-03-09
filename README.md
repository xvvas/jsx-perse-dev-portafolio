# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Typography Components

This document provides an overview of the Typography components available for use. These components are designed to standardize the typography across your application and include various heading styles, subtitle types, body types, and special types. Each component supports custom class names for further styling flexibility.

## Installation

Ensure you have imported the required PropTypes package and the accompanying CSS file for styles.

```jsx
import PropTypes from 'prop-types';
import "./Type.css";

```

## Heading Types

### TypeH1 - H1 Heading

Renders an `<h1>` element.

**Props:**

- `children: PropTypes.node.isRequired` - The content to be displayed within the `<h1>` tag.
- `className: PropTypes.string` - Optional. Custom class name for additional styling.

**Usage:**

```jsx
<TypeH1 className="your-custom-class">Your Heading</TypeH1>
```

### TypeH2 - H2 Heading

Renders an `<h2>` element. Follows the same props and usage as TypeH1.

### TypeH3 - H3 Heading

Renders an `<h3>` element. Follows the same props and usage as TypeH1.

### TypeH4 - H4 Heading

Renders an `<h4>` element. Follows the same props and usage as TypeH1.

### TypeH5 - H5 Heading

Renders an `<h5>` element. Follows the same props and usage as TypeH1.

### TypeH6 - H6 Heading

Renders an `<h6>` element. Follows the same props and usage as TypeH1.

## Subtitle Types

### TypeSubTitle1 - Subtitle 1

Renders a paragraph (`<p>`) styled as a subtitle.

Follows the same props and usage as TypeH1.

### TypeSubTitle2 - Subtitle 2

Another subtitle variant. Follows the same props and usage as TypeSubTitle1.

## Body Types

### TypeBody1 - Body Text 1

Renders a paragraph (`<p>`) styled for standard body text.

Follows the same props and usage as TypeH1.

### TypeBody2 - Body Text 2

Another body text variant. Follows the same props and usage as TypeBody1.

## Special Types

### TypeButton - Button Text

Renders a paragraph (`<p>`) styled for button text.

Follows the same props and usage as TypeH1.

### TypeCaption - Caption Text

Renders a paragraph (`<p>`) styled as a caption.

Follows the same props and usage as TypeH1.

### TypeOverline - Overline Text

Renders a paragraph (`<p>`) styled as overline text.

Follows the same props and usage as TypeH1.

Each component is designed to be easily integrated into your project, allowing for consistent typography throughout your application. Remember to apply additional styles via the `className` prop as needed to match your design requirements.
