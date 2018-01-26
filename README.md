# Simba Market

- Mobile First only. This essentially means starting at mobile size and building up to desktop. You use min-width media queries to go up instead of max-width to go down. This works on the principles of progressive enhancement and graceful degredation. In short, it ends up being much easier to maintain and build. In very small number of cases, you might want to use max-width.

- Please make proper use of SCSS when possible. 

- You can grab a lot of CSS specs from Zeplin (drop shadow, gradients, etc), but make sure you don't copy *everything*. Sometimes it gives junk CSS.

- Use Flexbox, not inline-block (except certain cases), floats, etc

- Try to be mindful of when something should be an image or recreated with CSS. If something is going to take you 3 hours in CSS or 10 minutes as image export, might as well use image. With that said, CSS is much more efficent.

- PNGs are much larger than JPGs if the image isn't solid colors. Make sure you aren't exporting 2MB PNGs. PNG's should be like 200-400KB max.

- Make proper use of h1, h2, h3, etc. "Our Vision, "Who is Simba?" etc would be h2s. There is only h1 on the page.

- Sometimes font weights might need to be adjusted to match design. E.g. Zeplin says font weight 500 but you have to do 400 because the browser makes it too thick.

- Feel free to use the standard Bootstrap 4 media queries for now.

- Psuedo elements (:before, :after) can be your best friend, don't be afraid to use them.

- Make sure you don't abuse bootstrap, you don't need to use it for *everything*. Sometimes it is easier to use Flexbox.

- Remember that items need to be 2x for retina / high density displays.

- Don't worry about animations, I can take care of that at the end.

- If you get stuck on anything, ASK ME!!! Don't spend 8 hours stuck on something!
