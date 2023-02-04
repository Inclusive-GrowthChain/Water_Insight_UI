import Modal, { ModalHeader } from '../../UIComp/Modal';

function ColiformTest({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <ModalHeader title='Coliform Test' />
    </Modal>
  )
}

export default ColiformTest