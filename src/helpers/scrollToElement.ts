export const scrollToElement = (
  e:
    | React.MouseEvent<HTMLAnchorElement, MouseEvent>
    | React.MouseEvent<HTMLSpanElement, MouseEvent>,
  selector: string | undefined
): void => {
  if (selector) {
    const element = document.querySelector(selector);
    element?.scrollIntoView({ behavior: "smooth" });
    // Necessary to have `href` and not skip the smooth scrolling
    e.preventDefault();
    // Since we prevent the default behavior and therefore the changing of the hash via `href`,
    // we change the hash manually here
    window.history.pushState(null, selector.replace("#", ""), selector);
  } else {
    // Scroll back up to the top of the page
    const element = document.querySelector("body");
    element?.scrollIntoView({ behavior: "smooth" });

    window.history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }
};
