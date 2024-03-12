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
import PropTypes from "prop-types";
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

#### Style

```css
.typeH1 {
	font-size: clamp(4rem, 4vw + 3rem, 6.188rem);;
	font-family: Rubik;
	font-weight: 300;
	font-style: normal;
	letter-spacing: -1.5px;
	text-decoration: none;
	text-transform: none;
}
```

##### Properties

- **Font Size**: Utilizes a `clamp` function for a responsive font size that adjusts between a minimum of `4rem` and a maximum of `6.188rem`, with a dynamic size based on 4vw plus 3rem in the middle. This ensures readability across various display sizes.

- **Font Family**: Set to `Rubik`, a sans-serif typeface known for its clean lines and modern feel, suitable for titles and headings.

- **Font Weight**: The weight is set to `300`, making it lighter than the default font weight. This choice enhances the visual hierarchy by providing a subtler tone compared to bolder weights.

- **Font Style**: Maintains a `normal` font style, implying that the text is not italicized.

- **Letter Spacing**: Adjusted to `-1.5px`, slightly tightening the space between letters. This minor adjustment can enhance readability and visual appeal at larger sizes.

- **Text Decoration**: Specifies `none`, meaning no underline, overline, or line-through effects are applied, keeping the text clean and unobstructed.

- **Text Transform**: Set to `none`, ensuring the text appears exactly as typed, without automatic transformation into uppercase, lowercase, or capitalized forms.

**Usage:**

To apply this style, add the `.typeH1` class to an HTML element. Here's an example with an `<h1>` tag:

```html
<h1 class="typeH1">Your Title Here</h1>
```

### TypeH2 - H2 Heading

Renders an `<h2>` element. Follows the same props and usage as TypeH1.

#### Style

```css
.typeH2 {
	font-size: clamp(3.063rem, 2vw + 2.5rem, 3.875rem);;
	font-family: Rubik;
	font-weight: 300;
	font-style: normal;
	letter-spacing: -0.5px;
	text-decoration: none;
	text-transform: none;
}
```

##### Properties

- **Font Size**: Employs a `clamp` function to achieve a responsive font size that scales between a minimum of `3.063rem` and a maximum of `3.875rem`, with a variable size based on `2vw + 2.5rem`. This responsive behavior ensures the text maintains an optimal size across different screen resolutions.

- **Font Family**: Uses `Rubik`, which is a modern, sans-serif typeface. The choice of Rubik as the font family contributes to a clean and contemporary look, making it suitable for headings and display text.

- **Font Weight**: Set to `300`, providing a light appearance. This choice helps to differentiate the text's visual importance relative to heavier weighted text, supporting a structured visual hierarchy.

- **Font Style**: Defined as `normal`, indicating that the text is displayed without any italicization. This maintains a straightforward and clear textual presentation.

- **Letter Spacing**: Adjusted to `-0.5px`, which slightly reduces the space between characters. This subtle tightening can improve the legibility and compactness of the text at larger sizes.

- **Text Decoration**: Specifies `none`, ensuring that the text is free from underlines, overlines, or strike-throughs, which keeps the focus on the text's content and typographic presentation.

- **Text Transform**: Set to `none` to display the text exactly as it is input, without automatic conversion to uppercase, lowercase, or capitalized forms.

**Usage:**

To apply the `.typeH2` styling, simply add the class to the desired HTML element. Below is an example using an `<h2>` tag:

```html
<h2 class="typeH2">Secondary Title Here</h2>
```


### TypeH3 - H3 Heading

Renders an `<h3>` element. Follows the same props and usage as TypeH1.

#### Style

```css
.typeH3 {
	font-size: clamp(2.188rem, 2vw + 1.75rem, 3.063rem);;
	font-family: Rubik;
	font-weight: 400;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
```

##### Properties

- **Font Size**: Uses a `clamp` function for responsive font sizing, allowing the font size to adjust between a minimum of `2.188rem` and a maximum of `3.063rem`, with a dynamic middle value of `2vw + 1.75rem`. This ensures that the text scales appropriately across different screen sizes for optimal legibility.

- **Font Family**: Set to `Rubik`, a sans-serif typeface known for its geometric shapes and friendly appearance, which adds a modern touch to the text.

