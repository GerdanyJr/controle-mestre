"use client";

import { Modal } from "../modal";
import Image from "next/image";
import { MessageModal } from "@/components/UI/messageModal";
import { useState } from "react";

export function DeleteModal({
  message,
  onConfirmPress,
  onClose,
}: {
  message: string
  onConfirmPress: () => Promise<{ message: string, error: boolean }>;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<{ message: string; error: boolean }>();

  async function deleteItem() {
    const response = await onConfirmPress();
    setStatus({ message: response.message, error: response.error });
  }

  return (
    <>
      {status && (
        <MessageModal
          message={status.message}
          icon={status.error ? "/img/error.png" : "/img/check.png"}
          onClose={onClose}
        />
      )}
      {!status && (
        <Modal
          className="flex flex-col items-center justify-center bg-orange-500 shadow-2xl p-8 gap-8 rounded-2xl"
          onClose={onClose}
        >
          <Image
            src={"/img/Alert.png"}
            width={150}
            height={150}
            alt="Ícone de alerta"
          />
          <h2 className="text-white font-bold text-3xl">
            {message}
          </h2>
          <div className="flex gap-16">
            <button
              className="py-4 w-48 bg-green-500 rounded-xl text-white font-bold text-xl hover:bg-green-700"
              onClick={deleteItem}
            >
              Sim
            </button>
            <button
              className="py-4 w-48 bg-red-500 rounded-xl text-white font-bold text-xl hover:bg-red-700"
              onClick={onClose}
            >
              Não
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}