import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Repeat } from '../../utils';

const Breadcrumbs = ({pathChain, additionalClass}) => {
  return (
    <ul className={`breadcrumbs ${additionalClass}`}>
      <Repeat numTimes={pathChain.length}>
        {(i) => (
          <li key={i} className="breadcrumbs__item">
            <Link to={i < pathChain.length - 1 ? pathChain[i].link : `#`} className="breadcrumbs__link">{pathChain[i].name}</Link>
          </li>
        )}
      </Repeat>
    </ul>
  );
}

Breadcrumbs.propTypes = {
  pathChain: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
  })).isRequired,
  additionalClass: PropTypes.string,
}

export default Breadcrumbs;