- **Font Weight**: Increased to `400`, providing a default or "normal" weight. This adjustment contrasts with lighter weights used in other heading styles, offering a balanced hierarchy that distinguishes between heading levels.

- **Font Style**: Maintains a `normal` style, meaning the text is not italicized. This choice keeps the text straightforward and focused on legibility.

- **Text Decoration**: `None`, ensuring that the text lacks additional decorations like underlining, overlining, or strike-throughs. This clean approach focuses attention on the content itself.

- **Text Transform**: Also set to `none`, allowing the text to display in its original case without automatic alterations to uppercase, lowercase, or capitalized styles.

**Usage:**

Applying the `.typeH3` style to an element is straightforward. Below is an example with an `<h3>` tag:

```html
<h3 class="typeH3">Tertiary Heading</h3>
```

### TypeH4 - H4 Heading

Renders an `<h4>` element. Follows the same props and usage as TypeH1.

#### Style

```css
.typeH4 {
	font-size: clamp(1.563rem, 2vw + 1rem, 2.188rem);;
	font-family: Rubik;
	font-weight: 400;
	font-style: normal;
	letter-spacing: 0.25px;
	text-decoration: none;
	text-transform: none;
}
```

##### Properties

- **Font Size**: Features a `clamp` function for adaptable font size, ranging from a minimum of `1.563rem` to a maximum of `2.188rem`, with an intermediate scaling value of `2vw + 1rem`. This responsive sizing ensures the text remains legible and proportionally balanced across different screen sizes.

- **Font Family**: Assigned to `Rubik`, a contemporary, sans-serif typeface characterized by its geometric form and friendly appearance, contributing to a modern and clean look for the text.

- **Font Weight**: The weight is kept at `400`, which is the standard or "normal" weight, signifying a moderate emphasis that fits well within a hierarchical structure of heading levels.

- **Font Style**: Set as `normal`, indicating that the text is presented without italics, maintaining clarity and straightforwardness in its appearance.

- **Letter Spacing**: Adjusted by `0.25px`, adding a slight expansion between characters. This minor increase in spacing can enhance readability and the overall visual appeal of the text.

- **Text Decoration**: Specified as `none`, meaning the text does not feature underlines, overlines, or strike-throughs, allowing the content's natural style to stand out without additional embellishments.

- **Text Transform**: Also set to `none`, preserving the original text case without automatic adjustments to uppercase, lowercase, or capitalized styles.


**Usage:**

To apply the `.typeH4` styling, add the class to your desired HTML element as shown in the example below:

```html
<h4 class="typeH4">Quaternary Heading</h4>
```

### TypeH5 - H5 Heading

Renders an `<h5>` element. Follows the same props and usage as TypeH1.

#### Style

```css
.typeH5 {
	font-size: clamp(1.313rem, 2vw + 0.25rem, 1.563rem);
	font-family: Rubik;
	font-weight: 400;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
```

##### Properties

- **Font Size**: Utilizes a `clamp` function for adaptive font sizing, adjusting between a minimum of `1.313rem` and a maximum of `1.563rem`, with a flexible middle value of `2vw + 0.25rem`. This responsiveness ensures that the font size scales appropriately across different screen sizes, maintaining readability and visual impact.

- **Font Family**: Set to `Rubik`, a contemporary sans-serif typeface known for its geometric forms and friendly appearance. Rubik enhances the text's readability and aesthetic appeal, making it an excellent choice for headings and body text alike.

- **Font Weight**: Maintains a `400` weight, indicating a normal or regular style. This font weight strikes a balance between too light and too bold, facilitating ease of reading and a clean appearance.

- **Font Style**: Specified as `normal`, ensuring that the text is displayed in a standard, upright position without any italicization. This standard presentation aids in readability and maintains a professional appearance.

- **Text Decoration**: Set to `none`, which means that the text will not have any underlines, overlines, or strike-throughs. This clean styling avoids visual clutter and keeps the focus on the text content.

- **Text Transform**: Also set to `none`, allowing the text to appear exactly as it is typed without automatic conversion to uppercase, lowercase, or capitalized forms. This property respects the original text formatting and ensures consistent presentation.


