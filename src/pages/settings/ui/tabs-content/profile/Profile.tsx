import { useState } from "react";
import AddressForm from "./add-new-address";
import ActionButton from "../../../../../components/UI/common/form-controls/buttons/ActionButton";
import Modal from "../../../../../components/UI/common/modals/Modal";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="relative p-[46px] rounded-[32px] overflow-hidden text-white bg-noise">
      <div className="absolute inset-0 bg-[#141414] bg-opacity-[0.8] rounded-[32px]"></div>
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[40px] leading-[44px] tracking-wider">
            My Profile
          </h2>
          <ActionButton label={"Edit Profile"} onClick={handleOpenModal} />
        </div>
        <div className="w-full h-[2px] bg-[#FFFFFF33]"></div>
        <div className="flex justify-between gap-3 flex-wrap">
          <div className="bg-[#FFFFFF1A] px-8 py-6 rounded-[32px] flex-1 flex gap-12">
            <div className="flex gap-5 flex-col">
              <h3 className="font-semibold text-[20px] leading-[24px] text-[#FFFFFF99]">
                NAME:
              </h3>
              <h3 className="font-semibold text-[20px] leading-[24px] text-[#FFFFFF99]">
                SURNAME:
              </h3>
              <h3 className="font-semibold text-[20px] leading-[24px] text-[#FFFFFF99]">
                COUNTRY:
              </h3>
            </div>
            <div className="flex gap-5 flex-col">
              <p className="text-[20px] leading-[24px]">Name</p>
              <p className="text-[20px] leading-[24px]">Surname</p>
              <p className="text-[20px] leading-[24px]">Country</p>
            </div>
          </div>
          <div className="bg-[#FFFFFF1A] px-8 py-6 rounded-[32px] flex-1 flex gap-12">
            <div className="flex gap-5 flex-col">
              <h3 className="font-semibold text-[20px] leading-[24px] text-[#FFFFFF99] uppercase">
                favorite currency:
              </h3>
              <h3 className="font-semibold text-[20px] leading-[24px] text-[#FFFFFF99] uppercase">
                favorite chain:
              </h3>
              <h3 className="font-semibold text-[20px] leading-[24px] text-[#FFFFFF99] uppercase">
                favorite wallet:
              </h3>
            </div>
            <div className="flex gap-5 flex-col">
              <p className="text-[20px] leading-[24px]">Currency</p>
              <p className="text-[20px] leading-[24px]">Chain</p>
              <p className="text-[20px] leading-[24px]">Wallet</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={"Add a New Address"}
        subTitle={"Add address for billing address"}
      >
        <AddressForm />
      </Modal>
    </div>
  );
};

export default Profile;
