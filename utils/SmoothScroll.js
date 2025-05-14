import { useEffect } from 'react';

// Custom hook for smooth scrolling
function useSmoothScroll() {
  useEffect(() => {
    // Get all links with hash
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Enhanced smooth scrolling function
    const scrollToID = (id) => {
      const element = document.getElementById(id);
      if (!element) return;
      
      // Get the element's position
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      
      // Add an offset if you have a fixed header
      // Replace 60 with your header height if needed
      const headerOffset = 60;
      const offsetPosition = absoluteElementTop - headerOffset;
      
      // Duration in milliseconds
      const duration = 800;
      let startTime = null;
      const startPosition = window.pageYOffset;
      
      // Calculate distance
      const distance = offsetPosition - startPosition;
      
      // Easing function for smoother animation
      function easeInOutCubic(t) {
        return t < 0.5 
          ? 4 * t * t * t 
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      }
      
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + (distance * easeProgress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      
      // Start animation
      requestAnimationFrame(animation);
    };
    
    // Click event handler
    const handleLinkClick = (e) => {
      e.preventDefault();
      
      // Get the target ID from href
      const href = e.currentTarget.getAttribute('href');
      if (!href || href === '#') return;
      
      const id = href.substring(1);
      
      // Scroll to the element
      scrollToID(id);
      
      // Update URL without reloading page
      if (history.pushState) {
        history.pushState(null, null, href);
      } else {
        location.hash = href;
      }
    };
    
    // Add click event listeners to all hash links
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });
    
    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);
}

// Component that provides smooth scrolling functionality
const SmoothScroll = () => {
  useSmoothScroll();
  return null;
};

export default SmoothScroll;