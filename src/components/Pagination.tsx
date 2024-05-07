import { FC } from 'react';
import ReactPaginate from 'react-paginate';

type Props = {
    handlePageClick: (event: any) => Promise<void>;
    pageCount: number;
    forcePage: number;
}

const Pagination: FC<Props> = ({
    handlePageClick,
    pageCount,
    forcePage,
}) => {
    return (
        <div className="pagination-container">
            <ReactPaginate
                forcePage={forcePage}
                breakLabel="..."
                nextLabel={null}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={null}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                activeClassName={"active"}
            />
        </div>
    );
};

export default Pagination;
