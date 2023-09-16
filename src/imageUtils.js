// Utility function to handle image loading errors by replacing with a fallback source
export function handleImageError(fallbackSrc) {
    // Returns a function that sets the image source to the fallback URL in case of an error
    return function (e) {
      e.target.src = fallbackSrc;
    };
}
  