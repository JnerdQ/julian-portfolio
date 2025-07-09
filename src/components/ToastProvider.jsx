import * as React from "react";
import * as Toast from "@radix-ui/react-toast";

const ToastContext = React.createContext(() => {});

export const useToast = () => React.useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({ title: "", type: "success" });

  const triggerToast = (msg) => {
    setData(msg);
    setOpen(false);
    setTimeout(() => setOpen(true), 10);
  };

  const bg =
    data.type === "success"
      ? "bg-primary text-primary-foreground"
      : "bg-card text-foreground border border-primary";

  return (
    <ToastContext.Provider value={triggerToast}>
      {children}
      <Toast.Provider swipeDirection="right">
        <Toast.Root
          className={`fixed bottom-4 right-4 z-50 px-6 py-3 rounded-md shadow-md ${bg}`}
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Title className="text-sm font-medium">
            {data.title}
          </Toast.Title>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 right-0 p-6 w-auto max-w-sm z-50 outline-none" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
};
