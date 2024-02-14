import { Pagination } from 'antd';
const onChange = (pageNumber) => {
  console.log('Page: ', pageNumber);
};
const PaginationComponent = () => (
  <>
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    <br />
  </>
);
export default PaginationComponent;