**Usage:**

To apply the `.typeH5` styling to an element, simply include the class in your HTML element. Here is an example using an `<h5>` tag:

```html
<h5 class="typeH5">Quinary Heading Example</h5>
```

### TypeH6 - H6 Heading

Renders an `<h6>` element. Follows the same props and usage as TypeH1.


#### Style

```css
.TypeH6 {
	font-size: clamp(1rem, 1vw + 0.5rem, 1.313rem);;
	font-family: Rubik;
	font-weight: 500;
	font-style: normal;
	letter-spacing: 0.15px;
	text-decoration: none;
	text-transform: none;
}
```

##### Properties

- **Font Size**: Features a `clamp` function for a responsive font size that adjusts between a minimum of `1rem` and a maximum of `1.313rem`, with a dynamic middle value of `1vw + 0.5rem`. This responsive adjustment ensures that the text scales appropriately across various screen sizes, maintaining readability and a consistent appearance.

- **Font Family**: Assigned to `Rubik`, a sans-serif typeface recognized for its geometric aesthetics and friendly look. This choice contributes to the clarity and modernity of the text, suitable for headings and body text.

- **Font Weight**: Increased to `500`, indicating a medium weight. This level of weight strikes a perfect balance, offering a slight emphasis compared to normal weight without being overly bold, thus maintaining text clarity and effectiveness.

- **Font Style**: Maintains a `normal` style, indicating the absence of italicization. This choice keeps the text straightforward and focused on legibility.

- **Letter Spacing**: Slightly adjusted by `0.15px`, providing a minor increase in space between characters. This adjustment enhances readability and visual comfort, particularly in smaller text sizes.

- **Text Decoration**: Set to `none`, ensuring that the text does not feature any underlines, overlines, or strike-throughs. This clean presentation focuses attention on the text content itself, without additional visual distractions.

- **Text Transform**: Also set to `none`, allowing the text to display exactly as typed, without automatic conversion to uppercase, lowercase, or capitalized styles. This ensures the intended text formatting is preserved.


**Usage:**

To implement the `.TypeH6` style, simply apply the class to your desired HTML element. Here is an example using an `<h6>` tag:

```html
<h6 class="TypeH6">Sextenary Heading Example</h6>
```

## Subtitle Types

### TypeSubTitle1 - Subtitle 1

Renders a paragraph (`<p>`) styled as a subtitle.

Follows the same props and usage as TypeH1.

#### Style

```css
.typeSubTitle1 {
	font-size: clamp(0.875rem, 2vw - 0.25rem, 1rem);
	font-family: Rubik;
	font-weight: 400;
	font-style: normal;
	letter-spacing: 0.15px;
	text-decoration: none;
	text-transform: none;
}
```

##### Properties

- **Font Size**: Employs a `clamp` function to achieve a responsive font size that gracefully adjusts across different display sizes. The size ranges from a minimum of `0.875rem` to a maximum of `1rem`, with a variable component of `2vw - 0.25rem`. This formula ensures that the subtitle text scales effectively, maintaining readability and proportionate sizing in relation to the screen width.

- **Font Family**: Set to `Rubik`, a modern, sans-serif typeface known for its geometric shapes and friendly aesthetic. Rubik provides a clean and contemporary look, enhancing the readability and visual appeal of the subtitle text.

- **Font Weight**: Maintains a `400` weight, indicating a normal or regular style. This font weight is ideal for subtitles, as it ensures the text is not overly bold or too light, striking a good balance that complements the main title.

- **Font Style**: Specified as `normal`, meaning the text is presented in a standard, upright format without italics. This choice aids in readability and maintains a straightforward and professional appearance.

- **Letter Spacing**: Adjusted by `0.15px`, introducing a slight increase in space between characters. This minor adjustment can enhance the readability of the subtitle, especially at smaller sizes, and improve the overall text presentation.

- **Text Decoration**: Set to `none`, which means that the text does not have any underlines, overlines, or strike-throughs. This clean styling keeps the focus on the subtitle content itself, without additional visual distractions.

