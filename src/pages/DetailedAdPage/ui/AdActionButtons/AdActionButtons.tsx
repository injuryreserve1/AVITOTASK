import cls from "./AdActionButtons.module.css";
import Button from "@shared/ui/Button/Button";
import Modal from "@shared/ui/Modal/Modal";
import Reject from "../Reject/Reject";
import Pending from "../Pending/Pending";
import { useNavigate } from "react-router";
import { useState } from "react";
import { usePostQuery } from "@features/Ad";

interface Props {
  id: string | undefined;
}

const AdActionButtons = ({ id }: Props) => {
  const approveMutation = usePostQuery();
  const rejectMutation = usePostQuery();
  const pendingMutation = usePostQuery();

  const [isOpen, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [typeModal, setTypeModal] = useState<"reject" | "pending" | null>(null);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleApprove = () => {
    if (id) {
      approveMutation.mutate({ id: id, action: "approve" });
    }
    handleGoBack();
  };

  const handleReject = () => {
    if (id) {
      rejectMutation.mutate({
        id: id,
        action: "reject",
        reason: reason,
      });
    }
    handleGoBack();
  };

  const handlePending = () => {
    if (id) {
      pendingMutation.mutate({
        id: id,
        action: "request-changes",
        reason: reason,
      });
    }
    handleGoBack();
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className={cls.Actions}>
      <div className={cls.ActionButton}>
        <Button onClick={handleApprove} theme="green">
          Одобрить
        </Button>
      </div>
      <div className={cls.ActionButton}>
        <Button
          onClick={() => {
            setOpen((prev) => !prev);
            setTypeModal("reject");
          }}
          theme="red"
        >
          Отклонить
        </Button>
      </div>
      <div className={cls.ActionButton}>
        <Button
          onClick={() => {
            setOpen((prev) => !prev);
            setTypeModal("pending");
          }}
          theme="yellow"
        >
          Доработка
        </Button>
      </div>
      {/*я сомневаюсь что это хорошее решение*/}
      {/*можно было бы modal сделать через портал*/}
      {isOpen && typeModal == "reject" && (
        <Modal
          handleClick={closeModal}
          Component={Reject}
          setReason={setReason}
          reason={reason}
          handleAction={handleReject}
        />
      )}

      {isOpen && typeModal == "pending" && (
        <Modal
          handleClick={closeModal}
          Component={Pending}
          setReason={setReason}
          reason={reason}
          handleAction={handlePending}
        />
      )}
    </div>
  );
};

export default AdActionButtons;

//onClick={handleApprove}
