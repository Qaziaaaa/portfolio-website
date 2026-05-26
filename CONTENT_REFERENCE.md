# Content Reference — Extracted from index.html

## META TAGS
- **Title:** Portfolio
- **Description:** Illustration Based Portfolio Website Template
- **Favicon:** `/favicon.svg`
- **Font:** Sora (100-800 weights) via Google Fonts
- **Lang:** en
- **Scroll:** smooth

## TAILWIND CONFIG
- **Font:** `sora: ['Sora', 'sans-serif']`
- **Colors (custom):**
  - `black: '#000'`, `white: '#fff'`
  - `zinc: { 100: '#F8F8F8', 200: '#F0F0F0', 300: '#E8E8E8', 400: '#D8D8D8', 500: '#C8C8C8', 600: '#B0B0B0', 700: '#787878', 800: '#505050', 900: '#383838' }`
- **Screens:** `sm: 480px`, `md: 768px`, `lg: 976px`, `xl: 1440px`

## NAVBAR
- **Logo text:** "Personal" (bold, text-xl)
- **Logo icon:** `favicon.svg`
- **Nav links (4):** About (#about), Skills (#skills), Projects (#projects), Contact Me (#contact)
- **Resume button:** `w-[153px] h-14 px-5 py-4 bg-black rounded` with download arrow SVG
- **Resume link:** `https://github.com/manulthanura/Illustration-Based-Portfolio` (target="_blank")
- **Mobile:** Hamburger toggle with `data-collapse-toggle="navbar-default"`

## HERO SECTION
- **Section id:** "hero"
- **Layout:** `flex-col-reverse` (mobile: image on top), `md:flex-row` (desktop: text left, image right)
- **Widths:** text `md:w-5/12`, image `md:w-7/12`
- **Headings:**
  1. "Hello I'am **Jone Due**" (`text-4xl font-normal md:text-5xl`)
  2. "Frontend **Developer**" (outline text: `font-outline-sm md:font-outline`, white text color)
  3. "**Based In** London" (`text-4xl font-extrabold md:text-5xl`)
- **Subtext:** "I'm Jone Due Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
  - `text-zinc-500 text-base font-normal leading-normal tracking-tight pb-8`
- **Social icons row:** `w-[264px] h-14 py-1 gap-6 inline-flex`
  - Icon 1: Facebook (black bg, white logo)
  - Icon 2: Discord (border-2 black, black logo)
  - Icon 3: Twitter/X (border-2 black, black logo)
  - Icon 4: Discord/Game (border-2 black, black logo, 18x20 viewBox)
- **Hero image:** `/hero.svg` — illustration of man with laptop

## SKILLS SECTION
- **Section id:** "skills"
- **Title:** "My **Skills**"
- **Grid:** `grid-cols-2` mobile, `md:flex md:flex-wrap` desktop, `gap-[10px] md:gap-[71px]`
- **Card size:** `h-[145px] w-[145px] md:h-[186px] md:w-[186px]`
- **Card style:** rounded, bg-white, border-[2px] border-black, flex-col center
- **Icon:** Generic git-branch SVG in each card (black, 56x56 viewBox but cropped)
- **Skills (10 items, some repeated):**
  1. Git
  2. Javascript
  3. Sass/Scss
  4. Nest.Js
  5. Storybook
  6. Socket.io
  7. Nest.Js (duplicate)
  8. Git (duplicate)
  9. Storybook (duplicate)
  10. Sass/Scss (duplicate)

## EXPERIENCE SECTION
- **Background:** `bg-black`
- **Title:** "My **Experience**" (`text-white text-4xl font-bold md:text-5xl`)
- **3 Experience cards**, each with:
  - Branch icon SVG (white, 32x32)
  - **Card 1:**
    - Title: "Lead Software Engineer at Google" (`md:text-2xl text-xl font-semibold`)
    - Period: "Nov 2019 - Present" (`text-zinc-300 text-base font-semibold`)
    - Description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
  - **Card 2:**
    - Title: "Software Engineer at Youtube"
    - Period: "Jan 2017 - Oct 2019"
    - Description: "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability."
  - **Card 3:**
    - Title: "Junior Software Engineer at Apple"
    - Period: "Jan 2016 - Dec 2017"
    - Description: "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team."

## ABOUT SECTION
- **Section id:** "about"
- **Layout:** `md:flex-row` (image left, text right)
- **Widths:** image `md:w-5/12`, text `md:w-7/12`
- **About image:** `/about.svg` — illustration of man with laptop
- **Title:** "**About** me" (`text-5xl font-normal md:text-5xl leading-[56px]`)
- **Bio text** (`text-zinc-600 text-base font-normal leading-normal tracking-tight mt-5 text-justify`):
  "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
  
  I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
  
  When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub."

## PROJECTS SECTION
- **Section id:** "projects"
- **Background:** `bg-black`
- **Padding:** `pt-14 pb-32 space-y-24`
- **Title:** "My **Projects**" (`text-white text-4xl font-bold md:text-5xl`)
- **3 projects with alternating layout:**

  **Project 01 — "Crypto Screener Application"**
  - Number: "01" (`text-2xl font-bold tracking-tight`)
  - Title: "Crypto Screener Application" (`text-3xl font-bold tracking-tight`)
  - Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
  - Link icon: External link arrow SVG (white stroke)
  - Image placeholder: "Project 01" text on `bg-zinc-800`, `min-height:200px`
  - Layout: text left, image right

  **Project 02 — "Euphoria - Ecommerce (Apparels) Website Template"**
  - Number: "02"
  - Title: "Euphoria - Ecommerce (Apparels) Website Template"
  - Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
  - Image: "Project 02" placeholder
  - Layout: **image left, text right** (`lg:col-start-2`)

  **Project 03 — "Blog Website Template"**
  - Number: "03"
  - Title: "Blog Website Template"
  - Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
  - Image: "Project 03" placeholder
  - Layout: text left, image right

## TESTIMONIAL SECTION
- **Title:** "My **Testimonial**" (`text-4xl font-normal md:text-5xl`)
- **Grid:** `md:grid-cols-3 gap-6 lg:gap-12`
- **Card style:** `py-[30px] px-[23px] gap-[18px] border-zinc-500 rounded-xl shadow-lg items-center`

  **Card 1 — Maria Smantha**
  - Initial avatar: "M" on `w-32 h-32 rounded-full bg-zinc-300`, 4xl bold
  - Quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur."
  - Name: "Maria Smantha" (`text-xl font-semibold`)
  - Role: "Web Developer" (`font-semibold text-zinc-700`)
  - Background: white/default

  **Card 2 — Lisa Cudrow (center, highlighted)**
  - Initial avatar: "L" on `w-32 h-32 rounded-full bg-zinc-600`
  - Quote: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi."
  - Name: "Lisa Cudrow"
  - Role: "Graphic Designer" (`font-semibold text-zinc-300`)
  - Background: `bg-black text-white`

  **Card 3 — John Smith**
  - Initial avatar: "J" on `bg-zinc-300`
  - Quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."
  - Name: "John Smith"
  - Role: "Marketing Specialist" (`font-semibold text-zinc-700`)
  - Background: white/default

## CONTACT SECTION
- **Section id:** "contact"
- **Layout:** `flex-col-reverse md:flex-row` (mobile: heading first, form below)
- **Widths:** form `md:w-5/12`, heading `md:w-6/12`
- **Form fields:**
  - "Your Name" — `input type="text"`, `border-black border-2`, `placeholder:text-slate-400`
  - "Your Email" — `input type="email"`
  - "Subject" — `input type="text"`
  - "How can I help?" — `textarea rows="6"`
  - Submit button: "Get In Touch" — `bg-black text-white font-semibold rounded-md text-sm px-4 py-2.5 w-full`
- **Heading side:**
  - Title: "Let's **talk** for Something special" (outline on "talk", `text-4xl font-bold md:text-6xl`)
  - Subtitle: "I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences." (`text-base text-gray-600 pt-3`)
  - Contact info: "Youremail@email.com / 1234567890" (`text-2xl font-medium md:pt-8`)

## FOOTER
- **Background:** `bg-black bg-fixed bg-bottom`
- **Layout:** `flex-col md:flex-row`, centered
- **Logo:** `favicon.svg` (h-7) + "Personal" (text-white text-xl font-bold)
- **Left side:** Logo + brand name
- **Right side:** Copyright `© {currentYear} Personal` + "Made with Astro" (both text-white)
- **Copyright JS:** `document.getElementById("currentYear").innerHTML = new Date().getFullYear()`

## SVG ASSETS
- `/favicon.svg` — portfolio logo icon (used in nav, footer)
- `/hero.svg` — man with laptop illustration (hero section)
- `/about.svg` — man with laptop illustration (about section)

## INTERACTIONS
- **Mobile nav toggle:** Click hamburger toggles `hidden` class on `#navbar-default`
- **Nav link clicks:** Close mobile menu after navigation
- **Copyright year:** Dynamically set via JavaScript
- **Scroll behavior:** `scroll-smooth` on `<html>`