- **Text Transform**: Also set to `none`, allowing the subtitle text to display exactly as typed, without automatic conversions to uppercase, lowercase, or capitalized forms. This ensures that the subtitle accurately reflects the intended text formatting.


**Usage:**

To use the `.typeSubTitle1` style, add the class to the HTML element designated as a subtitle or secondary text. Here is an example with a `<p>` tag:

```html
<p class="typeSubTitle1">Your Subtitle Here</p>
```

### TypeSubTitle2 - Subtitle 2

Another subtitle variant. Follows the same props and usage as TypeSubTitle1.

#### Style

```css
.typeSubTitle2 {
	font-size: clamp(0.75rem, 2vw - 0.25rem, 0.875rem);
	font-family: Rubik;
	font-weight: 500;
	font-style: normal;
	letter-spacing: 0.1px;
	text-decoration: none;
	text-transform: none;
}
```

##### Properties

- **Font Size**: Utilizes a `clamp` function for responsive font sizing, allowing the font size to adjust between a minimum of `0.75rem` and a maximum of `0.875rem`, with a variable middle value of `2vw - 0.25rem`. This ensures that the subtitle text remains proportionate and legible across various screen sizes, subtly adjusting to enhance readability.

- **Font Family**: Assigned to `Rubik`, a geometric, sans-serif typeface renowned for its contemporary appearance and readability. The choice of Rubik adds a modern touch to the text, making it clear and appealing.

- **Font Weight**: Increased to `500`, indicating a medium weight. This provides a modest emphasis compared to the standard weight, helping the subtitle to stand out without overpowering the main title or primary text.

- **Font Style**: Set as `normal`, ensuring the text is displayed upright, without italics. This standard approach aids in maintaining clarity and straightforwardness in the presentation of the subtitle.

- **Letter Spacing**: Slightly adjusted by `0.1px`, which is a subtle increase in the space between characters. This adjustment is intended to improve legibility and the overall aesthetics of the subtitle, especially at smaller font sizes.

- **Text Decoration**: Specified as `none`, meaning the subtitle text is free from underlines, overlines, or strike-throughs. This clean styling approach emphasizes the content itself without unnecessary visual distractions.

- **Text Transform**: Also set to `none`, allowing the subtitle to be displayed exactly as typed, without automatic case transformations. This respects the intended formatting, ensuring the subtitle accurately conveys the desired message.


**Usage:**

To apply the `.typeSubTitle2` styling, simply add the class to an HTML element that serves as a secondary subtitle or complementary text. Here is an example using a `<span>` tag within a paragraph:

```html
<p>Primary text <span class="typeSubTitle2">secondary subtitle</span></p>
```

## Body Types

### TypeBody1 - Body Text 1

Renders a paragraph (`<p>`) styled for standard body text.

Follows the same props and usage as TypeH1.

#### Style

```css
.typeBody1 {
	font-size: clamp(0.875rem, 2vw - 0.25rem, 1rem);;
	font-family: Fira Code;
	font-weight: 400;
	font-style: normal;
	letter-spacing: 0.5px;
	text-decoration: none;
	text-transform: none;
}
```

##### Properties

- **Font Size**: Employs a `clamp` function to dynamically adjust the font size across different screen sizes. The size ranges from a minimum of `0.875rem` to a maximum of `1rem`, with an intermediate scaling formula of `2vw - 0.25rem`. This responsive design ensures the text remains accessible and legible on any device.

- **Font Family**: Set to `Fira Code`, a monospaced font known for its distinct character and readability. Fira Code is typically used for code snippets and technical documentation, but its clarity makes it an interesting choice for body text, adding a modern and digital feel to the content.

- **Font Weight**: Maintains a `400` weight, indicating a normal or regular style. This weight is ideal for body text as it provides clear readability without being overly heavy or light.

- **Font Style**: Specified as `normal`, meaning the text is displayed in its upright form without any tilt, ensuring ease of reading.

- **Letter Spacing**: Adjusted by `0.5px`, introducing a slight increase in the space between characters. This enhancement can improve readability and comfort, especially in longer passages of text.

- **Text Decoration**: Set to `none`, ensuring the text does not feature underlines, overlines, or strike-throughs. This clean presentation focuses the reader's attention on the content itself, without distractions.

