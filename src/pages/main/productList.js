import './productList.scss';

import BasicTabel from '../../modules/table/basicTabel'
import ShowSumContainer from '../../containers/showSumContainer';

function ProductList() {
  return (
    <div className="productList"> 
      <BasicTabel/>
      <ShowSumContainer/>
    </div>
  );
}

export default ProductList;
