import Modal, { ModalHeader } from '../../UIComp/Modal';

function PairDevice({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <ModalHeader title='Pair your Device' />
    </Modal>
  )
}

export default PairDevice