- **Text Transform**: Also set to `none`, allowing the text to display exactly as typed. This setting respects the original formatting, ensuring that case usage is preserved and the text conveys the intended message accurately.


**Usage:**

To apply the `.typeBody1` styling to an element, include the class in your HTML element like so:

```html
<p class="typeBody1">This is an example of body text styled with .typeBody1, demonstrating readability and comfort for long-form content.</p>
```

### TypeBody2 - Body Text 2

Another body text variant. Follows the same props and usage as TypeBody1.

#### Style

```css
.typeBody2 {
	font-size: clamp(0.75rem, 2vw - 0.25rem, 0.875rem);
	font-family: Fira Code;
	font-weight: 400;
	font-style: normal;
	letter-spacing: 0.25px;
	text-decoration: none;
	text-transform: none;
}
```

##### Properties

- **Font Size**: Utilizes a `clamp` function for adaptive font sizing, adjusting from a minimum of `0.75rem` to a maximum of `0.875rem`, with a responsive middle value of `2vw - 0.25rem`. This ensures the text size is balanced across various display sizes, enhancing readability without overwhelming the primary content.

- **Font Family**: Assigned to `Fira Code`, a monospaced font favored for its clear and uniform appearance. While traditionally used for coding, Fira Code's readability makes it a unique choice for body text, adding a contemporary and technical flair to the content.

- **Font Weight**: Maintains a `400` weight, indicating a standard or normal appearance. This weight is optimal for secondary text, offering clear legibility without drawing undue attention away from more prominent elements.

- **Font Style**: Kept as `normal`, ensuring the text is upright and straightforward, which aids in readability and keeps the text accessible to all readers.

- **Letter Spacing**: Adjusted by `0.25px`, providing a modest increase in space between characters. This slight expansion helps to improve readability, particularly in dense or technical content, making the text more approachable.

- **Text Decoration**: Set to `none`, meaning the text is free of underlines, overlines, or strike-throughs. This clean approach allows the content to speak for itself without unnecessary embellishments.

- **Text Transform**: Also set to `none`, preserving the text's original case without automatic alterations. This ensures the intended emphasis and formatting are maintained, providing a consistent and clear message.


**Usage:**

To utilize the `.typeBody2` styling, simply add the class to your HTML element in the desired location. Here is an example using a `<span>` tag within a larger paragraph:

```html
<p>This is the primary body text, <span class="typeBody2">and this is secondary text styled with .typeBody2, offering a nuanced but readable contrast.</span></p>
```



## Special Types

### TypeButton - Button Text

Renders a paragraph (`<p>`) styled for button text.

Follows the same props and usage as TypeH1.

#### Style

```css
.typeButton {
	font-size: clamp(0.75rem, 2vw - 0.25rem, 0.875rem);;
	font-family: Fira Code;
	font-weight: 400;
	font-style: normal;
	letter-spacing: 1.25px;
	text-decoration: none;
	text-transform: uppercase;
}
```

##### Properties

- **Font Size**: Features a `clamp` function to dynamically adjust the font size, ranging from a minimum of `0.75rem` to a maximum of `0.875rem`, with an intermediate value of `2vw - 0.25rem`. This responsive sizing ensures the button text remains legible on different devices and screen sizes.

- **Font Family**: Set to `Fira Code`, a monospaced font with a modern and clean aesthetic. Fira Code's uniform character spacing enhances button text clarity, making it an unconventional but effective choice for user interface elements.

- **Font Weight**: Maintains a `400` weight, signifying a normal or standard thickness. This choice keeps the button text clear and readable without the heaviness of bolder weights.

- **Font Style**: Kept as `normal`, implying the text is displayed in its upright form. This standard presentation aids in the straightforward recognition of button labels.

- **Letter Spacing**: Adjusted by `1.25px`, significantly increasing the space between characters. This expansion helps make the button text more conspicuous and accessible, especially when capitalized, enhancing user interaction.

- **Text Decoration**: Specified as `none`, ensuring the button text is free from underlines, overlines, or strike-throughs. This clean styling prevents visual clutter and keeps the focus on the button's label.

