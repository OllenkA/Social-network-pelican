import React from 'react';
// import PropTypes from 'prop-types';
import s from './AllPages.module.css';


let AllPages = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let allPages = pages.map((p, i) => {
        return <span key={i} className={props.currentPage === p ? s.selectedPage : null}
                     onClick={() => {
                         props.onPageChanged(p)
                     }}>
                        {p}
                    </span>
    });

    return <div className={s.pages}>
        {allPages}
    </div>
};

AllPages.propTypes = {};

export default AllPages;