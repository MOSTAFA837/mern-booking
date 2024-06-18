import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../context/AppContext";

export default function SignOutButton() {
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Signed out!", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center bg-white border-blue-600 p-2 rounded-md text-blue-600 px-3 font-bold hover:bg-gray-100"
    >
      Sign out
    </button>
  );
}
