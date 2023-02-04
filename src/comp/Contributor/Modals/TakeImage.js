import Modal, { ModalHeader } from '../../UIComp/Modal';

function TakeImage({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <ModalHeader title='Take Image' />
    </Modal>
  )
}

export default TakeImage