import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaginationDemo = ({ onYearChange }) => {
  const years = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "Vintage",
  ];
  const [currentPage, setCurrentPage] = useState(
    new Date().getFullYear().toString()
  );

  const navigate = useNavigate();

  const handlePageChange = (year) => {
    setCurrentPage(year);
    navigate(`/events-and-photos/${year}`);
    if (onYearChange) {
      onYearChange(year);
    }
  };

  const handleNext = () => {
    const currentIndex = years.indexOf(currentPage);
    if (currentIndex < years.length - 1) {
      handlePageChange(years[currentIndex - 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = years.indexOf(currentPage);
    if (currentIndex > 0) {
      handlePageChange(years[currentIndex + 1]);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <Button onClick={handleNext}>Next</Button>
        {years.map((year) => (
          <PaginationItem key={year}>
            <PaginationLink
              href={`/events-and-photos/${year}`}
              onClick={() => handlePageChange(year)}
              className={currentPage === year ? "btn-active" : ""}
            >
              {year}
            </PaginationLink>
          </PaginationItem>
        ))}
        <Button onClick={handlePrevious}>Previous</Button>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationDemo;
