import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { IGroupDeleteModalComponent } from "./interface";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ImageUploadComponent from "../../ImageUploadComponent";
import GroupuserTableComponent from "./GroupuserTableComponent";

export interface ICreateGroupFromFields {
  groupName: string;
  groupDescription: string;
}

const GroupUploadUsersModalComponent: React.FC<IGroupDeleteModalComponent> = ({
  open,
  setOpen,
}) => {
  // const { forOnlyAlphabet, forAlphaNumericWithoutDot } = useFormValidations();
  const [uploadedFile, setUploadedFile] = useState<null>(null);
  const [usertable, setUsertable] = useState<boolean>(false);

  const formHook = useForm<ICreateGroupFromFields>({
    defaultValues: {},
  });

  const onSubmit = () => {
    setUsertable(true);
  };

  const handleFileUpload = (file: any) => {
    setUploadedFile(file);
  };
  console.log(uploadedFile, "uploadedFile");
  return (
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={() => setOpen(false)}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                className={`relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-3 text-left shadow-xl transition-all sm:my-6 sm:w-full sm:max-w-${usertable ? "6xl" : "2xl"}  sm:p-6`}
              >
                {!usertable ? (
                  <form
                    className=" w-full mt-0"
                    onSubmit={formHook.handleSubmit(onSubmit)}
                  >
                    <div>
                      <p className="text-base font-bold text-[#333333] py-2 flex justify-between items-center">
                        Add Group Users
                        <span>
                          <XMarkIcon
                            className="w-6 h-6 text-base font-bold cursor-pointer"
                            onClick={() => setOpen(false)}
                          />
                        </span>
                      </p>

                      <div className=" ">
                        <p className="text-[#475467] ">
                          Adding users to the group will enable you to share the
                          survey form with them.
                        </p>
                      </div>
                      <div className="">
                        <ImageUploadComponent
                          onFileUploaded={handleFileUpload}
                        />
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 w-full flex justify-end gap-4">
                      <button
                        type="submit"
                        className="  w-auto justify-center rounded-md bg-gray-300 px-6 py-2 text-sm font-medium text-[#333333] shadow-sm"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="  w-auto justify-center rounded-md bg-[#333333] px-6 py-2 text-sm font-medium text-white shadow-sm"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                ) : (
                  <GroupuserTableComponent
                    data={uploadedFile}
                    setOpen={setOpen}
                  />
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default GroupUploadUsersModalComponent;
