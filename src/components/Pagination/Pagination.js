import React from 'react';

import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

const Pagination =  ({ info, pageNumber, setPageNumber }) => {
 
  
  return <ReactPaginate
  className= "pagination justify-content-center gap-3 my-3"
  forcePage ={pageNumber===1? 0 :  pageNumber - 1}
 
  nextLabel ="Next"
  previousLabel ="Prev"
  nextClassName = {`${styles.btn} btn`} 
  previousClassName = {`${styles.btn} btn`}
  pageClassName = " rounded-circle page-item"
  pageLinkClassName = "page-link"
  onPageChange = {(data) =>
    setPageNumber(data.selected + 1)
    } 
  
  activeClassName = {`${styles.btn} active`}
   pageCount = {info?.pages}/>;

};

export default Pagination;