- **Text Transform**: Set to `uppercase`, automatically converting all button text to capital letters. This transformation adds visual impact and consistency, making buttons more noticeable and uniform across the interface.


**Usage:**

To apply the `.typeButton` styling to an element intended as a button, simply add the class to your HTML button or link element. Here is an example with a `<button>` tag:

```html
<button class="typeButton">Click Me</button>
```

### TypeCaption - Caption Text

Renders a paragraph (`<p>`) styled as a caption.

Follows the same props and usage as TypeH1.

#### Style

```css
.typeCaption {
	font-size: 12px;
	font-family: Fira Code;
	font-weight: 400;
	font-style: normal;
	letter-spacing: 0.4px;
	text-decoration: none;
	text-transform: none;
}
```

##### Properties

- **Font Size**: Set at a fixed size of `12px`, which provides a standard readability for captions. This size is chosen for its subtlety and compatibility with a variety of content types, ensuring that captions are readable without overpowering the main content.

- **Font Family**: Uses `Fira Code`, a monospaced font known for its modernity and uniformity. While Fira Code is often associated with coding environments, its clarity makes it an excellent choice for caption text, offering a neat and orderly appearance.

- **Font Weight**: Maintains a `400` weight, which is the normal or standard font weight. This ensures that the caption text is neither too bold nor too light, balancing readability with a lightweight design.

- **Font Style**: Set to `normal`, indicating that the text is displayed upright. This standard approach to font style helps keep the caption text straightforward and easy to read.

- **Letter Spacing**: Adjusted by `0.4px`, adding a slight increase in spacing between characters. This enhancement aids in improving the legibility of small text, making captions more accessible.

- **Text Decoration**: Specified as `none`, meaning that the caption text will not include underlines, overlines, or strike-throughs. This clean styling ensures that captions remain unobtrusive and clear.

- **Text Transform**: Also set to `none`, allowing the caption text to maintain its original case without automatic conversions. This setting respects the intended text formatting, ensuring accurate and consistent presentation.


**Usage:**

To apply the `.typeCaption` styling to an element, simply include the class in your HTML element as shown below:

```html
<figcaption class="typeCaption">This is an example of a caption styled with .typeCaption.</figcaption>
```

### TypeOverline - Overline Text

Renders a paragraph (`<p>`) styled as overline text.

Follows the same props and usage as TypeH1.

#### Style

```css
.typeOverline {
	font-size: 10px;
	font-family: Inter;
	font-weight: 400;
	font-style: normal;
	letter-spacing: 1.5px;
	text-decoration: none;
	text-transform: uppercase;
}
```

##### Properties

- **Font Size**: Set at a modest `10px`, this small size is specifically chosen to ensure the text serves as an overline or subtle header without competing with the main content for attention. 

- **Font Family**: Utilizes `Inter`, a highly versatile sans-serif typeface known for its readability and clarity across various sizes and weights. Its geometric yet friendly appearance makes it suitable for contemporary digital environments.

- **Font Weight**: Maintains a `400` weight, providing a normal or regular emphasis that is neither too bold nor too light. This ensures that the overline text remains legible and unobtrusive.

- **Font Style**: Kept as `normal`, indicating that the text is displayed in its standard upright position. This choice maintains the clarity and straightforwardness of the overline text.

- **Letter Spacing**: Adjusted by `1.5px`, this significant increase in spacing between characters helps to improve legibility at small sizes and adds a stylistic element that distinguishes the overline text from other textual elements.

- **Text Decoration**: Specified as `none`, ensuring that the overline text is free from underlines, overlines, or strike-throughs, which keeps the presentation clean and focused on the text itself.

- **Text Transform**: Set to `uppercase`, this transformation elevates the text's visual impact and ensures uniformity, making it more noticeable and easier to read as an overline or categorization label.


**Usage:**

To apply the `.typeOverline` styling to an element, simply add the class to your desired HTML element. Here's how it could be used in a practical example:

```html
<div class="typeOverline">Section Title</div>
```

## Prop Notes

Each component is designed to be easily integrated into your project, allowing for consistent typography throughout your application. Remember to apply additional styles via the `className` prop as needed to match your design requirements.


