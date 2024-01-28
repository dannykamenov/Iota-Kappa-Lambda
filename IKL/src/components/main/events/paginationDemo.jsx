import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useState } from "react";

const PaginationDemo = () => {
  //auto display current year on page load
  const [currentPage, setCurrentPage] = useState(
    new Date().getFullYear().toString()
  );

  //function to handle pagination click


  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationItem>
          <PaginationLink href="/events-and-photos/2024">2024</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events-and-photos/2023">2023</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events-and-photos/2022">2022</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events-and-photos/2021">2021</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events-and-photos/2020">2020</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events-and-photos/2019">2019</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events-and-photos/2018">2018</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events-and-photos/2017">2017</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events-and-photos/2016">2016</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events-and-photos/2015">2015</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events-and-photos/vintage">Vintage</PaginationLink>
        </PaginationItem>
        <PaginationNext>Next</PaginationNext>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationDemo;
