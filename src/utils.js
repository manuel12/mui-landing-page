export const createObserver = (animationFuncs) => {
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        handleElementVisible(animationFuncs, entry.target.id, true);
      } else {
        handleElementVisible(animationFuncs, entry.target.id, false);
      }
    });
  });
};

export const handleElementVisible = (animationFuncs, elementId, value) => {
  console.log(elementId, value);
  animationFuncs[elementId](value);
};

export const observeElements = (elementClass, observer) => {
  const animationElements = document.querySelectorAll(elementClass);
  console.log(animationElements);
  animationElements.forEach((el) => observer.observe(el));
};
