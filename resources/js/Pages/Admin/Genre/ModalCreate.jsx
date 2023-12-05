import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import PrimaryButton from "@/Components/Admin/atoms/Button/PrimaryButton";

export default function ModalCreateGenre({
    title,
    modalHead,
    children,
    f_submit,
    proses,
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button colorScheme="teal" onClick={onOpen}>
                {title}
            </Button>
            <Modal size="lg" isOpen={isOpen} onClose={onClose}>
                <form onSubmit={f_submit}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{modalHead}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{children}</ModalBody>

                        <ModalFooter>
                            <PrimaryButton
                                className="mb-3 mt-2 me-4"
                                disabled={proses}
                            >
                                Save
                            </PrimaryButton>

                            <Button onClick={onClose}>Batal</Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    );
}
