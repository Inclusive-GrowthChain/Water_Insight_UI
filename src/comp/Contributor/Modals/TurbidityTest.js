import Modal, { ModalHeader } from '../../UIComp/Modal';

function TurbidityTest({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <ModalHeader title='Turbidity Test' />
    </Modal>
  )
}

export default TurbidityTest