import React from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination } from "@mui/material";

export default function ProjectPagination({
  count,
  page,
  onChange,
  currentOffset,
}) {
  // Function to scroll to the top
  const handleScroll = () => {
    setTimeout(() => {
      const targetElement = document.getElementById("target-section");
      if (targetElement) {
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.scrollY; //current position of the element & current scroll position to move the page correctly.
        window.scrollTo({
          //scrolls the page smoothly
          top: elementPosition - 50, // Adjust for fixed headers if needed
          behavior: "smooth",
        });
      }
    }, 100); // Small delay to ensure rendering is complete
  };

  return (
    <Pagination
      count={count}
      page={page}
      onChange={(event, value) => {
        onChange(event, value); // Handle page change
        handleScroll();
      }}
      color="primary"
      renderItem={(item) => {
        // Render "Previous" button if not on the first page
        if (item.type === "previous" && page > 1) {
          return (
            <button
              onClick={() => {
                item.onClick(); // Handle Pagination behavior
                handleScroll(); // Scroll to the top
              }}
              className={`flex items-center gap-2 px-4 py-2 mx-2 rounded-lg text-white ${
                item.disabled
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              <FontAwesomeIcon icon={faChevronLeft} /> Previous
            </button>
          );
        }

        // Render "Next" button if offset is valid (not empty or null)
        if (item.type === "next" && currentOffset) {
          return (
            <button
              onClick={() => {
                item.onClick(); // Handle Pagination behavior
                handleScroll(); // Scroll to the top
              }}
              className={`flex items-center gap-2 px-4 py-2 mx-2 rounded-lg text-white ${
                item.disabled
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Next <FontAwesomeIcon icon={faChevronRight} />
            </button>
          );
        }

        // If on the last page (offset is empty), hide "Next" button
        if (item.type === "next" && !currentOffset) {
          return null;
        }

        // Render null for other pagination types
        return null;
      }}
    />
  );
}
