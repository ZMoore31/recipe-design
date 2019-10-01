import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobal } from 'reactn';

import { Breadcrumb } from 'antd';

function Recipe() {
  // eslint-disable-next-line
  const [page, setPage] = useGlobal('page');

  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Link to="/" onClick={() => setPage('')}>
            Home
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Recipes</Breadcrumb.Item>
      </Breadcrumb>
      <div className="sub-content">
        <h1>This will be a listings of recipes</h1>
      </div>
    </div>
  );
}

export default Recipe;
