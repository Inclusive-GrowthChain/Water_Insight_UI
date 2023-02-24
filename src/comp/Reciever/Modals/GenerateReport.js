import Modal from '../../UIComp/Modal';

function GenerateReport({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      title='Generate Report'
      closeModal={closeModal}
      contentCls="dfc w-[90vw] h-[80vh] overflow-y-hidden"
    >
      <div className='scroll-y'>

      </div>
    </Modal>
  )
}

export default GenerateReport