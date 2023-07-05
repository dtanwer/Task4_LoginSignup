import { useState, useRef } from 'react'
import './index.css'
import Content from './Content'
import IconWithContent from './IconWithDetails'
import ChangeLocation from './ChangeLocation'
import { Modal, Input } from 'antd';
const { Search } = Input;

function Temprature({ data, setCityInput, setNoData,noData }) {
  const refOfInput = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSearch = (value) => {
    setIsModalOpen(false);
    setCityInput(value);
    setNoData(false)
  };
  return (
    <div className='temprature'>
      {!noData && <div>
        <Content data={data} />
        <IconWithContent data={data} />
      </div>}
      {
        noData && <div className='noData'>
          <h1>No Data Found</h1>
        </div>
      }
      <ChangeLocation showModal={showModal} />
      <Modal title="Search For City" width={1000} footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Search placeholder="Enter City" ref={refOfInput}  onSearch={onSearch} style={{ width: 900 }} />
      </Modal>
    </div>
  )
}

export default Temprature