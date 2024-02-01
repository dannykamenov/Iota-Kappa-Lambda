import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaginationDemo = ({ onYearChange }) => {
  const years = [
    "Vintage",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ];
  const [currentPage, setCurrentPage] = useState();

  const [activeYear, setActiveYear] = useState(currentPage);

  const navigate = useNavigate();

  useEffect(() => {
    setActiveYear(currentPage);
  }, [currentPage]);


  const handlePageChange = (year) => {
    setCurrentPage(year);
    setActiveYear(year);
    if (onYearChange) {
      onYearChange(year);
    }
    navigate(`/events-and-photos/${year}`);
  };

  const handleNext = () => {
    const currentIndex = years.indexOf(currentPage);
    if (currentIndex < years.length - 1) {
      handlePageChange(years[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = years.indexOf(currentPage);
    if (currentIndex > 0) {
      handlePageChange(years[currentIndex - 1]);
    }
  };

  return (
    <Pagination>
      <Button onClick={handlePrevious}>Previous</Button>
      <PaginationContent>
        {years.map((year) => (
          <PaginationItem key={year}>
            <PaginationLink
              onClick={() => handlePageChange(year)}
              className={activeYear === year ? "btn-active" : "btn-inactive"}
            >
              {year}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
      <Button onClick={handleNext}>Next</Button>
    </Pagination>
  );
};

export default PaginationDemo;
