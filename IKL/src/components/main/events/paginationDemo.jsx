import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationDemo = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationItem>
          <PaginationLink>2024</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2023</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2022</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2021</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2020</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2019</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2018</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2017</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2016</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2015</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>Vintage</PaginationLink>
        </PaginationItem>
        <PaginationNext>Next</PaginationNext>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationDemo;
